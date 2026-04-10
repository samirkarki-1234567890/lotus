"use client";
import Link from "next/link";
import React from "react";

const ConfirmationPage = ({
  bookingDetails = { date: "2026-04-25", type: "Wedding" },
}) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef4ff] to-[#d1e3ff] text-[#1f4e6b] font-sans flex flex-col items-center justify-center p-6">
      {/* Success Card */}
      <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-10 text-center border border-white/50 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

        {/* Success Icon (SVG) */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-full">
            <div className="bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-200">
              <svg
                xmlns="http://w3.org"
                className="text-white w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#1f4e6b] mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-[#5a8bad] mb-8">
          Your session with Lotus Photo Studio is locked in. We can't wait to
          capture your moments.
        </p>

        {/* Details Section */}
        <div className="bg-blue-50/50 rounded-2xl p-6 mb-8 border border-blue-100/50">
          <div className="space-y-4 text-left">
            {/* Date */}
            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
              <span className="font-medium text-[#4a7a96]">Date</span>
              <span className="font-bold text-[#1f4e6b]">
                {bookingDetails.date}
              </span>
            </div>

            {/* Session Type */}
            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
              <span className="font-medium text-[#4a7a96]">Session Type</span>
              <span className="font-bold text-[#1f4e6b]">
                {bookingDetails.type}
              </span>
            </div>

            {/* Arrival Time */}
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#4a7a96]">Arrival Time</span>
              <span className="font-bold text-[#1f4e6b]">10:00 AM</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95">
            Add to Calendar
          </button>

          <button className="flex items-center justify-center gap-2 w-full bg-transparent text-[#5a8bad] font-semibold py-3 hover:text-blue-600 transition-colors">
            <svg
              xmlns="http://w3.org"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <Link href="./">Return to Home</Link>
          </button>
        </div>

        {/* Contact Note */}
        <p className="mt-8 text-xs text-[#90b1c7]">
          A confirmation email has been sent. Need to reschedule? <br />
          <span className="text-blue-500 cursor-pointer hover:underline font-medium">
            Contact Support
          </span>
        </p>
      </div>

      <div className="mt-8 text-[#1f4e6b]/40 font-bold tracking-widest text-xs uppercase">
        Lotus Photo Studio
      </div>
    </main>
  );
};

export default ConfirmationPage;
