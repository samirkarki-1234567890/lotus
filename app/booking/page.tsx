"use client";
import Link from "next/link";
import React, { useState } from "react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventType, setEventType] = useState("Anniversary");

  const unavailableDates = ["2026-04-10", "2026-04-15", "2026-04-22"];

  const getDaysInMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= totalDays; i++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      days.push(fullDate);
    }
    return days;
  };

  const days = getDaysInMonth();

  return (
    /* Changed to light blue gradient background */
    <main className="min-h-screen bg-gradient-to-b from-[#eef4ff] to-[#d1e3ff] text-[#1f4e6b] font-sans">
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

      {/* Title matching the "Capture Your Moments" style */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-[#1f4e6b]">
          Book Your <span className="text-blue-600">Session</span>
        </h1>
        <p className="text-center text-[#5a8bad] mb-12 max-w-lg mx-auto">
          Secure your spot today and let us help you create timeless memories.
        </p>

        {/* Event Type Selection: Modern pill style */}
        <div className="flex justify-center gap-4 mb-12">
          {["Anniversary", "Wedding", "School Event"].map((type) => (
            <button
              key={type}
              onClick={() => setEventType(type)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm
                ${
                  eventType === type
                    ? "bg-blue-600 text-white scale-105 shadow-blue-200"
                    : "bg-white text-[#1f4e6b] hover:bg-blue-50"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Calendar: Clean white card with soft shadows */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1f4e6b]">
            Select a Date{" "}
            <span className="text-blue-500 text-lg block font-medium">
              ({eventType})
            </span>
          </h2>

          <div className="grid grid-cols-7 gap-4 text-center">
            {days.map((date) => {
              const isUnavailable = unavailableDates.includes(date);
              const isSelected = selectedDate === date;

              return (
                <div
                  key={date}
                  onClick={() => !isUnavailable && setSelectedDate(date)}
                  className={`p-4 rounded-xl cursor-pointer text-sm font-bold transition-all
                    ${isUnavailable ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}
                    ${isSelected ? "bg-blue-600 text-white ring-4 ring-blue-100 scale-110" : ""}
                  `}
                >
                  {date.split("-")[2]}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-10 text-sm font-semibold text-[#5a8bad]">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-50 rounded-full border border-blue-200"></div>{" "}
              Available
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>{" "}
              Unavailable
            </span>
          </div>

          {/* Confirm Button */}
          {selectedDate && (
            <div className="text-center mt-10 animate-in fade-in slide-in-from-bottom-4">
              <p className="text-[#5a8bad] mb-4">
                You've selected:{" "}
                <span className="text-blue-600 font-bold">{selectedDate}</span>
              </p>
              <Link
                href="./confirm-page"
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 shadow-md shadow-blue-200"
              >
                Confirm Booking
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
