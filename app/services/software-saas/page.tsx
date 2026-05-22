import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software & SaaS Development — MatrixInn Solutions",
  description: "Custom software, desktop applications, and SaaS product development. End-to-end from architecture to deployment.",
};

const offerings = [
  "SaaS product development from scratch",
  "Multi-tenant architecture & user management",
  "Subscription billing & payment integration",
  "Desktop apps (Windows, macOS, Linux)",
  "Custom internal tools & workflow automation",
  "Legacy system modernization",
];

const features = [
  { icon: "🏗️", title: "Scalable Architecture", desc: "Designed to grow — multi-tenant systems that handle users from 10 to 100,000." },
  { icon: "💳", title: "Billing & Subscriptions", desc: "Stripe integration, subscription tiers, usage-based billing, and invoicing." },
  { icon: "🖥️", title: "Desktop Apps", desc: "Native-feeling desktop applications using Electron or Tauri for Windows, Mac, and Linux." },
  { icon: "📊", title: "Analytics & Dashboards", desc: "Built-in analytics, usage tracking, and admin dashboards to understand your users." },
];

const tech = ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "Electron", "Tauri", "Docker", "AWS", "Vercel"];

export default function SoftwareSaaSPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">← Back to Home</Link>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Software / SaaS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Software & SaaS Development
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Custom software products built for real businesses. Whether it&apos;s a SaaS platform, a desktop app,
            or a complex internal tool — we design, build, and ship it.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              SaaS products are complex — user management, billing, permissions, dashboards, integrations. We&apos;ve
              been through it. We know what to build first, what to avoid, and how to ship an MVP that&apos;s worth
              launching. We also build desktop applications and custom internal tools that replace manual workflows.
            </p>
            <ul className="space-y-3">
              {offerings.map((o) => (
                <li key={o} className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 mb-4">Typical SaaS Stack</h3>
            {[
              { label: "Frontend", value: "Next.js + Tailwind" },
              { label: "Backend", value: "Node.js + PostgreSQL" },
              { label: "Auth", value: "NextAuth / Clerk" },
              { label: "Billing", value: "Stripe Subscriptions" },
              { label: "Deploy", value: "Vercel + Railway" },
              { label: "Analytics", value: "PostHog / Plausible" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                <span className="text-slate-500 text-sm">{row.label}</span>
                <span className="text-slate-800 text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tech Stack</h2>
          <p className="text-slate-500 mb-8">Production-proven infrastructure that scales with your business.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {tech.map((t) => (
              <span key={t} className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full border border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Have a Software Idea?</h2>
          <p className="text-slate-400 mb-6">Let&apos;s talk about how to turn it into a product people pay for.</p>
          <Link href="/contact" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
