"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

export function NetworkGraph({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.name || node.id;
    const fontSize = 12 / globalScale;
    ctx.font = `${fontSize}px Inter, sans-serif`;
    
    // Draw Node
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.val || 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = node.color || "#22d3ee";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.stroke();

    // Draw Label
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillText(label, node.x, node.y + (node.val || 5) + fontSize + 2);
  }, []);

  const paintLink = useCallback((link: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    
    // Animate or color links based on risk
    if (link.risk && link.risk > 80) {
      ctx.strokeStyle = "rgba(239, 68, 68, 0.6)"; // Red for high risk
      ctx.lineWidth = 2 / globalScale;
      ctx.setLineDash([5 / globalScale, 5 / globalScale]);
    } else {
      ctx.strokeStyle = "rgba(34, 211, 238, 0.2)"; // Default cyan
      ctx.lineWidth = 1 / globalScale;
      ctx.setLineDash([]);
    }
    
    ctx.stroke();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative group">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
       <div className="absolute inset-0 z-10">
         <ForceGraph2D
            width={dimensions.width}
            height={dimensions.height}
            graphData={data}
            nodeCanvasObject={paintNode}
            linkCanvasObjectMode={() => "replace"}
            linkCanvasObject={paintLink}
            backgroundColor="transparent"
            d3AlphaDecay={0.02}
            d3VelocityDecay={0.4}
            cooldownTicks={100}
         />
       </div>
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-[scan_3s_ease-in-out_infinite] group-hover:opacity-70 blur-[2px] z-20 pointer-events-none"></div>
    </div>
  );
}
