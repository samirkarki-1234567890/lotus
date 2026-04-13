"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const defaultUsers = [
      {
        username: "admin",
        password: "9999",
        name: "lotus admin",
        role: "Manager",
        email: "admin9999@lotus.com",
      },
    ];

    const allUsers = [...defaultUsers, ...savedUsers];

    const foundUser = allUsers.find(
      (user) => user.username === username && user.password === password,
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: foundUser.username,
          name: foundUser.name,
          role: foundUser.role,
          email: foundUser.email,
        }),
      );

      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b] px-6">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Test account: admin / 9999
        </p>

        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
