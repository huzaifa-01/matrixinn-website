"use client";

import { useEffect, useRef, useMemo, Fragment } from "react";
import { CountUpStat } from "@/components/CountUpStat";
import { MarkMonogramM } from "@/components/MarkMonogramM";

function openContact() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-contact"));
  }
}

// ── Hero dot-matrix M visual ──────────────────────────────────────────
function HeroVisual() {
  const GRID = 13;
  const cell = 28;
  const dotR = 2.6;
  const onR = 5;
  const total = GRID * cell;

  const { mCells, accentIndex } = useMemo(() => {
    const mCells = new Set<string>();
    const order: string[] = [];
    for (let r = 2; r <= 10; r++) { mCells.add(`2,${r}`); order.push(`2,${r}`); }
    [[3, 3], [4, 4], [5, 5], [6, 6]].forEach(([c, r]) => { mCells.add(`${c},${r}`); order.push(`${c},${r}`); });
    [[7, 5], [8, 4], [9, 3]].forEach(([c, r]) => { mCells.add(`${c},${r}`); order.push(`${c},${r}`); });
    for (let r = 2; r <= 10; r++) { mCells.add(`10,${r}`); order.push(`10,${r}`); }
    const accentIndex = new Map<string, number>();
    order.forEach((k, i) => accentIndex.set(k, i));
    return { mCells, accentIndex };
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox={`0 0 ${total} ${total}`} xmlns="http://www.w3.org/2000/svg">
        <g className="scan">
          <line x1="0" y1="0" x2={total} y2="0"
            stroke="var(--blue)" strokeWidth="2.4" strokeOpacity="0.45" />
          <line x1="0" y1="-6" x2={total} y2="-6"
            stroke="var(--blue)" strokeWidth="1" strokeOpacity="0.15" />
        </g>
        {Array.from({ length: GRID * GRID }).map((_, idx) => {
          const c = idx % GRID;
          const r = Math.floor(idx / GRID);
          const cx = c * cell + cell / 2;
          const cy = r * cell + cell / 2;
          const key = `${c},${r}`;
          if (mCells.has(key)) {
            const i = accentIndex.get(key)!;
            return (
              <circle
                key={key} cx={cx} cy={cy} r={onR}
                fill="var(--blue)"
                className="dot on"
                style={{
                  animationDelay: `${0.7 + i * 0.04}s`,
                  transformBox: "fill-box",
                  transformOrigin: "center",
                } as React.CSSProperties}
              />
            );
          }
          return <circle key={key} cx={cx} cy={cy} r={dotR} fill="var(--ink)" opacity="0.09" />;
        })}
      </svg>
      <div className="badge b1">
        <span className="tick">●</span>
        <span>extension v2.1 · shipped</span>
      </div>
      <div className="badge b2">
        <span className="tick">✓</span>
        <span>SaaS pipeline · 99.98% uptime</span>
      </div>
    </div>
  );
}

// ── Word-rise animated headline helper ───────────────────────────────
function WordRise({ children, delayBase = 0, className = "" }: {
  children: string;
  delayBase?: number;
  className?: string;
}) {
  const words = children.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            className={`word ${className}`}
            style={{ animationDelay: `${delayBase + i * 0.08}s` }}
          >
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}

// ── Service icons ─────────────────────────────────────────────────────
const ServiceIcons: Record<string, React.ReactNode> = {
  ext: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9 H21" />
      <circle cx="6" cy="7" r="0.6" fill="currentColor" />
      <circle cx="8.4" cy="7" r="0.6" fill="currentColor" />
      <rect x="14" y="11" width="5" height="4" rx="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9 H21" />
      <path d="M7 13 H13" />
      <path d="M7 16 H17" />
    </svg>
  ),
  mob: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M11 18.5 H13" />
      <path d="M9 5.5 H15" />
    </svg>
  ),
  saas: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="3.5" y="9" width="17" height="11" rx="2" />
      <rect x="5.5" y="6" width="13" height="11" rx="2" fill="var(--blue-soft)" />
      <rect x="7.5" y="3" width="9" height="11" rx="2" fill="white" />
    </svg>
  ),
};

const SERVICES = [
  { id: "ext", title: "Browser Extensions", blurb: "Manifest V3 native, lightning-fast, with permissions kept minimal. Chrome, Firefox, Edge, Safari.", tags: ["MV3", "Chrome", "Firefox", "Safari"] },
  { id: "web", title: "Web Applications", blurb: "Production-grade React and TypeScript on the front, sturdy APIs on the back. Edge-ready.", tags: ["React", "TypeScript", "Edge", "Postgres"] },
  { id: "mob", title: "Mobile Apps", blurb: "Cross-platform with React Native, or fully native when the device matters. Shipped to stores.", tags: ["React Native", "Swift", "Kotlin"] },
  { id: "saas", title: "SaaS Products", blurb: "Auth, billing, multi-tenancy, observability — the boring scaffolding that keeps customers happy.", tags: ["Stripe", "Auth", "Multi-tenant"] },
];

const STEPS = [
  { n: "01", t: "Discovery", b: "A two-week sprint to map constraints, customers, and the seams where things will actually break." },
  { n: "02", t: "Design", b: "Prototypes you can click. Edge cases written down. Decisions made on screen, not in slack." },
  { n: "03", t: "Build", b: "Tight loops with weekly demos. CI from day one. Zero-surprise releases — ever." },
  { n: "04", t: "Ship & support", b: "Launch playbooks, observability dashboards, and a steady cadence of iteration after the party ends." },
];

const CLIENTS = ["Northwind", "Helios", "Atlas Field", "Quartz Labs", "Borealis", "Pixelfound", "Linear Stack", "Tessera"];

// ── Case thumb components ─────────────────────────────────────────────
function CaseThumbBrowser() {
  return (
    <div className="case-thumb">
      <div className="browser-chrome">
        <span /><span /><span />
      </div>
      <div className="ph" style={{ top: 38 }}>BROWSER · EXTENSION SURFACE</div>
      <div className="ext-bar">⌘ K · TRIAGE</div>
    </div>
  );
}

function CaseThumbDash() {
  return (
    <div className="case-thumb">
      <div className="ph">DASHBOARD · SAAS</div>
      <div className="chart">
        {[0.4, 0.7, 0.5, 0.9, 0.6, 0.85, 0.55].map((_, i) => (
          <div className="bar" key={i} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    </div>
  );
}

function CaseThumbMobile() {
  return (
    <div className="case-thumb">
      <div className="ph">FIELD APP · iOS</div>
      <div className="phone-frame"><div className="scr">ATLAS</div></div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────
export default function Home() {
  const processLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = processLineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const marqueeList = [...CLIENTS, ...CLIENTS];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="wrap hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="pulse" />
              <span>Booking Q3 · 2 slots open</span>
            </div>
            <h1>
              <WordRise>Crafted with precision.</WordRise>
              <br />
              <WordRise delayBase={0.32} className="blue">Shipped fast.</WordRise>
            </h1>
            <p className="sub">
              MatrixInn is a small software studio building browser extensions, web
              apps, mobile apps, and SaaS products for teams who refuse to settle
              for &ldquo;good enough.&rdquo;
            </p>
            <div className="cta-row">
              <button className="btn primary btn-lg" onClick={openContact}>
                Start a project <span className="arrow">→</span>
              </button>
              <a href="#work" className="btn ghost btn-lg">See our work</a>
            </div>
            <div className="hero-meta">
              <span>EST. 2020</span>
              <span className="dot" />
              <span>REMOTE-FIRST · GLOBAL</span>
              <span className="dot" />
              <span>4-WEEK SPRINTS</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────── */}
      <section className="marquee">
        <div className="wrap">
          <div className="marquee-label">Crafted for · 2020 — 2026</div>
        </div>
        <div className="marquee-track">
          {marqueeList.map((c, i) => (
            <div className="marquee-item" key={i}>
              <span className="mglyph">
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="8" r="1.6" fill="currentColor" />
                </svg>
              </span>
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────── */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-eyebrow reveal">What we build</div>
              <h2 className="section-title reveal" data-delay="1">
                Four practices.<br />One studio.
              </h2>
            </div>
            <p className="section-sub reveal" data-delay="2">
              We&rsquo;re deliberately small &mdash; eight engineers, two designers,
              one PM &mdash; and deliberately senior. Every project is staffed end-to-end
              by the same team that scoped it.
            </p>
          </div>
          <div className="services">
            {SERVICES.map((s, i) => (
              <div className="service reveal" data-delay={i} key={s.id}>
                <div className="icon">{ServiceIcons[s.id]}</div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <div className="tags">
                  {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="section" id="process" style={{ background: "var(--bg-elev)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-eyebrow reveal">How we work</div>
              <h2 className="section-title reveal" data-delay="1">
                The process is the<br /><span style={{ color: "var(--blue)" }}>product</span>.
              </h2>
            </div>
            <p className="section-sub reveal" data-delay="2">
              Four phases, each with a clear deliverable. You see what we&rsquo;re
              doing every week, and you own the source from day one.
            </p>
          </div>
          <div className="process">
            <div className="process-line" ref={processLineRef}>
              <div className="fill" />
            </div>
            {STEPS.map((s, i) => (
              <div className="step reveal" data-delay={i} key={s.n}>
                <div className="num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ────────────────────────────────────────────────── */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-eyebrow reveal">Selected work</div>
              <h2 className="section-title reveal" data-delay="1">
                A few we&rsquo;re<br />proud to put names on.
              </h2>
            </div>
            <p className="section-sub reveal" data-delay="2">
              Most of what we build sits behind NDAs. Here&rsquo;s a slice of the
              public work &mdash; ask us for the rest under one.
            </p>
          </div>
          <div className="work">
            <div className="case big reveal">
              <CaseThumbBrowser />
              <div className="case-body">
                <div className="meta">
                  <span>EXTENSION</span><span className="dot" /><span>2025</span>
                  <span className="dot" /><span>NORTHWIND</span>
                </div>
                <h3>Inbox triage at 10k emails/day</h3>
                <p>
                  A Chrome &amp; Edge extension that classifies, snoozes, and
                  auto-replies across a 40-person sales org. Cold-start under 80ms,
                  zero broad-host permissions.
                </p>
              </div>
            </div>
            <div className="case small reveal" data-delay="1">
              <CaseThumbDash />
              <div className="case-body">
                <div className="meta">
                  <span>SAAS</span><span className="dot" /><span>HELIOS</span>
                </div>
                <h3>Green-energy analytics</h3>
                <p>Multi-tenant dashboard for solar &amp; wind operators.</p>
              </div>
            </div>
            <div className="case small reveal" data-delay="2">
              <CaseThumbMobile />
              <div className="case-body">
                <div className="meta">
                  <span>MOBILE</span><span className="dot" /><span>ATLAS</span>
                </div>
                <h3>Field engineer companion</h3>
                <p>Offline-first iOS app for survey crews in low-signal terrain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <section className="section" id="about" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stats reveal">
            <CountUpStat value={47} label="Products shipped to date" />
            <CountUpStat value={12} label="Industries served" />
            <CountUpStat value={8} suffix="yrs" label="Crafting since 2020" />
            <CountUpStat value={99} suffix="%" label="Client retention rate" />
          </div>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="quote-wrap">
            <div className="reveal">
              <div className="quote">
                &ldquo;MatrixInn didn&rsquo;t just build our extension &mdash;
                <span className="blue"> they shaped how our team thinks about
                  shipping</span>. Our first release felt like our tenth.&rdquo;
              </div>
              <div className="quote-attr">
                <div className="av" />
                <span>JK · VP ENGINEERING · NORTHWIND</span>
              </div>
            </div>
            <div className="quote-side reveal" data-delay="1">
              <div className="grid" />
              <div style={{ position: "relative" }}>
                <MarkMonogramM size={88} color="var(--ink)" accent="var(--blue)" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em" }}>
                  ENGAGEMENT · 14 WEEKS
                </div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700, letterSpacing: "-0.015em" }}>
                  From kickoff to Chrome Web Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-banner reveal">
            <h2>
              Have a project<br />in mind?
              <br /><span className="blue">Let&rsquo;s talk.</span>
            </h2>
            <div className="cta-right">
              <p>
                Tell us about the work. We respond within one business day with
                next steps, a rough sprint plan, and a fixed-bid range.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn primary btn-lg" onClick={openContact}>
                  Start a project <span className="arrow">→</span>
                </button>
                <a className="btn ghost btn-lg" href="mailto:contact@matrixinnsolutions.com">
                  contact@matrixinnsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
