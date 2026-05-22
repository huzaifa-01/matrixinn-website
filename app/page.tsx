import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    title: "Browser Extensions",
    desc: "Custom Chrome & Firefox extensions that add powerful capabilities to any website — privacy tools, productivity boosters, automation, and more.",
    href: "/services/browser-extensions",
    color: "text-blue-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Web Development",
    desc: "Modern, fast, and responsive websites and web applications. From landing pages to full-stack platforms — built to scale.",
    href: "/services/web-development",
    color: "text-green-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile apps for Android & iOS. Clean UX, solid performance, built with React Native or Flutter.",
    href: "/services/mobile-apps",
    color: "text-purple-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Software / SaaS",
    desc: "Custom desktop applications and cloud-based SaaS products. End-to-end development from architecture to deployment.",
    href: "/services/software-saas",
    color: "text-orange-500",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "2", label: "Chrome Extensions" },
  { number: "3+", label: "Years Experience" },
];

const products = [
  {
    name: "MatrixInn PiP",
    tagline: "One-click Picture-in-Picture for any video",
    desc: "Hover over any video on any website and hit one button to pop it into a floating player. Supports Netflix, Disney+, YouTube, and more.",
    features: ["Works on all websites", "Netflix & Disney+ support", "Auto-PiP on tab switch", "Alt+P keyboard shortcut"],
    storeUrl: "https://chrome.google.com/webstore",
    iconColor: "text-brand",
    border: "border-brand/20",
    bg: "bg-blue-50",
  },
  {
    name: "MatrixInn Privacy for WhatsApp",
    tagline: "Privacy mode for WhatsApp Web",
    desc: "Blur messages, contact names, media, and profile pictures with one toggle. Hover to reveal. Auto-blur when mouse leaves.",
    features: ["Blur messages & chat list", "Blur media & avatars", "Hover to reveal", "Auto-blur on leave"],
    storeUrl: "https://chrome.google.com/webstore",
    iconColor: "text-green-600",
    border: "border-green-200",
    bg: "bg-green-50",
  },
];

const whyUs = [
  { icon: "⚡", title: "Fast Delivery", desc: "Most projects go from brief to working product in days, not months." },
  { icon: "🔒", title: "Quality Code", desc: "TypeScript-first, tested, and built to last. Clean architecture that scales." },
  { icon: "🎯", title: "Focused Expertise", desc: "Deep specialization in extensions, web, mobile, and SaaS — not generalist guesswork." },
  { icon: "🤝", title: "Ongoing Support", desc: "We don't disappear after launch. Maintenance, updates, and new features — long-term partnership." },
];

const testimonials = [
  {
    quote: "MatrixInn built our Chrome extension in record time. The code quality was excellent and the team was responsive throughout.",
    name: "Ahmed K.",
    role: "Founder, SaaS Startup",
  },
  {
    quote: "Professional, fast, and they understood exactly what we needed. Our web app is running flawlessly in production.",
    name: "Sarah M.",
    role: "Product Manager",
  },
  {
    quote: "The Privacy extension saved us from so many awkward moments in the office. Simple and works perfectly.",
    name: "Omar R.",
    role: "Operations Lead",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 text-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Custom Software by MatrixInn Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            We Build Software{" "}
            <span className="text-brand">That Works</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Browser extensions, web apps, mobile apps, and SaaS products — crafted with precision and shipped fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#services"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/products"
              className="border border-dark-border hover:border-slate-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold">{s.number}</div>
              <div className="text-blue-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What We Build</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Four focused services, all delivered with the same standard of quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border border-slate-200 rounded-2xl p-6 hover:border-brand hover:shadow-lg transition-all"
              >
                <div className={`mb-4 ${s.color}`}>{s.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-brand text-sm font-medium flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Chrome Extensions</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Published products you can install right now — free from the Chrome Web Store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.name} className={`border ${p.border} ${p.bg} rounded-2xl p-8`}>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className={`${p.iconColor} font-medium text-sm mb-3`}>{p.tagline}</p>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Add to Chrome
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="text-brand font-semibold hover:underline">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why MatrixInn Solutions?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center p-6">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Something?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us your idea. We&apos;ll turn it into a product that works.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
