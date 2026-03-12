import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetYourClaw.ai — AI Bots Directory",
  description:
    "Browse and try AI bots built by Topify.ai. Scan a QR code or tap a link to start using them on Telegram.",
  keywords: ["AI bots", "Telegram bots", "GEO", "automation", "Topify"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} font-mono antialiased`}>{children}</body>
    </html>
  );
}
