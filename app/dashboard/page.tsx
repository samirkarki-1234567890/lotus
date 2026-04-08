"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type UserType = {
  username: string;
  name: string;
  role: string;
  email: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b] px-6">
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to the Dashboard
        </h1>

        {user ? (
          <div className="space-y-2 mb-6 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {user.role}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>
        ) : (
          <p className="mb-6 text-gray-700">No user data found.</p>
        )}

        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}
