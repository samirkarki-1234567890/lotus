"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-light mb-6">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#2b5c78]">
          At Lotus Photo Studio, we capture moments that last forever.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-[#355d75] leading-8">
            We are a professional photography studio specializing in weddings,
            portraits, and events. Our goal is to turn your memories into
            timeless art.
          </p>
        </div>
      </section>
    </main>
  );
}
