"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";
import { Loader2, Search, Crosshair } from "lucide-react";

export default function NetworkGraph() {
  const [data, setData] = useState<{nodes: any[], links: any[]}>({ nodes: [], links: [] });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const fgRef = useRef<ForceGraphMethods | undefined>(undefined);

  useEffect(() => {
    fetch('/api/graph')
      .then(res => res.json())
      .then(graphData => {
        // Pre-process neighbors
        const crossLinked = { ...graphData };
        crossLinked.nodes.forEach((node: any) => {
          node.neighbors = [];
          node.links = [];
        });
        crossLinked.links.forEach((link: any) => {
          const a = crossLinked.nodes.find((n: any) => n.id === link.source);
          const b = crossLinked.nodes.find((n: any) => n.id === link.target);
          if (a && b) {
            a.neighbors.push(b);
            b.neighbors.push(a);
            a.links.push(link);
            b.links.push(link);
          }
        });
        setData(crossLinked);
        setLoading(false);
      });
  }, []);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeClick = useCallback((node: any) => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach((neighbor: any) => highlightNodes.add(neighbor));
      node.links.forEach((link: any) => highlightLinks.add(link));
    }
    updateHighlight();
  }, [highlightNodes, highlightLinks]);

  const handleSearch = () => {
    if (!search) {
      highlightNodes.clear();
      highlightLinks.clear();
      updateHighlight();
      return;
    }
    const found = data.nodes.find((n: any) => n.name.toLowerCase().includes(search.toLowerCase()));
    if (found) {
      handleNodeClick(found);
      if (fgRef.current) {
        fgRef.current.centerAt(found.x, found.y, 1000);
        fgRef.current.zoom(4, 2000);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[500px] w-full bg-[#05101a] border border-slate-800 rounded-xl">
        <Loader2 className="h-8 w-8 text-rose-500 animate-spin" />
        <span className="ml-3 text-slate-400 font-mono">Constructing National Graph...</span>
      </div>
    );
  }

  const nodeColors: Record<string, string> = {
    citizen: '#10b981',
    business: '#3b82f6',
    bank: '#8b5cf6',
    government: '#f59e0b',
    regulator: '#f43f5e',
    institution: '#0ea5e9'
  };

  return (
    <div className="w-full h-[600px] bg-[#05101a] border border-slate-800 rounded-xl overflow-hidden relative">
      {/* HUD Overlay */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-4">
        {/* Legend */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur text-xs text-slate-300 shadow-xl space-y-2">
          <div className="font-bold text-white mb-2 tracking-widest uppercase text-[10px]">Graph Legend</div>
          {Object.entries(nodeColors).map(([role, color]) => (
            <div key={role} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="capitalize">{role}</span>
            </div>
          ))}
        </div>
        
        {/* Search & Trace */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur shadow-xl space-y-3 w-64">
          <div className="font-bold text-white tracking-widest uppercase text-[10px] flex items-center gap-2">
            <Crosshair className="h-3 w-3 text-rose-400" />
            Target Entity Trace
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="e.g. Shell Corp" 
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              className="w-full bg-[#020810] border border-slate-700 text-xs px-2 py-1.5 rounded focus:outline-none focus:border-rose-500 text-slate-200"
            />
            <button onClick={handleSearch} className="bg-rose-900/30 text-rose-400 p-1.5 rounded hover:bg-rose-900/50">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <ForceGraph2D
        ref={fgRef as any}
        graphData={data}
        nodeLabel="name"
        nodeColor={(node: any) => {
          if (highlightNodes.size === 0) return nodeColors[node.group] || '#94a3b8';
          return highlightNodes.has(node) ? nodeColors[node.group] : '#1e293b';
        }}
        nodeVal={(node: any) => node.val || 1}
        linkColor={(link: any) => {
          if (highlightLinks.size === 0) return link.risk > 50 ? '#ef4444' : 'rgba(148, 163, 184, 0.15)';
          return highlightLinks.has(link) ? (link.risk > 50 ? '#ef4444' : '#38bdf8') : 'rgba(30, 41, 59, 0.1)';
        }}
        linkWidth={(link: any) => {
          if (highlightLinks.size === 0) return link.risk > 50 ? 2 : 1;
          return highlightLinks.has(link) ? 3 : 0.5;
        }}
        linkDirectionalParticles={(link: any) => (highlightLinks.has(link) || highlightLinks.size === 0) ? 2 : 0}
        linkDirectionalParticleWidth={1.5}
        d3VelocityDecay={0.3}
        backgroundColor="#05101a"
        onNodeClick={handleNodeClick}
        onBackgroundClick={() => handleNodeClick(null)}
      />
    </div>
  );
}
