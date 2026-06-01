import { Network } from "lucide-react";

export function EntityRelationshipGraph({ nodes, purpose }: { nodes: string[], purpose: string }) {
  return (
    <div className="w-full h-full bg-[#05101a] relative flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="z-10 text-center space-y-4">
        <Network className="h-16 w-16 text-cyan-500 mx-auto opacity-50 animate-pulse" />
        <h3 className="text-xl font-bold text-cyan-400 tracking-widest uppercase">Entity Relationship Engine</h3>
        <p className="text-sm text-cyan-100/50 max-w-md mx-auto">{purpose}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {nodes.map((node, i) => (
            <span key={i} className="px-3 py-1 bg-cyan-900/20 border border-cyan-900/50 rounded-full text-xs text-cyan-300">
              {node}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
