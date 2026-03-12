"use client";

import { useState, useMemo } from "react";
import { bots } from "@/data/bots";
import BotCard from "@/components/BotCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

export default function BotsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = bots;
    if (category !== "All") {
      result = result.filter((b) => b.categories.includes(category));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.tagline.toLowerCase().includes(q) ||
          b.categories.some((c) => c.toLowerCase().includes(q))
      );
    }
    return result;
  }, [category, search]);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">Browse Bots</h1>
          <p className="mt-2 text-gray-400">
            Discover AI agents for every use case. Filter by category or search to find what you
            need.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter selected={category} onChange={setCategory} />
          <div className="w-full sm:w-64">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((bot) => (
              <BotCard key={bot.slug} bot={bot} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">No bots found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
