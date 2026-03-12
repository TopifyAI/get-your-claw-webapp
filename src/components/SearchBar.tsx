"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder="Search bots..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-500 focus:border-purple-500/50"
      />
    </div>
  );
}
