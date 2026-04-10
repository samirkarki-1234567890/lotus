"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function signupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password || !form.name || !form.email) {
      setError("All fields are required");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.find(
      (u: any) => u.username === form.username
    );

    if (userExists) {
      setError("Username already exists");
      return;
    }

    const newUser = {
      ...form,
      role: "Customer",
    };

    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // otomatik login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser));

    router.push("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b] px-6">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button className="w-full bg-blue-500 text-white py-3 rounded-xl">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
