"use client";

import Image from "next/image";
import { useSaleData } from "@/hooks/useSaleData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { data, isLoading, error, refetch } = useSaleData();

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-6 text-white">
        <h2 className="text-xl font-bold text-[#FF4600] mb-2">Error loading data</h2>
        <p className="text-xs text-[#8a7a73] mb-4">
          {error instanceof Error ? error.message : "An unexpected error occurred."}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-[#FF4600] text-white text-xs font-semibold rounded hover:bg-[#ff5511] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF4600] selection:text-white flex flex-col">
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute right-0 top-0 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] opacity-75"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 70% 35%, rgba(255, 70, 0, 0.24) 0%, rgba(180, 35, 0, 0.08) 45%, transparent 75%)",
            }}
          />

          <Image
            src="/hero-grid.png"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-90 select-none mix-blend-screen"
          />
        </div>

        <Header
          announcementText={data?.announcement.text}
          announcementUrl={data?.announcement.linkUrl}
        />

        <Hero data={data?.hero} isLoading={isLoading} />
      </div>

      <PartnerCarousel partners={data?.partners} />

      <Content data={data?.content} />

      <Footer data={data?.footer} />
    </main>
  );
}
