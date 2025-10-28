import React from 'react';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Capabilities from './components/Capabilities';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold text-slate-900">TrackSense.ai</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} TrackSense.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-400" />
            <span className="font-semibold">TrackSense.ai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#integrations" className="hover:text-slate-900">Integrations</a>
            <a href="#get-started" className="hover:text-slate-900">Get started</a>
          </nav>
          <a href="#get-started" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-700">Try free</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Capabilities /></div>
        <div id="integrations"><Integrations /></div>
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
