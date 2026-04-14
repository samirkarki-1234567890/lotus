"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddServicePage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    duration: "",
    status: "Active",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.category.trim() === "" ||
      form.price.trim() === "" ||
      form.duration.trim() === "" ||
      form.description.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Service added successfully!");

    setForm({
      name: "",
      category: "",
      price: "",
      duration: "",
      status: "Active",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#d7e3f3] text-[#245072]">
      <section className="mx-auto max-w-[1100px] px-6 pb-12 pt-12 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Add Service</h2>
            <p className="mt-3 text-lg text-[#416b8a]">
              Create a new service for Lotus Photo Studio.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center rounded-xl bg-[#2f80ed] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#256fdb]"
          >
            Back to Services
          </Link>
        </div>

        <div className="rounded-3xl bg-[#edf3f9] p-6 shadow-md md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#245072]">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter service name"
                className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#245072]">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Enter category"
                className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#245072]">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#245072]">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="Enter duration"
                  className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#245072]">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#245072]">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="Enter service description"
                className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed]"
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-[#2f80ed] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#256fdb]"
              >
                Add Service
              </button>

              <Link
                href="/services"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#245072] shadow transition hover:bg-[#f6f9fc]"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>

      <footer className="pb-8 pt-2 text-center text-[#5a7993]">
        © 2026 Lotus Photo Studio. All rights reserved.
      </footer>
    </div>
  );
}
