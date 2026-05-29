"use client";

import { useState } from "react";
import { Bot, Send, Sparkles, Loader2, User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Message {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const PRESET_PROMPTS = [
  "Explain FY 2026-27 tax regime benefits",
  "How can I improve my credit score?",
  "Recommend high-yield e-Rupee savings tips"
];

const MOCK_ANSWERS: Record<string, string> = {
  "Explain FY 2026-27 tax regime benefits": "Under the FY 2026-27 New Tax Regime, the standard deduction is increased to ₹75,000. Slabs have been rationalized: up to ₹4 Lakhs is nil tax, and corporate surcharges have been capped. Using the auto-tax ledger, your savings are projected to be ₹18,450 this fiscal year.",
  "How can I improve my credit score?": "Based on your transaction flow, you have a solid credit utilization of 12%. To bump your score past 800, we recommend: 1) request a credit limit expansion on your HDFC card to reduce utilization to ~8%, and 2) link your recurring energy payments to the FTID smart ledger for verified utility history.",
  "Recommend high-yield e-Rupee savings tips": "We detected ₹15,000 idle cash in your general CBDC wallet. We recommend allocating ₹10,000 to the central bank's high-liquidity Sovereign Gold Bonds (SGB) smart contract. This yields 2.5% semi-annual interest, fully exempt from Capital Gains tax under recent rules."
};

export function AiAdvisorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Namaste! I am your FTID Sovereign Advisor. I have analyzed your transaction history and connected banking nodes. What financial intelligence do you require today?",
      timestamp: "12:00 PM"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = {
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1200));

    let reply = "I've logged this query. Using sovereign flow indicators, I recommend checking your linked bank nodes and ensuring standard deductions are filed in the tax center.";
    if (MOCK_ANSWERS[text]) {
      reply = MOCK_ANSWERS[text];
    } else {
      // General response matching keywords
      const lower = text.toLowerCase();
      if (lower.includes("tax") || lower.includes("itr")) {
        reply = "Under the current tax laws, linking your PAN ensures GSTR and Form 26AS are auto-reconciled. You can view your tax planner in the Tax & Compliance portal.";
      } else if (lower.includes("wallet") || lower.includes("rupee") || lower.includes("cbdc")) {
        reply = "Your CBDC wallet balance is healthy. You can configure automated rules for e-RUPI vouchers or set up offline transaction provisioning.";
      } else if (lower.includes("invest") || lower.includes("portfolio") || lower.includes("worth")) {
        reply = "Your portfolio allocation is concentrated in mutual funds. To hedge against market risks, we suggest checking the Sovereign Gold Bond rates or activating recurring investment automation.";
      }
    }

    const aiMsg: Message = {
      sender: "ai",
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <Card className="bg-[#0a1520] border-cyan-900/30 flex flex-col h-[400px]">
      <CardHeader className="pb-3 border-b border-cyan-900/20">
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
          <Bot className="h-4 w-4 text-cyan-400" />
          FTID Sovereign Financial Chatbot
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar mb-4 text-xs">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "ai" && (
                <div className="p-1.5 bg-cyan-900/20 rounded border border-cyan-900/50 h-fit">
                  <Bot className="h-3 w-3 text-cyan-400" />
                </div>
              )}
              <div className={`p-3 rounded-xl max-w-[85%] ${
                msg.sender === "user" 
                  ? "bg-cyan-600 text-white rounded-br-none" 
                  : "bg-[#020810] border border-cyan-900/30 text-cyan-100/90 rounded-bl-none"
              }`}>
                <p className="leading-relaxed">{msg.text}</p>
                <span className="block text-[8px] text-cyan-500/50 mt-1.5 text-right font-mono">{msg.timestamp}</span>
              </div>
              {msg.sender === "user" && (
                <div className="p-1.5 bg-cyan-900/20 rounded border border-cyan-900/50 h-fit">
                  <User className="h-3 w-3 text-cyan-400" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="p-1.5 bg-cyan-900/20 rounded border border-cyan-900/50 h-fit">
                <Bot className="h-3 w-3 text-cyan-400" />
              </div>
              <div className="bg-[#020810] border border-cyan-900/30 text-cyan-500/60 p-3 rounded-xl rounded-bl-none flex items-center gap-1.5">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Formulating reply...</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Panel */}
        <div className="space-y-3 border-t border-cyan-900/20 pt-3">
          {/* Presets */}
          <div className="flex flex-wrap gap-1.5">
            {PRESET_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                disabled={isTyping}
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-cyan-900/10 hover:bg-cyan-900/30 border border-cyan-900/50 rounded-md text-cyan-400 transition-colors text-left"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about your ledger..."
              className="flex-1 bg-[#020810] border border-cyan-900/50 rounded-lg px-3 py-2 text-xs text-white placeholder-cyan-500/30 focus:outline-none focus:border-cyan-400"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-900/50 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              <Send className="h-3 w-3" />
            </button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
