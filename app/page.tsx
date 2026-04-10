import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#dbe7f5] via-[#c9d8ee] to-[#b5c7e3] text-[#1f4e6b]">
      {/* Navigation: White background, subtle shadow */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-[#1f4e6b]">
          Lotus Photo Studio
        </h1>

        <ul className="flex gap-8 font-medium items-center text-[#4a7a96]">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            About Us
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
          <li className="bg-[#3b82f6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer shadow-md">
            Login
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          Capture Your Moments
        </h2>

        <p className="max-w-xl text-lg text-[#1f4e6b]/80 mb-8">
          Professional photography services for weddings, portraits, events, and
          more. Let Lotus Photo Studio turn your memories into timeless art.
        </p>

        <Link href="/booking">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 transition">
            Book a Session
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-10  mt-[-110px]">
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Wedding Photography</h3>
          <p className="text-sm text-gray-600">
            Capture your special day with stunning and emotional storytelling.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Portrait Sessions</h3>
          <p className="text-sm text-gray-600">
            Professional portraits for individuals, families, and brands.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Event Coverage</h3>
          <p className="text-sm text-gray-600">
            High-quality photography for corporate and personal events.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-[#1f4e6b]/70">
        © 2026 Lotus Photo Studio. All rights reserved.
      </footer>
    </main>
  );
}
