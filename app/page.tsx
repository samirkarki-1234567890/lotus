"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Work", "Services", "About", "Contact"];

const SERVICES = [
  {
    icon: "◈",
    title: "Portrait Sessions",
    desc: "Intimate, editorial portraits that reveal character. Studio or location.",
  },
  {
    icon: "◉",
    title: "Wedding Coverage",
    desc: "Full-day documentary storytelling. Every gesture, unrepeatable.",
  },
  {
    icon: "⬡",
    title: "Commercial Work",
    desc: "Brand imagery, product photography, and campaign direction.",
  },
  {
    icon: "◇",
    title: "Fine Art Prints",
    desc: "Archival-quality prints on cotton rag. Limited editions available.",
  },
];

const PORTFOLIO = [
  { id: 1, label: "Portrait", span: "col-span-1 row-span-2" },
  { id: 2, label: "Wedding", span: "col-span-2 row-span-1" },
  { id: 3, label: "Commercial", span: "col-span-1 row-span-1" },
  { id: 4, label: "Fine Art", span: "col-span-1 row-span-1" },
  { id: 5, label: "Editorial", span: "col-span-1 row-span-1" },
  { id: 6, label: "Lifestyle", span: "col-span-1 row-span-1" },
];

const TESTIMONIALS = [
  {
    quote:
      "Lotus captured something we didn't even know we were carrying. The images are heirlooms.",
    name: "Mara & Eli Vance",
    context: "Wedding, 2024",
  },
  {
    quote:
      "Every frame felt considered. The campaign visuals landed us the feature we needed.",
    name: "Studio Noor",
    context: "Commercial Client",
  },
  {
    quote:
      "I've never felt so at ease in front of a lens. The portraits are extraordinary.",
    name: "Théo Beaumont",
    context: "Portrait Session",
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hero = useInView();
  const servicesSection = useInView();
  const portfolioSection = useInView();
  const testimonialsSection = useInView();
  const ctaSection = useInView();

  return (
    <div
      className="min-h-screen bg-[#0E0E0E] text-[#F5F0E8] antialiased overflow-x-hidden"
      style={{ fontFamily: "'Geist', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Geist:wght@300;400;500&display=swap');
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .fade-up.d1 { transition-delay: 0.1s; }
        .fade-up.d2 { transition-delay: 0.2s; }
        .fade-up.d3 { transition-delay: 0.3s; }
        .fade-up.d4 { transition-delay: 0.4s; }
        .service-card:hover .svc-arrow { color: #D4A853; transform: translateX(4px); }
        .svc-arrow { display: inline-block; transition: color 0.2s, transform 0.2s; }
        .port-item:hover .port-overlay { opacity: 1; }
        .port-overlay { transition: opacity 0.25s; }
        .testimonial-quote-card::before {
          content: '\u201C';
          position: absolute; top: -10px; left: 32px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px; color: #D4A853; opacity: 0.08; line-height: 1; pointer-events: none;
        }
        .nav-grad { background: linear-gradient(to bottom, transparent, #2A2A2A 30%, #2A2A2A 70%, transparent); }
      `}</style>

      {/* ─── NAV ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-[#0E0E0E]/90 backdrop-blur-md border-b border-[#2A2A2A]"
            : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <span className="w-8 h-8 rounded-[8px] bg-[#D4A853] flex items-center justify-center text-[#0E0E0E] text-sm font-medium">
            ✦
          </span>
          <span className="font-serif-display text-[22px] tracking-wide text-[#F5F0E8]">
            Lotus
          </span>
        </a>
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-[13px] font-normal text-[#6B6B6B] tracking-[0.08em] uppercase no-underline hover:text-[#F5F0E8] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="hidden md:inline-block text-[13px] font-medium text-[#0E0E0E] bg-[#D4A853] px-[22px] py-[10px] rounded-xl no-underline tracking-wide hover:opacity-80 transition-opacity"
        >
          Book a Session
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center px-10 pt-[120px] pb-20 overflow-hidden">
        {/* background blobs */}
        <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-[#D4A853] opacity-[0.06] pointer-events-none" />
        <div className="absolute -bottom-28 -left-16 w-[300px] h-[300px] rounded-full bg-[#D4A853] opacity-[0.04] pointer-events-none" />
        {/* vertical rule */}
        <div className="nav-grad hidden lg:block absolute top-0 bottom-0 left-[55%] w-px opacity-60" />

        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div
            ref={hero.ref}
            className={`fade-up ${hero.visible ? "visible" : ""} relative z-10`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4A853]">
                Calgary · Est. 2016
              </span>
            </div>
            <h1 className="font-serif-display font-light leading-[1.05] tracking-tight text-[#F5F0E8] mb-7 text-[clamp(52px,6vw,88px)]">
              Light that
              <br />
              <em className="italic text-[#D4A853]">tells the truth</em>
            </h1>
            <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.8] max-w-[380px] mb-11">
              Photography for those who believe images should carry weight.
              Portraits, weddings, and commercial work — made with intention.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-[#D4A853] text-[#0E0E0E] text-[14px] font-medium px-8 py-4 rounded-xl no-underline tracking-wide hover:opacity-80 transition-opacity"
              >
                View Portfolio →
              </a>
              <a
                href="#"
                className="text-[14px] font-normal text-[#F5F0E8] border border-[#2A2A2A] px-8 py-4 rounded-xl no-underline tracking-wide hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right — images */}
          <div className="relative h-[480px] lg:h-[520px]">

            {/* Featured Work — large, top right */}
            <div className="absolute top-0 right-0 w-[75%] h-[420px] rounded-[20px] overflow-hidden border border-[#2A2A2A]">
              <Image
                src="/anniversary.jpg"
                alt="Featured work"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Portfolio — small, bottom left */}
            <div className="absolute bottom-0 left-0 w-[52%] h-[260px] rounded-[20px] overflow-hidden border border-[#333]">
              <Image
                src="/babyshower.jpg"
                alt="Portfolio"
                fill
                className="object-cover"
              />
            </div>

            {/* Stat card */}
            <div className="absolute bottom-14 right-0 bg-[#161616]/95 border border-[#2A2A2A] rounded-xl px-5 py-4 z-10">
              <div className="font-serif-display text-[32px] text-[#D4A853] leading-none mb-1">
                340+
              </div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[#6B6B6B]">
                Sessions completed
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-10 py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div
            ref={servicesSection.ref}
            className={`fade-up ${servicesSection.visible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4A853]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4A853]">
                What we do
              </span>
            </div>
            <h2 className="font-serif-display font-light leading-[1.1] text-[#F5F0E8] text-[clamp(36px,4vw,56px)]">
              Every image <em className="italic">begins</em>
              <br />
              with a conversation
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#2A2A2A] rounded-[20px] overflow-hidden divide-x divide-y divide-[#2A2A2A]">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`service-card bg-[#161616] p-10 hover:bg-[#1A1A1A] transition-colors cursor-default fade-up d${
                  i + 1
                } ${servicesSection.visible ? "visible" : ""}`}
              >
                <span className="block text-[22px] text-[#D4A853] mb-6">
                  {s.icon}
                </span>
                <div className="font-serif-display text-[22px] text-[#F5F0E8] mb-3 leading-[1.2]">
                  {s.title}
                </div>
                <p className="text-[13px] font-light text-[#6B6B6B] leading-[1.8]">
                  {s.desc}
                </p>
                <span className="svc-arrow mt-7 text-[18px] text-[#4A4A4A]">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section className="px-10 pb-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div
            ref={portfolioSection.ref}
            className={`fade-up ${
              portfolioSection.visible ? "visible" : ""
            } flex flex-wrap justify-between items-end gap-6 mb-16`}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#D4A853]" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4A853]">
                  Selected Work
                </span>
              </div>
              <h2 className="font-serif-display font-light leading-[1.1] text-[#F5F0E8] text-[clamp(36px,4vw,56px)]">
                A glimpse at
                <br />
                <em className="italic">the archive</em>
              </h2>
            </div>
            <a
              href="#"
              className="text-[14px] font-normal text-[#F5F0E8] border border-[#2A2A2A] px-8 py-4 rounded-xl no-underline tracking-wide hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
            >
              View Full Portfolio →
            </a>
          </div>

          <div
            className="grid grid-cols-3 gap-3"
            style={{ gridAutoRows: "240px" }}
          >
            {PORTFOLIO.map((item) => (
              <div
                key={item.id}
                className={`port-item relative ${item.span} bg-[#161616] border border-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4A853] transition-colors flex items-center justify-center`}
              >
                <span className="font-serif-display text-[48px] text-[#D4A853] opacity-[0.12] select-none">
                  ◈
                </span>
                <div className="port-overlay absolute inset-0 bg-[#D4A853]/[0.08] opacity-0 flex items-end p-5">
                  <span className="text-[11px] tracking-[0.14em] uppercase text-[#D4A853] bg-[#D4A853]/[0.12] px-3 py-1.5 rounded-md border border-[#D4A853]/20">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#161616] border-t border-b border-[#2A2A2A] px-10 py-[120px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
          <div
            ref={testimonialsSection.ref}
            className={`fade-up ${testimonialsSection.visible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#D4A853]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4A853]">
                Kind Words
              </span>
            </div>
            <h2 className="font-serif-display font-light leading-[1.1] text-[#F5F0E8] mb-4 text-[clamp(36px,4vw,56px)]">
              What clients
              <br />
              <em className="italic">carry home</em>
            </h2>
            <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.8] max-w-[340px]">
              Photography is only finished when someone says: that's exactly
              what I felt.
            </p>
          </div>

          <div
            className={`fade-up d2 ${
              testimonialsSection.visible ? "visible" : ""
            }`}
          >
            <div className="testimonial-quote-card relative bg-[#0E0E0E] border border-[#2A2A2A] rounded-[20px] p-10 overflow-hidden">
              <p className="font-serif-display text-[20px] font-light italic text-[#F5F0E8] leading-[1.6] mb-7 relative z-10">
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </p>
              <div className="text-[14px] font-medium text-[#F5F0E8] mb-1">
                {TESTIMONIALS[activeTestimonial].name}
              </div>
              <div className="text-[12px] font-light text-[#6B6B6B] tracking-wide">
                {TESTIMONIALS[activeTestimonial].context}
              </div>
              <div className="flex gap-2 mt-7">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-[3px] rounded-full border-none cursor-pointer transition-all duration-200 ${
                      i === activeTestimonial
                        ? "w-10 bg-[#D4A853]"
                        : "w-6 bg-[#2A2A2A]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative px-10 py-[120px] text-center overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#D4A853] opacity-[0.04] pointer-events-none"
          style={{ filter: "blur(60px)" }}
        />
        <div
          ref={ctaSection.ref}
          className={`fade-up ${ctaSection.visible ? "visible" : ""} relative z-10`}
        >
          <h2 className="font-serif-display font-light leading-[1.1] tracking-tight text-[#F5F0E8] mb-6 text-[clamp(40px,5vw,72px)]">
            Ready to make
            <br />
            <em className="italic text-[#D4A853]">something real?</em>
          </h2>
          <p className="text-[15px] font-light text-[#6B6B6B] mb-11">
            Accepting new clients for Spring &amp; Summer 2025.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="bg-[#D4A853] text-[#0E0E0E] text-[14px] font-medium px-8 py-4 rounded-xl no-underline tracking-wide hover:opacity-80 transition-opacity"
            >
              Book a Consultation →
            </a>
            <a
              href="#"
              className="text-[14px] font-normal text-[#F5F0E8] border border-[#2A2A2A] px-8 py-4 rounded-xl no-underline tracking-wide hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#161616] border-t border-[#2A2A2A] px-10 pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-12 border-b border-[#2A2A2A] mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-[8px] bg-[#D4A853] flex items-center justify-center text-[#0E0E0E] text-sm font-medium">
                ✦
              </span>
              <span className="font-serif-display text-[22px] tracking-wide text-[#F5F0E8]">
                Lotus Photo Studio
              </span>
            </div>
            <p className="text-[13px] font-light text-[#6B6B6B] leading-[1.8] max-w-[280px]">
              Photography and visual storytelling based in Calgary, Alberta.
              Available for travel.
            </p>
          </div>
          {[
            {
              title: "Navigate",
              links: ["Work", "Services", "About", "Journal", "Contact"],
            },
            {
              title: "Services",
              links: ["Portraits", "Weddings", "Commercial", "Fine Art Prints"],
            },
            {
              title: "Connect",
              links: ["Instagram", "Pinterest", "Behance", "Email Us"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#4A4A4A] mb-5">
                {col.title}
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] font-light text-[#6B6B6B] no-underline hover:text-[#F5F0E8] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <span className="text-[12px] font-light text-[#4A4A4A]">
            © 2025 Lotus Photo Studio. All rights reserved.
          </span>
          <span className="text-[12px] text-[#D4A853]">Calgary, AB · CA</span>
        </div>
      </footer>
    </div>
  );
}