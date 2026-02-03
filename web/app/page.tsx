"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Home,
  Users,
  PoundSterling,
  ShieldCheck,
  Plus,
  CheckCircle2,
  XCircle,
  Filter,
  Mail,
  Phone,
  Heart,
} from "lucide-react";

/**
 * OxfordLet – MVP homepage (Next.js App Router)
 */

const LET_RETENTION_DAYS = 30;

const initialListings = [
  {
    id: "OX-1001",
    title: "Modern 2-bed flat – Headington",
    area: "Headington",
    postcode: "OX3",
    rentPcm: 1650,
    beds: 2,
    type: "Flat",
    furnished: true,
    studentFriendly: true,
    billsIncluded: false,
    availableFrom: "2026-02-15",
    status: "available",
    letMarkedAt: null,
    featured: true,
    contactName: "OxfordLet Verified Agent",
    contactEmail: "agent@example.com",
    contactPhone: "",
    photos: 4,
    description:
      "Bright, modern flat close to buses to the city centre and universities.",
  },
  {
    id: "OX-1002",
    title: "3-bed house – Cowley",
    area: "Cowley",
    postcode: "OX4",
    rentPcm: 2200,
    beds: 3,
    type: "House",
    furnished: true,
    studentFriendly: true,
    billsIncluded: true,
    availableFrom: "2026-03-01",
    status: "available",
    letMarkedAt: null,
    featured: false,
    contactName: "Private Landlord",
    contactEmail: "landlord@example.com",
    contactPhone: "",
    photos: 6,
    description:
      "Popular location with easy access to shops and transport.",
  },
];

export default function HomePage() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("Any");

  const visibleListings = useMemo(() => {
    return initialListings.filter((x) => {
      if (q && !x.title.toLowerCase().includes(q.toLowerCase())) return false;
      if (area !== "Any" && x.area !== area) return false;
      return true;
    });
  }, [q, area]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold">
              Oxford<span className="text-emerald-500">Let</span>
            </div>
            <div className="text-xs text-slate-500">
              Local Oxford rentals
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">
          Find rental homes in Oxford
        </h1>
        <p className="mt-2 text-slate-600">
          Clean listings. No dead ads. Contact landlords and agents directly.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Headington, Cowley, 2-bed..."
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="rounded-xl border border-slate-300 px-4 py-3"
          >
            <option>Any</option>
            <option>Headington</option>
            <option>Cowley</option>
          </select>

          <button className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">
            Search
          </button>
        </div>
      </section>

      {/* Listings */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-4">
          {visibleListings.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{item.title}</h2>
                <span className="text-emerald-600 font-semibold">
                  £{item.rentPcm.toLocaleString()} pcm
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {item.area} · {item.type} · {item.beds} bed
              </p>
              <p className="mt-2 text-sm">{item.description}</p>

              <div className="mt-3 text-sm text-slate-700">
                Contact: {item.contactEmail}
              </div>
            </div>
          ))}
        </div>

        {visibleListings.length === 0 && (
          <p className="mt-6 text-slate-600">
            No results. Try another search.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm">
          © {new Date().getFullYear()} OxfordLet.co.uk
        </div>
      </footer>
    </div>
  );
}
