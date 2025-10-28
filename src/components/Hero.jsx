import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 lg:pt-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-sm text-indigo-700 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Introducing TrackSense.ai</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
              What if one AI agent could elevate your entire business?
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Meet TrackSense.ai — your conversational intelligence platform delivering instant answers from every corner of your enterprise. No switching tabs. No dashboards. No multiple logins. Just instant business insights — through chat.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-700 transition"
              >
                Start free trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50 transition"
              >
                <Mic className="h-4 w-4" /> Try voice demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-slate-500">
              <MessageSquare className="h-4 w-4" />
              <span>Ask in natural language. Get trusted, real-time answers.</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-400/20 to-amber-300/20 blur-3xl pointer-events-none" />
            <div className="relative w-full h-full rounded-2xl border border-slate-200/60 bg-white/60 shadow-xl backdrop-blur">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
