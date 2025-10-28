import React from 'react';
import { Mic, Link as LinkIcon, BarChart3, Zap, Shield, Bot } from 'lucide-react';

const FEATURES = [
  {
    title: 'Voice Command Integration',
    description:
      'Speak to your systems. Capture intent hands-free and trigger actions across apps with enterprise-grade accuracy.',
    icon: Mic,
  },
  {
    title: 'App & Service Integrations',
    description:
      'Connect your CRM, chat, files, and data warehouses. TrackSense.ai unifies your stack for frictionless insights.',
    icon: LinkIcon,
  },
  {
    title: 'Workflow Automation & Data Sync',
    description:
      'Automate updates, sync records, and schedule reports. Keep teams aligned without switching tabs.',
    icon: Zap,
  },
  {
    title: 'AI-Powered Insights & Tracking',
    description:
      'Ask in natural language to get trusted analytics, trends, and recommendations drawn from your connected systems.',
    icon: BarChart3,
  },
  {
    title: 'Enterprise-grade Security',
    description:
      'Granular permissions, audit trails, and zero-trust principles keep your data protected.',
    icon: Shield,
  },
  {
    title: 'Conversational Agent',
    description:
      'A smart assistant that understands context, follows up, and learns from your workflows.',
    icon: Bot,
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">What TrackSense.ai can do</h2>
          <p className="mt-3 text-slate-600">A single conversational interface that connects, automates, and explains your entire business.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
