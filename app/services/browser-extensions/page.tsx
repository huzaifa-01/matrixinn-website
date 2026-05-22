import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browser Extension Development — MatrixInn Solutions",
  description: "Custom Chrome and Firefox extension development. We build privacy tools, productivity extensions, automation, and more.",
};

const offerings = [
  "Chrome & Firefox Manifest V3 extensions",
  "Content scripts, background service workers, popups",
  "Custom UI built with React or vanilla JS",
  "Chrome Web Store submission & optimization",
  "Extension updates and long-term maintenance",
  "Cross-browser compatibility",
];

const features = [
  { icon: "🔒", title: "Privacy-Focused", desc: "We build extensions that respect user privacy — no unnecessary data collection." },
  { icon: "⚡", title: "Lightweight", desc: "Optimized for minimal impact on browser performance." },
  { icon: "🎨", title: "Custom UI", desc: "Polished popups and overlays that match your brand." },
  { icon: "🔧", title: "Full Stack", desc: "From content scripts to backend APIs — we handle it all." },
];

const tech = ["TypeScript", "React", "Chrome MV3", "Vite", "@crxjs/vite-plugin", "Web APIs", "chrome.storage", "chrome.scripting"];

export default function BrowserExtensionsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">← Back to Home</Link>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Browser Extensions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Custom Browser Extension Development
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            We build Chrome and Firefox extensions that add real capabilities to any website — privacy tools,
            productivity boosters, automation workflows, and more.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link href="/contact" className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Start a Project
            </Link>
            <Link href="/products" className="border border-dark-border hover:border-slate-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              See Our Extensions
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              From simple toolbar buttons to complex cross-platform extensions with backend integrations — we&apos;ve built
              and shipped real extensions on the Chrome Web Store. We know exactly how to navigate Manifest V3,
              content security policies, and Web Store review requirements.
            </p>
            <ul className="space-y-3">
              {offerings.map((o) => (
                <li key={o} className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="font-bold text-slate-900 mb-4">Published Extensions</h3>
            <div className="space-y-4">
              <div className="bg-white border border-brand/20 rounded-xl p-4">
                <div className="font-semibold text-slate-900 text-sm">MatrixInn PiP</div>
                <div className="text-slate-500 text-xs mt-0.5">One-click PiP for any video on any site</div>
              </div>
              <div className="bg-white border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-slate-900 text-sm">MatrixInn Privacy for WhatsApp</div>
                <div className="text-slate-500 text-xs mt-0.5">Privacy blur mode for WhatsApp Web</div>
              </div>
            </div>
            <Link href="/products" className="mt-4 inline-block text-brand text-sm font-medium hover:underline">
              View all products →
            </Link>
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
          <p className="text-slate-500 mb-8">Modern tooling for reliable, maintainable extensions.</p>
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
          <h2 className="text-2xl font-bold mb-3">Ready to Build Your Extension?</h2>
          <p className="text-slate-400 mb-6">Tell us what you need. We&apos;ll get it shipped.</p>
          <Link href="/contact" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
