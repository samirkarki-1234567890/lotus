"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Hero */}
      <section className="text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-light mb-6">Contact Us</h1>
        <p className="text-lg text-[#2b5c78] max-w-xl mx-auto">
          Have a question or want to book a session? Get in touch with us.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-10">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-[#1f4e6b]/70">
        © 2026 Lotus Photo Studio. All rights reserved.
      </footer>
    </main>
  );
}
