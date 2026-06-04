"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DemoGuideProps {
  nextStopUrl: string;
  label: string;
}

export function DemoGuide({ nextStopUrl, label }: DemoGuideProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href={nextStopUrl}>
        <div className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/30 border border-blue-400/50 transition-all hover:scale-105 group">
          <span className="text-sm font-semibold tracking-wide">Next Recommended Stop: {label}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
