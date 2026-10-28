import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";

const roobert = localFont({
  src: [
    {
      path: "../public/fonts/Roobert-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roobert",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demo | Token Sale & Ecosystem",
  description: "Next-generation decentralized finance and ecosystem platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roobert.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-black text-white font-sans antialiased selection:bg-[#FF4600] selection:text-white">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
