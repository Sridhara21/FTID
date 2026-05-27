'use client';

type Doc = Record<string, any> & { id: string };
type Collection = Doc[];
type Store = Record<string, Collection>;

let store: Store = {};
let listeners: Array<(store: Store) => void> = [];

const STORE_KEY = 'ftid_local_store';

function load() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) {
      try {
        store = JSON.parse(saved);
        if (Object.keys(store).length === 0) seedData();
      } catch (e) {
        store = {};
        seedData();
      }
    } else {
      seedData();
    }
  }
}

function seedData() {
  store = {
    aml_alerts: [
      { id: '1', type: 'Layering', risk: 'High', amount: 54000, entities: ['Company A', 'Shell B'], status: 'Open', timestamp: Date.now() - 100000 },
      { id: '2', type: 'Structuring', risk: 'Medium', amount: 12000, entities: ['User X'], status: 'Investigating', timestamp: Date.now() - 500000 },
    ],
    graph_nodes: [
      { id: 'n1', label: 'Citizen John', type: 'citizen', riskScore: 10 },
      { id: 'n2', label: 'Shell Corp A', type: 'business', riskScore: 95 },
      { id: 'n3', label: 'Bank XYZ', type: 'bank', riskScore: 5 },
    ],
    audit_logs: [
      { id: 'a1', action: 'KYC Approved', actor: 'SysAdmin', timestamp: Date.now() - 3600000 },
      { id: 'a2', action: 'Flagged Transaction', actor: 'AML Engine', timestamp: Date.now() - 1800000 },
    ],
    economic_indicators: [
      { id: 'e1', metric: 'GDP Growth', value: '7.2%', trend: 'up' },
      { id: 'e2', metric: 'Inflation', value: '4.1%', trend: 'down' },
    ]
  };
  persist();
}

function persist() {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  }
  listeners.forEach(l => l(store));
}

load();

export const collection = (db: any, name: string) => ({ type: 'collection', name, path: name });

export const doc = (dbOrCol: any, idOrPath?: string, maybeId?: string) => {
  let colName = '';
  let docId = '';
  if (dbOrCol?.type === 'collection') {
    colName = dbOrCol.name;
    docId = idOrPath || crypto.randomUUID();
  } else if (typeof idOrPath === 'string') {
    if (maybeId) {
      colName = idOrPath;
      docId = maybeId;
    } else {
      const parts = idOrPath.split('/');
      if (parts.length > 1) {
        colName = parts[0];
        docId = parts[1];
      } else {
        colName = 'default';
        docId = parts[0];
      }
    }
  } else {
      colName = 'default';
      docId = crypto.randomUUID();
  }
  return { type: 'doc', id: docId, collection: colName, path: `${colName}/${docId}` };
};

export const getDocs = async (queryObj: any) => {
    const docs = await queryObj.get();
    return { docs: docs.map((d: any) => ({ id: d.id, data: () => d })) };
};

export const getDoc = async (ref: { id: string; collection: string }) => {
    const docs = store[ref.collection] ?? [];
    const d = docs.find(doc => doc.id === ref.id);
    return {
        exists: () => !!d,
        id: ref.id,
        data: () => d
    };
};

export const addDoc = async (col: { name: string }, data: any) => {
  const id = crypto.randomUUID();
  const newDoc = { id, ...data };
  store[col.name] = [...(store[col.name] ?? []), newDoc];
  persist();
  return { id, path: `${col.name}/${id}` };
};

export const setDoc = async (
  ref: { id: string; collection: string },
  data: any,
  { merge = false } = {}
) => {
  const docs = store[ref.collection] ?? [];
  const idx = docs.findIndex((d) => d.id === ref.id);
  if (idx >= 0) {
    docs[idx] = merge ? { ...docs[idx], ...data } : { id: ref.id, ...data };
  } else {
    docs.push({ id: ref.id, ...data });
  }
  store[ref.collection] = docs;
  persist();
};

export const updateDoc = async (ref: { id: string; collection: string }, data: any) => {
    return setDoc(ref, data, { merge: true });
};

export const deleteDoc = async (ref: { id: string; collection: string }) => {
    const docs = store[ref.collection] ?? [];
    store[ref.collection] = docs.filter(d => d.id !== ref.id);
    persist();
};

export const where = (field: string, op: '==' | '<' | '>', value: any) => (docs: Doc[]) =>
  docs.filter((d) => {
    const v = d[field];
    if (op === '==') return v === value;
    if (op === '<') return v < value;
    return v > value;
  });

export const orderBy = (field: string, dir: 'asc' | 'desc' = 'asc') => (docs: Doc[]) =>
  [...docs].sort((a, b) => {
    if (a[field] < b[field]) return dir === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return dir === 'asc' ? 1 : -1;
    return 0;
  });

export const limit = (n: number) => (docs: Doc[]) => docs.slice(0, n);

export const query = (col: { name: string }, ...constraints: ((d: Doc[]) => Doc[])[]) => {
    const q = {
      type: 'query',
      _col: col,
      _constraints: constraints,
      async get() {
        let docs = store[col.name] ?? [];
        for (const c of constraints) docs = c(docs);
        return docs;
      },
      __memo: true
    };
    return q;
};

// real-time listener for useCollection and useDoc
export const onSnapshot = (
  queryOrRef: any,
  onNext: (snapshot: any) => void,
  onError?: (err: any) => void
) => {
  const execute = () => {
    try {
        let docs: Doc[] = [];
        if (queryOrRef.type === 'query') {
            docs = store[queryOrRef._col.name] ?? [];
            for (const c of queryOrRef._constraints) docs = c(docs);
        } else if (queryOrRef.type === 'collection') {
            docs = store[queryOrRef.name] ?? [];
        } else if (queryOrRef.type === 'doc') {
            const d = (store[queryOrRef.collection] ?? []).find(doc => doc.id === queryOrRef.id);
            if (d) {
                onNext({
                    exists: () => true,
                    id: d.id,
                    data: () => d
                });
                return;
            } else {
                onNext({
                    exists: () => false,
                    id: queryOrRef.id,
                    data: () => undefined
                });
                return;
            }
        }
        
        // for collection/query
        const snapshot = {
            docs: docs.map(d => ({
                id: d.id,
                data: () => d
            }))
        };
        onNext(snapshot);
    } catch(e) {
        if (onError) onError(e);
    }
  };
  
  execute();
  const listener = () => execute();
  listeners.push(listener);
  
  return () => {
      const i = listeners.indexOf(listener);
      if (i >= 0) listeners.splice(i, 1);
  };
};
