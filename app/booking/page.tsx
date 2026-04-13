"use client";

import Link from "next/link";
import React, { useState } from "react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventType, setEventType] = useState("Anniversary");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const unavailableDates = ["2026-04-10", "2026-04-15", "2026-04-22"];

  const availableSlots = ["10:00 AM", "1:00 PM", "4:00 PM"];

  const getDaysInMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days: string[] = [];
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= totalDays; i++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      days.push(fullDate);
    }

    return days;
  };

  const days = getDaysInMonth();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef4ff] to-[#d1e3ff] text-[#1f4e6b] font-sans">
      <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-[#1f4e6b]">
          Lotus Photo Studio
        </h1>

        <ul className="flex gap-8 font-medium items-center text-[#4a7a96]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="bg-[#3b82f6] text-white px-6 py-2 rounded-lg font-semibold shadow-md">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-[#1f4e6b]">
          Book Your <span className="text-blue-600">Session</span>
        </h1>

        <p className="text-center text-[#5a8bad] mb-12 max-w-lg mx-auto">
          Secure your spot today and let us help you create timeless memories.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {["Anniversary", "Wedding", "School Event"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setEventType(type);
                setSelectedSlot(null);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm ${
                eventType === type
                  ? "bg-blue-600 text-white scale-105 shadow-blue-200"
                  : "bg-white text-[#1f4e6b] hover:bg-blue-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1f4e6b]">
            Select a Date
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
                  onClick={() => {
                    if (!isUnavailable) {
                      setSelectedDate(date);
                      setSelectedSlot(null);
                    }
                  }}
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

          <div className="flex justify-center gap-8 mt-10 text-sm font-semibold text-[#5a8bad]">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-50 rounded-full border border-blue-200"></div>
              Available
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              Unavailable
            </span>
          </div>

          {selectedDate && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-center mb-4 text-[#1f4e6b]">
                Select a Time Slot
              </h3>

              <div className="flex justify-center gap-4 flex-wrap">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-6 py-3 rounded-xl font-semibold transition ${
                      selectedSlot === slot
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedSlot && (
            <div className="text-center mt-10">
              <p className="text-[#5a8bad] mb-2">
                Selected date:{" "}
                <span className="font-bold text-blue-600">{selectedDate}</span>
              </p>
              <p className="text-[#5a8bad] mb-6">
                Selected slot:{" "}
                <span className="font-bold text-blue-600">{selectedSlot}</span>
              </p>

              <Link
                href={`/confirm-page?eventType=${encodeURIComponent(eventType)}&date=${encodeURIComponent(selectedDate)}&slot=${encodeURIComponent(selectedSlot)}`}
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
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
