const admin = require('firebase-admin');
const serviceAccount = require('./Service_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const deleteCollection = async (db, collectionPath, batchSize) => {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.orderBy('__name__').limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, resolve).catch(reject);
  });
};

async function deleteQueryBatch(db, query, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
}

const wipeProject = async () => {
  try {
    console.log("Starting Firebase Wipe...");

    // 1. Wipe Auth Users
    let users = [];
    let nextPageToken;
    do {
      const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
      users = users.concat(listUsersResult.users);
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);

    if (users.length > 0) {
      console.log(`Found ${users.length} users. Deleting...`);
      const uids = users.map(user => user.uid);
      
      // Delete in batches of 1000
      for (let i = 0; i < uids.length; i += 1000) {
        const batchUids = uids.slice(i, i + 1000);
        const deleteUsersResult = await admin.auth().deleteUsers(batchUids);
        console.log(`Successfully deleted ${deleteUsersResult.successCount} users.`);
      }
    } else {
      console.log("No users found in Auth.");
    }

    // 2. Wipe Firestore Collections
    const db = admin.firestore();
    console.log("Wiping 'citizens' collection...");
    await deleteCollection(db, 'citizens', 100);
    console.log("Wiping 'transactions' collection...");
    await deleteCollection(db, 'transactions', 100);
    // don't wipe platformAdmins just in case

    console.log("All requested data wiped successfully!");
  } catch (error) {
    console.error("Error during wipe:", error);
  }
};

wipeProject();
