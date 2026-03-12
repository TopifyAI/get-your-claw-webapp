"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-white">Get in Touch</h1>
        <p className="mb-10 text-gray-400">
          Interested in our bots? Have questions? We&apos;d love to hear from you.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
              <Send className="h-7 w-7 text-emerald-400" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-white">Message Sent!</h2>
            <p className="text-sm text-gray-400">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Name</label>
              <Input
                type="text"
                required
                placeholder="Your name"
                className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Which bot are you interested in?
              </label>
              <Input
                type="text"
                placeholder="e.g. Peec Monitor Bot, GEO Agent..."
                className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what you need..."
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Direct contact */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:hello@topify.ai"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5 text-purple-400" />
            <div>
              <div className="text-sm font-medium text-white">Email</div>
              <div className="text-xs text-gray-400">hello@topify.ai</div>
            </div>
          </a>
          <a
            href="https://topify.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <MessageSquare className="h-5 w-5 text-cyan-400" />
            <div>
              <div className="text-sm font-medium text-white">Website</div>
              <div className="text-xs text-gray-400">topify.ai</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
