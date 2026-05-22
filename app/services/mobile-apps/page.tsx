import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development — MatrixInn Solutions",
  description: "Android and iOS mobile app development using React Native and Flutter. Cross-platform apps with native performance.",
};

const offerings = [
  "Android & iOS apps from a single codebase",
  "React Native & Flutter development",
  "UI/UX design and prototyping",
  "App Store & Google Play submission",
  "Push notifications & offline support",
  "Backend APIs and cloud integration",
];

const features = [
  { icon: "📱", title: "Cross-Platform", desc: "One codebase, two platforms. Android and iOS from a single React Native or Flutter project." },
  { icon: "🏎️", title: "Native Performance", desc: "Smooth 60fps animations and near-native speed — users won't know the difference." },
  { icon: "🔔", title: "Push Notifications", desc: "Keep users engaged with targeted push notifications via Firebase or APNs." },
  { icon: "🔒", title: "Secure by Default", desc: "Encrypted storage, secure auth flows, and privacy-first architecture." },
];

const tech = ["React Native", "Flutter", "TypeScript", "Expo", "Firebase", "Redux", "React Navigation", "Android Studio", "Xcode"];

export default function MobileAppsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">← Back to Home</Link>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Mobile Apps
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Mobile App Development
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Android and iOS apps that users love. Built cross-platform with React Native or Flutter — fast to ship,
            easy to maintain, and ready for the app stores.
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
              From consumer apps to enterprise tools — we design and build mobile apps that are intuitive, fast,
              and ready for production. We handle the full journey: design, development, testing, and submission
              to the App Store and Google Play.
            </p>
            <ul className="space-y-3">
              {offerings.map((o) => (
                <li key={o} className="flex items-center gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="w-32 h-56 bg-slate-900 rounded-3xl border-4 border-slate-700 flex flex-col items-center justify-center shadow-2xl">
              <div className="w-1 h-1 bg-slate-600 rounded-full mb-4" />
              <div className="w-16 h-24 bg-slate-800 rounded-xl" />
              <div className="w-8 h-1 bg-slate-600 rounded-full mt-4" />
            </div>
            <div className="w-32 h-56 bg-slate-900 rounded-3xl border-4 border-slate-700 flex flex-col items-center justify-center shadow-2xl mt-6">
              <div className="w-1 h-1 bg-slate-600 rounded-full mb-4" />
              <div className="w-16 h-24 bg-brand/20 rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-brand/40 rounded-lg" />
              </div>
              <div className="w-8 h-1 bg-slate-600 rounded-full mt-4" />
            </div>
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
          <p className="text-slate-500 mb-8">Cross-platform tools with native capabilities.</p>
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
          <h2 className="text-2xl font-bold mb-3">Ready to Build Your App?</h2>
          <p className="text-slate-400 mb-6">Tell us about your idea. We&apos;ll help you ship it.</p>
          <Link href="/contact" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
