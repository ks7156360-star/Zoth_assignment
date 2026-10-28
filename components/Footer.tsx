"use client";

import { useState, type FormEvent } from "react";
import type { SaleApiResponse } from "@/types/sale";

interface FooterProps {
  data?: SaleApiResponse["footer"];
}

const defaultFooter: SaleApiResponse["footer"] = {
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
  newsletterPlaceholder: "[XX]",
  newsletterButton: "DEMO",
  disclaimer:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
  disclaimerCode: "[XX]",
};

const socialLinks = [
  {
    href: "#twitter",
    label: "X (Twitter)",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "#youtube",
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    href: "#discord",
    label: "Community",
    path: "M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.164-.386-.397-.875-.617-1.25A19.74 19.74 0 0 0 3.677 4.37C.533 9.046-.32 13.58.099 18.057a19.9 19.9 0 0 0 5.993 3.03c.462-.63.874-1.295 1.226-1.994a13.1 13.1 0 0 1-1.872-.892l.372-.292c3.929 1.793 8.18 1.793 12.061 0l.373.292c-.591.35-1.216.647-1.873.894.36.698.772 1.362 1.225 1.993a19.84 19.84 0 0 0 6.002-3.03c.5-5.177-.838-9.674-3.549-13.66M8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419s.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418",
  },
  {
    href: "#linkedin",
    label: "LinkedIn",
    path: "M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5M8 19H5V8h3zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764M20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476z",
  },
  {
    href: "#medium",
    label: "Medium",
    path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12m7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12",
  },
];

export function Footer({ data }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footer = data ?? defaultFooter;

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="w-full overflow-hidden bg-black pt-10 select-none">
      <div className="mx-auto w-full max-w-[1698px] px-6 sm:px-10 lg:px-[clamp(64px,10.25vw,174px)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <p className="max-w-[190px] text-[10px] leading-[11px] text-[#74645e]">
              {footer.description}
            </p>

            <div className="mt-[10px] flex items-center gap-[10px] text-[#756861]">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-colors hover:text-white"
                >
                  <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <form
              onSubmit={handleSubscribe}
              className="mt-[20px] flex h-[38px] w-full max-w-[270px]"
            >
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footer.newsletterPlaceholder}
                aria-label="Email address"
                className="min-w-0 flex-1 border border-[#25120c] bg-[#100806] px-[14px] font-mono text-[8px] text-white placeholder:text-[#5c4941] focus:border-[#FF4600] focus:outline-none"
              />
              <button
                type="submit"
                className="w-[96px] shrink-0 bg-[#FF4600] text-[8px] font-bold tracking-[1.2px] text-white transition-colors hover:bg-[#ff5511]"
              >
                {subscribed ? "SENT" : footer.newsletterButton}
              </button>
            </form>
          </div>

          <div className="flex justify-start gap-12 sm:gap-20 md:justify-end lg:gap-[190px]">
            <div className="flex min-w-[90px] flex-col">
              <h4 className="mb-[21px] text-[12px] leading-none font-medium text-white">
                DEMO
              </h4>
              <a href="#demo-link1" className="text-[11px] text-[#756762] hover:text-white">
                Demo
              </a>
              <a href="#demo-link2" className="mt-[13px] text-[11px] text-[#756762] hover:text-white">
                Demo
              </a>
            </div>

            <div className="flex min-w-[120px] flex-col">
              <h4 className="mb-[21px] text-[12px] leading-none font-medium text-white">
                DEMO
              </h4>
              <a href="#lorem1" className="text-[11px] text-[#756762] hover:text-white">
                Lorem ipsum
              </a>
              <a href="#lorem2" className="mt-[13px] text-[11px] text-[#756762] hover:text-white">
                Lorem ipsum
              </a>
              <a href="#lorem3" className="mt-[13px] text-[11px] text-[#756762] hover:text-white">
                Lorem ipsum
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[82px] flex flex-col items-start justify-between gap-4 text-[9px] leading-[14px] text-[#574842] sm:flex-row sm:items-end sm:gap-8">
          <p className="max-w-[600px]">{footer.disclaimer}</p>
          <span className="shrink-0 font-mono">{footer.disclaimerCode}</span>
        </div>
      </div>

      <div
        className="group mt-[240px] flex w-full items-baseline justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex items-baseline text-[26vw] leading-none font-bold tracking-tighter sm:text-[25vw] lg:text-[24vw]">
          <span className="inline-block text-[#200e08] transition-colors duration-300 group-hover:text-[#FF4600]">D</span>
          <span className="inline-block text-[#200e08] transition-colors duration-300 group-hover:text-[#FF4600]">EMO</span>
        </div>
      </div>
    </footer>
  );
}
