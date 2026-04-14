"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(loginStatus === "true");
      setMounted(true);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      <nav className="flex items-center justify-between bg-white/40 px-10 py-5 shadow-sm backdrop-blur-md">
        <h1 className="text-2xl font-semibold tracking-wide text-[#1f4e6b]">
          Lotus Photo Studio
        </h1>

        <ul className="flex items-center gap-8 font-medium text-[#1f4e6b]">
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
            {!mounted ? null : !isLoggedIn ? (
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
    </div>
  );
}
