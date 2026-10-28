"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ArrowRight, ChevronDown, CircleDollarSign, ExternalLink, LogOut } from "lucide-react";

interface HeaderProps {
  announcementText?: string;
  announcementUrl?: string;
}

export function Header({
  announcementText = "Demo Demo",
  announcementUrl = "#",
}: HeaderProps) {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<"primary" | "secondary" | null>(null);
  const dropdownsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!dropdownsRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const closeOnScroll = () => setOpenDropdown(null);

    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("scroll", closeOnScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, []);

  return (
    <header className="w-full relative z-30 select-none">
      {/* Top Announcement Strip */}
      {announcementVisible && (
        <div className="w-full bg-[#FF4600] text-white h-7 sm:h-8 flex items-center justify-between px-3 sm:px-6 text-[11px] sm:text-xs font-medium transition-all">
          <button
            type="button"
            onClick={() => setAnnouncementVisible(false)}
            className="flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity"
            aria-label="Close announcement"
          >
            <X className="w-3 h-3 stroke-[2.5]" />
          </button>

          <a
            href={announcementUrl}
            className="inline-flex items-center gap-1.5 text-white hover:underline focus:outline-none"
          >
            <span>{announcementText}</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </a>

          {/* Invisible spacer to keep center text perfectly centered */}
          <div className="w-5" aria-hidden="true" />
        </div>
      )}

      {/* Main Header Bar */}
      <div className="mx-auto flex min-h-16 w-full max-w-[1240px] flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:min-h-20 sm:px-6 md:h-20 md:flex-nowrap md:py-0 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5">
            {/* Tri-blade geometric logo converted from PNG */}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top-Left Arm */}
              <path d="M9.2 4.2c0 0 .2 4.3-.4 6.6-.6 1.7-2.3 2.7-5.3 2.7v2c3.7 0 6.3-1.3 7.5-3.3.8-1.4.8-4.7.8-8H9.2z" />
              {/* Top-Right Arm */}
              <path d="M14.8 4.2c0 0-.2 4.3.4 6.6.6 1.7 2.3 2.7 5.3 2.7v2c-3.7 0-6.3-1.3-7.5-3.3-.8-1.4-.8-4.7-.8-8h2.6z" />
              {/* Bottom Arm */}
              <path d="M6.8 19.5c1.8-3.3 3.7-4.7 5.2-4.7s3.4 1.4 5.2 4.7l-1.6 1.3c-1.4-2.6-2.6-3.6-3.6-3.6s-2.2 1-3.6 3.6L6.8 19.5z" />
            </svg>
          </div>
          <span className="text-white text-base sm:text-lg font-bold tracking-tight">
            Demo
          </span>
        </div>

        
        <nav
          aria-label="Primary Navigation"
          className="relative order-first flex w-full items-center justify-center bg-[#23120C] px-2 py-1.5 sm:px-6 md:order-none md:w-auto"
        >
          
          <span
            aria-hidden="true"
            className="absolute -top-[2px] -left-[2px] w-[6px] h-[7px] border-t-[1.5px] border-l-[1.5px] border-[#FF4509] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute -top-[2px] -right-[2px] w-[6px] h-[7px] border-t-[1.5px] border-r-[1.5px] border-[#FF4509] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-[2px] -left-[2px] w-[6px] h-[7px] border-b-[1.5px] border-l-[1.5px] border-[#FF4509] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-[2px] -right-[2px] w-[6px] h-[7px] border-b-[1.5px] border-r-[1.5px] border-[#FF4509] pointer-events-none"
          />

          <ul className="flex items-center space-x-1 text-xs">
            {["Demo", "Demo", "Demo", "Demo"].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="inline-block px-2 py-0.5 text-[10px] font-normal text-[#bfaea7] transition-colors duration-150 hover:text-white sm:px-4 sm:text-xs"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={dropdownsRef} className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((current) =>
                  current === "primary" ? null : "primary",
                )
              }
              aria-expanded={openDropdown === "primary"}
              aria-haspopup="menu"
              className="flex items-center gap-1.5 border border-[#FF4509] bg-[#160906] px-2 py-1.5 text-[10px] font-semibold text-[#d6c7c2] transition-colors hover:border-[#6a3520] hover:text-white sm:gap-2 sm:px-5 sm:py-2 sm:text-xs"
            >
              <span>Lorem ipsum</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  openDropdown === "primary" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "primary" && (
              <div
                role="menu"
                className="absolute top-[calc(100%+6px)] right-0 z-50 w-[178px] border border-[#7a210d] bg-[#090303] shadow-[0_12px_30px_rgba(0,0,0,0.65)]"
              >
                <div className="border-b border-[#321008] px-3 py-2">
                  <div className="text-[8px] font-medium tracking-wider text-[#9a8881] uppercase">
                    Lorem ipsum
                  </div>
                  <button type="button" role="menuitem" className="mt-1 text-[10px] text-[#FF4600]">
                    Demo
                  </button>
                </div>
                {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    role="menuitem"
                    className={`block w-full px-3 py-2.5 text-left text-[10px] transition-colors hover:bg-[#160806] hover:text-[#FF4600] ${
                      index === 2 ? "text-[#FF4600]" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((current) =>
                  current === "secondary" ? null : "secondary",
                )
              }
              aria-expanded={openDropdown === "secondary"}
              aria-haspopup="menu"
              className="flex items-center gap-1.5 bg-[#FF4509] px-2 py-1.5 text-[10px] font-semibold text-white shadow-sm transition-colors hover:bg-[#ff5511] sm:gap-2 sm:px-5 sm:py-2 sm:text-xs"
            >
              <span>[XX]</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  openDropdown === "secondary" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "secondary" && (
              <div
                role="menu"
                className="absolute top-[calc(100%+6px)] right-0 z-50 w-[178px] border border-[#7a210d] bg-[#090303] shadow-[0_12px_30px_rgba(0,0,0,0.65)]"
              >
                <div className="flex items-center gap-1.5 border-b border-[#321008] px-3 py-2 text-[8px] font-medium tracking-wider text-white uppercase">
                  <span className="h-1.5 w-1.5 bg-[#FF4600]" />
                  Demo
                </div>
                <button type="button" role="menuitem" className="flex w-full items-center justify-between border-b border-[#321008] px-3 py-2.5 text-[10px] text-white hover:bg-[#160806]">
                  <span>[XX]</span>
                  <CircleDollarSign className="h-3 w-3" />
                </button>
                <button type="button" role="menuitem" className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-[10px] text-white hover:bg-[#160806]">
                  <ExternalLink className="h-3 w-3" />
                  Lorem ipsum
                </button>
                <button type="button" role="menuitem" className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-[10px] text-[#FF4600] hover:bg-[#160806]">
                  <LogOut className="h-3 w-3" />
                  Lorem ipsum
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
