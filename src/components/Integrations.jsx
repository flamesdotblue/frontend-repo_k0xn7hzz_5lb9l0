import React from 'react';
import { Slack, Microsoft, Mail, FileSpreadsheet, Database, Cloud, GitBranch, Link as LinkIcon } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'Slack', icon: Slack },
  { name: 'Microsoft Teams', icon: Microsoft },
  { name: 'Gmail', icon: Mail },
  { name: 'Google Drive', icon: Cloud },
  { name: 'Dropbox', icon: Cloud },
  { name: 'Salesforce', icon: Database },
  { name: 'SAP', icon: Database },
  { name: 'Jira', icon: GitBranch },
  { name: 'Odoo', icon: LinkIcon },
  { name: 'Dynamics 365', icon: Microsoft },
  { name: 'Mailchimp', icon: Mail },
  { name: 'HubSpot', icon: Database },
  { name: 'Zoho', icon: Database },
  { name: 'Excel', icon: FileSpreadsheet },
];

export default function Integrations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Plug into your entire stack</h2>
          <p className="mt-3 text-slate-600">Connect TrackSense.ai with your communication, CRM, files, and analytics tools to automate workflows and surface insights instantly.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INTEGRATIONS.map(({ name, icon: Icon }) => (
            <div key={name} className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
