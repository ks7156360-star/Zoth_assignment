"use client";

import Image from "next/image";
import type { PartnerLogo } from "@/types/sale";

interface PartnerCarouselProps {
  partners?: PartnerLogo[];
}

const logos = [
  { src: "/partners/borderless.png", alt: "Borderless", width: 97, height: 26 },
  { src: "/partners/taisu.png", alt: "Taisu", width: 80, height: 14 },
  {
    src: "/partners/blockchain.png",
    alt: "Blockchain Founders Fund",
    width: 122,
    height: 32,
  },
  { src: "/partners/chainlink.png", alt: "Chainlink", width: 86, height: 27 },
  { src: "/partners/coinbase.png", alt: "Coinbase", width: 82, height: 15 },
];

export function PartnerCarousel({ partners }: PartnerCarouselProps) {
  return (
    <section
      aria-label={partners?.length ? "Featured partners" : "Partner logos"}
      className="mt-8 h-[88px] w-full overflow-hidden border-y border-[#531A1A] bg-[#070202] shadow-[0_0_23.45px_#22030354] select-none"
    >
      <div className="mx-auto flex h-full w-full max-w-[1390px]">
        <div className="relative z-10 flex h-full w-[158px] shrink-0 items-center border-r border-[#531A1A] bg-[#070202] px-9 sm:w-[190px] sm:px-11">
          <span className="absolute -top-[4px] -right-[4px] h-[8px] w-[8px] bg-[#8a4545]" />
          <span className="absolute -right-[4px] -bottom-[4px] h-[8px] w-[8px] bg-[#8a4545]" />
          <div className="text-[14px] leading-[18px] font-medium text-white">
            <div>DEMO</div>
            <div>DEMO</div>
          </div>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden pl-16 sm:pl-[88px]">
          <div className="partner-marquee flex h-full w-max items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex h-full shrink-0 items-center gap-16 pr-16 sm:gap-[88px] sm:pr-[88px]"
              >
                {logos.map((logo) => (
                  <Image
                    key={`${group}-${logo.alt}`}
                    src={logo.src}
                    alt={group === 0 ? logo.alt : ""}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto shrink-0 object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-marquee {
          animation: partner-scroll 30s linear infinite;
          will-change: transform;
        }

        @keyframes partner-scroll {
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
