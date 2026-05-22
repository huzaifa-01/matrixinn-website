import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — MatrixInn Solutions",
  description: "Chrome extensions built by MatrixInn Solutions — MatrixInn PiP and MatrixInn Privacy for WhatsApp.",
};

const products = [
  {
    name: "MatrixInn PiP",
    tagline: "One-click Picture-in-Picture for any video",
    desc: "Tired of losing your video when you switch tabs? MatrixInn PiP adds a floating button to every video on every website. One click pops it into a resizable Picture-in-Picture window so you can keep watching while you work.",
    features: [
      "Works on YouTube, Twitch, Netflix, Disney+, and any website with video",
      "Hover over a video to see the PiP button — no digging through menus",
      "Netflix & Disney+ support (removes the disablePictureInPicture restriction)",
      "Auto-PiP: video automatically enters PiP when you switch to another tab",
      "Alt+P keyboard shortcut for hands-free control",
      "Lightweight — runs only when needed, no background activity",
    ],
    github: "https://github.com/huzaifa-01/matrixinn-pip",
    storeUrl: "https://chrome.google.com/webstore",
    color: "border-brand/20 bg-blue-50",
    badgeColor: "bg-brand/10 text-brand",
    badge: "Video Tools",
  },
  {
    name: "MatrixInn Privacy for WhatsApp",
    tagline: "Privacy mode for WhatsApp Web",
    desc: "Working in a shared space or a coffee shop? MatrixInn Privacy for WhatsApp lets you blur your chats, contact names, media, and profile pictures with one toggle. Hover over any blurred element to reveal it instantly.",
    features: [
      "Blur chat messages in the active conversation",
      "Blur contact names and message previews in the chat list",
      "Blur images, videos, voice notes, and stickers",
      "Blur all profile pictures and avatars",
      "Hover any element to temporarily reveal it",
      "Auto-blur mode: re-apply blur when your mouse leaves the window",
      "Alt+Shift+X keyboard shortcut for instant toggle",
      "Per-feature toggles — control exactly what gets blurred",
    ],
    github: "https://github.com/huzaifa-01/matrixinn-privacy-whatsapp",
    storeUrl: "https://chrome.google.com/webstore",
    color: "border-green-200 bg-green-50",
    badgeColor: "bg-green-100 text-green-700",
    badge: "Privacy",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-slate-400 text-lg">
            Chrome extensions that solve real problems — free to install, no account required.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {products.map((p) => (
            <div key={p.name} className={`border rounded-3xl p-8 sm:p-10 ${p.color}`}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">{p.name}</h2>
              <p className="text-brand font-medium mb-4">{p.tagline}</p>
              <p className="text-slate-600 leading-relaxed mb-6">{p.desc}</p>

              <h3 className="font-semibold text-slate-800 mb-3">Features</h3>
              <ul className="space-y-2 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={p.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                  </svg>
                  Add to Chrome
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-brand text-slate-600 hover:text-brand text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 px-4 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Need a Custom Extension?</h2>
          <p className="text-slate-500 mb-6">
            We build Chrome and Firefox extensions for businesses and individuals. Tell us what you need.
          </p>
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
