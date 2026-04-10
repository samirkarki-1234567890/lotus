"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/40 backdrop-blur-md shadow-sm">
        <h1 className="text-2xl font-semibold tracking-wide">
          Lotus Photo Studio
        </h1>

        <ul className="flex gap-8 font-medium items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

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
