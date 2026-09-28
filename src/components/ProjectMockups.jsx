import React from 'react';
import { CheckCircle2, Clock, ShoppingCart, CloudSun, Layout, Star, ArrowUpRight } from 'lucide-react';

export const ProjectMockup = ({ type }) => {
  switch (type) {
    case 'kanban':
      return (
        <div className="w-full h-full bg-slate-900/95 text-white p-3 text-xs font-sans select-none flex flex-col justify-between overflow-hidden">
          {/* Mock Browser bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-slate-400 ml-2 font-mono">TaskFlow Pro</span>
            </div>
            <span className="text-[9px] bg-brand-500/30 text-brand-300 px-2 py-0.5 rounded font-mono">v2.4 Active</span>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-3 gap-2 my-2">
            {/* Column 1 */}
            <div className="bg-slate-800/80 rounded-lg p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300">
                <span>To Do</span>
                <span className="bg-slate-700 px-1.5 rounded text-[9px]">3</span>
              </div>
              <div className="bg-slate-700/60 p-1.5 rounded text-[9px] border-l-2 border-amber-400">
                <p className="font-medium text-slate-200">OAuth 2.0 Auth</p>
                <div className="flex items-center justify-between text-slate-400 mt-1">
                  <span>High</span>
                  <span>⚡ 2d</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-800/80 rounded-lg p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-semibold text-blue-300">
                <span>In Progress</span>
                <span className="bg-blue-900/50 text-blue-300 px-1.5 rounded text-[9px]">2</span>
              </div>
              <div className="bg-slate-700/60 p-1.5 rounded text-[9px] border-l-2 border-blue-400">
                <p className="font-medium text-slate-200">REST API CRUD</p>
                <div className="w-full bg-slate-600 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-blue-400 w-3/4 h-full" />
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-800/80 rounded-lg p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-300">
                <span>Done</span>
                <span className="bg-emerald-900/50 text-emerald-300 px-1.5 rounded text-[9px]">8</span>
              </div>
              <div className="bg-slate-700/60 p-1.5 rounded text-[9px] border-l-2 border-emerald-400">
                <p className="font-medium text-slate-200">Database Schema</p>
                <p className="text-[8px] text-emerald-400 mt-1">✓ Verified</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
            <span>🟢 Realtime Sync: Connected</span>
            <span>MongoDB Atlas</span>
          </div>
        </div>
      );

    case 'shop':
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-3 text-xs font-sans select-none flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-indigo-900/50">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-[9px]">
                N
              </div>
              <span className="text-[10px] font-bold text-slate-200">Nova Luxe Store</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Stripe Live</span>
              <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>

          {/* Product Grid Mock */}
          <div className="grid grid-cols-2 gap-2 my-1">
            <div className="bg-white/5 rounded-lg p-2 border border-white/10 flex flex-col justify-between">
              <div className="w-full h-10 bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 rounded flex items-center justify-center text-[10px] text-amber-300 font-mono">
                🎧 Audio X1
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[9px] font-bold">$249.00</span>
                <span className="text-[8px] text-amber-400 font-semibold">★ 4.9</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-2 border border-white/10 flex flex-col justify-between">
              <div className="w-full h-10 bg-gradient-to-tr from-purple-500/20 to-sky-500/20 rounded flex items-center justify-center text-[10px] text-sky-300 font-mono">
                ⌚ Smart Watch
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[9px] font-bold">$329.00</span>
                <span className="text-[8px] text-sky-400 font-semibold">★ 4.8</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-indigo-200/80 bg-white/5 px-2 py-1 rounded">
            <span>💳 Instant 1-Click Checkout</span>
            <span className="text-amber-300 font-mono">Next.js 14 SSR</span>
          </div>
        </div>
      );

    case 'weather':
      return (
        <div className="w-full h-full bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 text-white p-3 text-xs font-sans select-none flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <CloudSun className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-[10px] font-bold">Atmosphere Live</span>
            </div>
            <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full">New Delhi, IN</span>
          </div>

          <div className="flex items-center justify-between my-1 px-2">
            <div>
              <p className="text-2xl font-extrabold tracking-tighter">28°C</p>
              <p className="text-[9px] text-sky-200">Partly Cloudy · High 31°</p>
            </div>
            <div className="text-right text-[9px] space-y-0.5 text-sky-100">
              <p>Humidity: 58%</p>
              <p>Wind: 14 km/h</p>
              <p>Air Quality: Good</p>
            </div>
          </div>

          {/* 4 day mini forecast */}
          <div className="grid grid-cols-4 gap-1 bg-black/20 p-1.5 rounded-lg text-center text-[8px]">
            <div><p className="text-sky-200">Mon</p><p className="font-bold">29°</p></div>
            <div><p className="text-sky-200">Tue</p><p className="font-bold">31°</p></div>
            <div><p className="text-sky-200">Wed</p><p className="font-bold">27°</p></div>
            <div><p className="text-sky-200">Thu</p><p className="font-bold">28°</p></div>
          </div>
        </div>
      );

    case 'portfolio':
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white p-3 text-xs font-sans select-none flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-1.5 border-b border-purple-900/50">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-[9px] font-bold">SA</div>
              <span className="text-[10px] font-semibold text-slate-200">Safwaan Portfolio</span>
            </div>
            <span className="text-[9px] bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded">Framer Motion</span>
          </div>

          <div className="my-2 bg-white/5 rounded-lg p-2 border border-white/10 text-center">
            <p className="text-[10px] text-purple-300 font-mono">Bento Grid UI Architecture</p>
            <p className="text-[8px] text-slate-400 mt-0.5">Ultra-fast 100/100 Lighthouse score</p>
          </div>

          <div className="flex items-center justify-between text-[9px] text-purple-200 bg-white/5 px-2 py-1 rounded">
            <span>✨ 60 FPS Micro-interactions</span>
            <span>Vercel Edge</span>
          </div>
        </div>
      );
  }
};
