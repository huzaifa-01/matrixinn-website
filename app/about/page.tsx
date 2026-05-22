import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — MatrixInn Solutions",
  description: "Learn about MatrixInn Solutions — who we are, what we do, and why we build software.",
};

const values = [
  {
    icon: "🎯",
    title: "Precision",
    desc: "We build exactly what's needed — no bloat, no guesswork. Every feature has a reason.",
  },
  {
    icon: "⚡",
    title: "Speed",
    desc: "Ideas become working products fast. We move quickly without sacrificing quality.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "Open source where possible. Honest communication. No surprises.",
  },
  {
    icon: "🌐",
    title: "Impact",
    desc: "We build tools that genuinely improve how people work and browse the web.",
  },
];

const tech = [
  "TypeScript", "React", "Next.js", "React Native", "Flutter",
  "Node.js", "Chrome MV3", "Tailwind CSS", "Vite", "PostgreSQL",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About MatrixInn Solutions</h1>
          <p className="text-slate-400 text-lg">
            A software company that builds things that work.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              MatrixInn Solutions is a software development company focused on building practical, high-quality digital
              products. We specialize in browser extensions, web applications, mobile apps, and SaaS products.
            </p>
            <p>
              We started by building Chrome extensions — small tools that solve real problems for real users. Our first
              published extensions, <strong>MatrixInn PiP</strong> and <strong>MatrixInn Privacy for WhatsApp</strong>,
              are already helping users on the Chrome Web Store.
            </p>
            <p>
              From there, we expanded into full-stack web and mobile development. Every project we take on gets the same
              level of care: clean code, thoughtful architecture, and products that actually deliver value.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Tech Stack</h2>
          <p className="text-slate-500 mb-10">We use modern, battle-tested tools to build reliable products.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-slate-100 text-slate-700 font-medium text-sm px-4 py-2 rounded-full border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-6">Have an idea? We&apos;d love to hear it.</p>
          <Link
            href="/contact"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
