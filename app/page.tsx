"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-28 text-center">
        <h2 className="mb-6 text-5xl font-light tracking-wide md:text-6xl">
          Capture Your Moments
        </h2>

        <p className="mb-8 max-w-xl text-lg text-[#1f4e6b]/80">
          Professional photography services for weddings, portraits, events, and
          more. Let Lotus Photo Studio turn your memories into timeless art.
        </p>

        <Link
          href="/booking"
          className="rounded-xl bg-blue-500 px-6 py-3 text-white shadow-md transition hover:bg-blue-600"
        >
          Book a Session
        </Link>
      </section>

      {/* Services Preview */}
      <section className="grid gap-10 px-10 py-20 md:grid-cols-3">
        <div className="rounded-2xl bg-white/60 p-6 shadow-md backdrop-blur-md transition hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold">Wedding Photography</h3>
          <p className="text-sm text-gray-600">
            Capture your special day with stunning and emotional storytelling.
          </p>
        </div>

        <div className="rounded-2xl bg-white/60 p-6 shadow-md backdrop-blur-md transition hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold">Portrait Sessions</h3>
          <p className="text-sm text-gray-600">
            Professional portraits for individuals, families, and brands.
          </p>
        </div>

        <div className="rounded-2xl bg-white/60 p-6 shadow-md backdrop-blur-md transition hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold">
            <Link
              href="/services"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-teal-600"
            >
              Manage Events +
            </Link>
          </h3>
          <p className="text-sm text-gray-600">
            High-quality photography for corporate and personal events.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-[#1f4e6b]/70">
        © 2026 Lotus Photo Studio. All rights reserved.
      </footer>
    </main>
  );
}
