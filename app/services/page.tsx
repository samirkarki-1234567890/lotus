"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

type Service = {
  id: number;
  name: string;
  category: string;
  price: string;
  duration: string;
  status: "Active" | "Pending" | "Inactive";
};

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  date: string;
};

type Booking = {
  id: string;
  eventType: string;
  selectedDate: string;
  slot: string;
  status: string;
};

const initialServices: Service[] = [
  {
    id: 2547,
    name: "Anniversary",
    category: "Event",
    price: "$450",
    duration: "3 Hours",
    status: "Active",
  },
  {
    id: 1567,
    name: "Baby Shower",
    category: "Event",
    price: "$380",
    duration: "2 Hours",
    status: "Pending",
  },
  {
    id: 6969,
    name: "Wedding Photography",
    category: "Wedding",
    price: "$1200",
    duration: "8 Hours",
    status: "Inactive",
  },
  {
    id: 5597,
    name: "School Event",
    category: "Event",
    price: "$500",
    duration: "4 Hours",
    status: "Active",
  },
  {
    id: 2048,
    name: "Portrait Session",
    category: "Portrait",
    price: "$250",
    duration: "1 Hour",
    status: "Active",
  },
];

const messages: Message[] = [
  {
    id: 1,
    name: "Sarah . K",
    email: "sarah@gmail.com",
    subject: "Special Request",
    date: "April 09, 2025",
  },
  {
    id: 2,
    name: "Sarah . K",
    email: "sarah@gmail.com",
    subject: "Package Inquiry",
    date: "April 09, 2025",
  },
  {
    id: 3,
    name: "Sarah . K",
    email: "sarah@gmail.com",
    subject: "Reschedule",
    date: "April 09, 2025",
  },
  {
    id: 4,
    name: "Sarah . K",
    email: "sarah@gmail.com",
    subject: "Special Request",
    date: "April 09, 2025",
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [bookingError, setBookingError] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const value =
        `${service.name} ${service.category} ${service.price} ${service.duration} ${service.status}`.toLowerCase();
      return value.includes(search.toLowerCase());
    });
  }, [services, search]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoadingBookings(true);
        setBookingError("");

        const bookingsQuery = query(
          collection(db, "bookings"),
          orderBy("createdAt", "desc"),
        );

        const querySnapshot = await getDocs(bookingsQuery);

        const bookingList: Booking[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            eventType: data.eventType || "",
            selectedDate: data.selectedDate || "",
            slot: data.slot || "",
            status: data.status || "confirmed",
          };
        });

        setBookings(bookingList);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookingError("Failed to load bookings.");
      } finally {
        setLoadingBookings(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?",
    );
    if (!confirmed) return;

    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const getStatusStyle = (status: Service["status"]) => {
    if (status === "Active") {
      return "bg-green-100 text-green-700";
    }
    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-blue-100 text-blue-700";
  };

  const getBookingStatusStyle = (status: string) => {
    if (status.toLowerCase() === "confirmed") {
      return "bg-green-100 text-green-700";
    }
    if (status.toLowerCase() === "pending") {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-[#d7e3f3] text-[#245072]">
      <section className="mx-auto max-w-[1600px] px-6 pb-8 pt-12 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">Manage Services</h2>
            <p className="mt-3 max-w-[760px] text-lg text-[#416b8a] md:text-xl">
              Add, view, and manage photography services with a clean dashboard
              that matches your homepage style.
            </p>
          </div>

          <div className="rounded-2xl bg-[#edf3f9] px-8 py-6 shadow-md">
            <p className="text-sm text-[#5d7a95]">Total Services</p>
            <p className="mt-1 text-4xl font-bold">{services.length}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { title: "Total Services", value: services.length },
            { title: "Total Bookings", value: bookings.length },
            { title: "New Messages", value: 14 },
            { title: "Total Customers", value: 269 },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#edf3f9] px-6 py-5 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#9fc4e8]" />
                <div>
                  <p className="text-sm text-[#607a93]">{item.title}</p>
                  <p className="text-4xl font-bold leading-none">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pt-6 md:px-10">
        <div className="rounded-2xl bg-[#edf3f9] p-5 shadow-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/services/add"
              className="inline-flex w-fit items-center rounded-xl bg-[#2f80ed] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#256fdb]"
            >
              + Add Service
            </Link>

            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#c7d5e3] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#2f80ed] md:max-w-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-8 md:px-10">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-[#edf3f9] p-5 shadow-md">
            <h3 className="mb-5 text-3xl font-bold">Manage Services</h3>

            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full min-w-[760px] overflow-hidden rounded-2xl bg-white text-left">
                <thead>
                  <tr className="bg-[#e5edf6] text-sm text-[#335574]">
                    <th className="px-4 py-4 font-semibold">Service ID</th>
                    <th className="px-4 py-4 font-semibold">Service Name</th>
                    <th className="px-4 py-4 font-semibold">Category</th>
                    <th className="px-4 py-4 font-semibold">Price</th>
                    <th className="px-4 py-4 font-semibold">Duration</th>
                    <th className="px-4 py-4 font-semibold">Status</th>
                    <th className="px-4 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr
                      key={service.id}
                      className={`text-sm text-[#35526d] ${
                        index % 2 === 0 ? "bg-white" : "bg-[#f8fbfe]"
                      }`}
                    >
                      <td className="px-4 py-4">#{service.id}</td>
                      <td className="px-4 py-4 font-medium">{service.name}</td>
                      <td className="px-4 py-4">{service.category}</td>
                      <td className="px-4 py-4">{service.price}</td>
                      <td className="px-4 py-4">{service.duration}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            service.status,
                          )}`}
                        >
                          {service.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <button className="rounded-lg bg-[#7d9cff] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#6d8cec]">
                            Modify
                          </button>
                          <button
                            onClick={() => handleDelete(service.id)}
                            className="rounded-lg bg-[#86d2d2] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#72c0c0]"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredServices.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-4 py-10 text-center text-sm text-[#59728b]"
                      >
                        No services found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl bg-[#edf3f9] p-5 shadow-md">
            <h3 className="mb-5 text-3xl font-bold">Client Message</h3>

            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full overflow-hidden rounded-2xl bg-white text-left">
                <thead>
                  <tr className="bg-[#e5edf6] text-sm text-[#335574]">
                    <th className="px-4 py-4 font-semibold">Name</th>
                    <th className="px-4 py-4 font-semibold">Email</th>
                    <th className="px-4 py-4 font-semibold">Subject</th>
                    <th className="px-4 py-4 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message, index) => (
                    <tr
                      key={message.id}
                      className={`text-sm text-[#35526d] ${
                        index % 2 === 0 ? "bg-white" : "bg-[#f8fbfe]"
                      }`}
                    >
                      <td className="px-4 py-4">{message.name}</td>
                      <td className="px-4 py-4 break-all">{message.email}</td>
                      <td className="px-4 py-4">{message.subject}</td>
                      <td className="px-4 py-4">{message.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bookings table */}
      <section className="mx-auto max-w-[1600px] px-6 pb-8 md:px-10">
        <div className="rounded-3xl bg-[#edf3f9] p-5 shadow-md">
          <h3 className="mb-5 text-3xl font-bold">Recent Bookings</h3>

          {loadingBookings ? (
            <p className="rounded-2xl bg-white px-4 py-6 text-[#59728b]">
              Loading bookings...
            </p>
          ) : bookingError ? (
            <p className="rounded-2xl bg-white px-4 py-6 text-red-600">
              {bookingError}
            </p>
          ) : (
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full min-w-[700px] overflow-hidden rounded-2xl bg-white text-left">
                <thead>
                  <tr className="bg-[#e5edf6] text-sm text-[#335574]">
                    <th className="px-4 py-4 font-semibold">Booking ID</th>
                    <th className="px-4 py-4 font-semibold">Event Type</th>
                    <th className="px-4 py-4 font-semibold">Date</th>
                    <th className="px-4 py-4 font-semibold">Slot</th>
                    <th className="px-4 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                      <tr
                        key={booking.id}
                        className={`text-sm text-[#35526d] ${
                          index % 2 === 0 ? "bg-white" : "bg-[#f8fbfe]"
                        }`}
                      >
                        <td className="px-4 py-4">#{booking.id.slice(0, 6)}</td>
                        <td className="px-4 py-4 font-medium">
                          {booking.eventType}
                        </td>
                        <td className="px-4 py-4">{booking.selectedDate}</td>
                        <td className="px-4 py-4">{booking.slot}</td>
                        <td className="px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${getBookingStatusStyle(
                              booking.status,
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-10 text-center text-sm text-[#59728b]"
                      >
                        No bookings found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <footer className="pb-8 pt-4 text-center text-[#5a7993]">
        © 2026 Lotus Photo Studio. All rights reserved.
      </footer>
    </div>
  );
}
