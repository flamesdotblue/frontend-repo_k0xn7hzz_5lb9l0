import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-tr from-indigo-600 to-fuchsia-600">
          <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.25),transparent)] pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 lg:p-14">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">Bring instant answers to every team</h3>
              <p className="mt-3 text-indigo-100 text-lg">Connect your tools, chat with your data, and automate what used to take hours. Get started in minutes — no complex setup.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 hover:bg-indigo-50 transition">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20 transition">
                  Book a demo
                </a>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-300" /> SSO-ready and SOC2-minded</li>
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-amber-300" /> Works with your existing tools</li>
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-300" /> Deploy in cloud or VPC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
