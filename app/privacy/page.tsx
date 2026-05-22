import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MatrixInn Solutions",
  description: "Privacy Policy for MatrixInn Solutions products including MatrixInn PiP and MatrixInn Privacy for WhatsApp.",
};

export default function PrivacyPage() {
  const lastUpdated = "May 22, 2026";

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-brand text-sm hover:underline">← Back to Home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Overview</h2>
            <p className="leading-relaxed">
              MatrixInn Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) builds browser extensions and software products.
              This Privacy Policy applies to all our products, including <strong>MatrixInn PiP</strong> and{" "}
              <strong>MatrixInn Privacy for WhatsApp</strong>.
            </p>
            <p className="leading-relaxed mt-3">
              We are committed to protecting your privacy. Our extensions are designed to work locally in your browser
              without collecting, transmitting, or storing any personal data on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data We Do NOT Collect</h2>
            <p className="leading-relaxed">Our extensions do <strong>not</strong> collect, store, or transmit:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Browsing history or activity logs</li>
              <li>Content of messages, chats, or media viewed</li>
              <li>Passwords or authentication credentials</li>
              <li>Financial or payment information</li>
              <li>Location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Local Storage Only</h2>
            <p className="leading-relaxed">
              Our extensions use <code className="bg-slate-100 px-1 rounded text-sm">chrome.storage.sync</code> to save
              your preferences (such as which blur options are enabled, or whether auto-PiP is on). This data is:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Stored locally in your browser via Chrome&apos;s built-in storage API</li>
              <li>Synced across your own devices if you are signed in to Chrome (by Google — not us)</li>
              <li>Never sent to MatrixInn Solutions servers</li>
              <li>Only contains your toggle preferences — no personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Permissions Explained</h2>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">MatrixInn PiP</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>activeTab</strong> — Needed to interact with videos on the current tab</li>
              <li><strong>scripting</strong> — Needed to inject the hover button into pages</li>
              <li><strong>storage</strong> — Needed to save your PiP preferences</li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">MatrixInn Privacy for WhatsApp</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>activeTab</strong> — Needed to apply blur styles to WhatsApp Web</li>
              <li><strong>scripting</strong> — Needed to inject privacy CSS into the page</li>
              <li><strong>storage</strong> — Needed to save your privacy toggle preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our extensions do not integrate with or send data to any third-party analytics, advertising, or tracking
              services. We do not use Google Analytics, Firebase, or any remote data collection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Open Source</h2>
            <p className="leading-relaxed">
              Our extension source code is publicly available on GitHub. You are welcome to review the code to verify
              our privacy claims:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>
                <a href="https://github.com/huzaifa-01/matrixinn-pip" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  MatrixInn PiP — github.com/huzaifa-01/matrixinn-pip
                </a>
              </li>
              <li>
                <a href="https://github.com/huzaifa-01/matrixinn-privacy-whatsapp" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  MatrixInn Privacy for WhatsApp — github.com/huzaifa-01/matrixinn-privacy-whatsapp
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our extensions are not directed at children under the age of 13. We do not knowingly collect any
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated &ldquo;Last updated&rdquo; date. Continued use of our extensions after any changes constitutes acceptance
              of the new policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-800">MatrixInn Solutions</p>
              <p className="text-slate-600 mt-1">
                Email:{" "}
                <a href="mailto:contact@matrixinnsolutions.com" className="text-brand hover:underline">
                  contact@matrixinnsolutions.com
                </a>
              </p>
              <p className="text-slate-600">Website: matrixinnsolutions.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
