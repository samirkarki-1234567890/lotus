"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../_utils/firebase";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const eventType = searchParams.get("eventType") || "";
  const selectedDate = searchParams.get("date") || "";
  const slot = searchParams.get("slot") || "";

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleConfirmBooking = async () => {
    if (!eventType || !selectedDate || !slot) {
      setMessage("Missing booking details.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Saving booking...");

      console.log("Starting save...");
      console.log({ eventType, selectedDate, slot });

      const docRef = await addDoc(collection(db, "bookings"), {
        eventType,
        selectedDate,
        slot,
        status: "confirmed",
        createdAt: serverTimestamp(),
      });

      console.log("Saved document ID:", docRef.id);
      setMessage("Booking saved successfully!");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error: any) {
      console.error("Firestore error:", error);
      setMessage(`Failed to save booking: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef4ff] to-[#d1e3ff] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#f3f5fb] rounded-[30px] shadow-lg p-10">
        <h1 className="text-6xl font-bold text-center text-[#0b4b75] mb-12">
          Confirm Booking
        </h1>

        <div className="space-y-8 text-[#0b4b75] text-2xl font-semibold">
          <p>
            Event Type: <span className="font-normal">{eventType}</span>
          </p>
          <p>
            Date: <span className="font-normal">{selectedDate}</span>
          </p>
          <p>
            Slot: <span className="font-normal">{slot}</span>
          </p>
        </div>

        <button
          onClick={handleConfirmBooking}
          disabled={loading}
          className="w-full mt-12 bg-blue-600 hover:bg-blue-700 text-white text-2xl py-5 rounded-3xl transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Confirm Booking"}
        </button>

        {message && (
          <p className="text-center text-[#0b4b75] text-xl mt-8">{message}</p>
        )}
      </div>
    </main>
  );
}
