import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development — MatrixInn Solutions",
  description: "Custom web development services — websites, web apps, landing pages, and full-stack platforms built with Next.js, React, and modern tooling.",
};

const offerings = [
  "Landing pages & marketing websites",
  "Full-stack web applications",
  "E-commerce stores & product pages",
  "Admin dashboards & internal tools",
  "API development & integrations",
  "Performance optimization & SEO",
];

const features = [
  { icon: "🚀", title: "Fast & SEO-Ready", desc: "Next.js and server-side rendering for maximum speed and discoverability." },
  { icon: "📱", title: "Mobile Responsive", desc: "Every site looks great on every screen size — phones, tablets, desktops." },
  { icon: "🔗", title: "API Integrations", desc: "Connect with any third-party service — payments, CRM, analytics, and more." },
  { icon: "☁️", title: "Cloud Deployed", desc: "Deployed to Vercel, AWS, or your hosting of choice — reliable and scalable." },
];

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "REST APIs", "Stripe"];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">← Back to Home</Link>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Web Development
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Modern Web Development
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Fast, responsive, and built to scale. From simple landing pages to full-stack web platforms — we
            deliver clean code and polished UI that makes an impression.
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We build websites and web applications that are fast, accessible, and easy to maintain. Whether you need
              a stunning marketing site or a complex application with user auth, dashboards, and real-time data —
              we handle the full stack.
            </p>
            <ul className="space-y-3">
              {offerings.map((o) => (
                <li key={o} className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 text-sm font-mono text-green-400 leading-relaxed">
            <div className="text-slate-500 mb-2">{"// matrixinn-website"}</div>
            <div><span className="text-blue-400">const</span> stack = &#123;</div>
            <div className="ml-4"><span className="text-yellow-300">framework</span>: <span className="text-green-300">&apos;Next.js 14&apos;</span>,</div>
            <div className="ml-4"><span className="text-yellow-300">language</span>: <span className="text-green-300">&apos;TypeScript&apos;</span>,</div>
            <div className="ml-4"><span className="text-yellow-300">styling</span>: <span className="text-green-300">&apos;Tailwind CSS&apos;</span>,</div>
            <div className="ml-4"><span className="text-yellow-300">deploy</span>: <span className="text-green-300">&apos;Vercel&apos;</span>,</div>
            <div>&#125;;</div>
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
          <p className="text-slate-500 mb-8">Battle-tested tools for production-ready applications.</p>
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
          <h2 className="text-2xl font-bold mb-3">Ready to Build Your Website?</h2>
          <p className="text-slate-400 mb-6">Share your idea and we&apos;ll make it real.</p>
          <Link href="/contact" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
