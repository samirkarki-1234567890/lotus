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
    <main className="bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white/40 px-10 py-5 shadow-sm backdrop-blur-md">
        <h1 className="text-2xl font-semibold tracking-wide">
          Lotus Photo Studio
        </h1>

        <ul className="flex items-center gap-8 font-medium">
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
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>

          <li>
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </main>
  );
}
