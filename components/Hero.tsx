"use client";

import React from "react";
import { ProgressBar } from "./ProgressBar";
import { Countdown, AlarmClockIcon } from "./Countdown";
import type { SaleApiResponse } from "@/types/sale";

interface HeroProps {
  data?: SaleApiResponse["hero"];
  isLoading?: boolean;
}

export function Hero({ data, isLoading }: HeroProps) {
  const isPending = isLoading && !data;
  const heroData = data || {
    badge: "Lorem ipsum",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    mainMetric: {
      leftLabel: "Demo",
      rightLabel: "Lorem ipsum",
      leftValue: "[XX]",
      rightValue: "[XX]",
      progressPercent: 42,
      bottomLeft: "[XX]",
      bottomRight: "[XX]",
    },
    dualMetrics: [
      {
        leftLabel: "[XX]",
        rightLabel: "[XX]",
        progressPercent: 68,
        bottomLeft: "[XX]",
        bottomRight: "[XX]",
      },
      {
        leftLabel: "[XX]",
        rightLabel: "[XX]",
        progressPercent: 55,
        bottomLeft: "[XX]",
        bottomRight: "[XX]",
      },
    ],
    largeMetric: {
      label: "Demo",
      value: "[XX]",
    },
    countdown: {
      targetTimestamp: "2026-11-15T00:00:00.000Z",
      title: "Lorem ipsum dolor",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
    },
    actionPanel: {
      badge: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      primaryButtonText: "Lorem ipsum",
      secondaryButtonText: "Lorem ipsum",
      footnote: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
    },
  };

  return (
    <section className="relative w-full pt-4 pb-14 sm:pt-6 sm:pb-20 select-none">
      <div
        className={`relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-300 ${
          isPending ? "opacity-85" : "opacity-100"
        }`}
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#541400] -translate-x-1/2 pointer-events-none"
          />

          <div className="flex flex-col space-y-4">
            <div>
              <div className="relative inline-flex items-center px-6 py-1 bg-[#23120C] border-[0.5px] border-[#FF4509] text-[#FF4600] text-xs font-semibold tracking-wide">
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
                {heroData.badge}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium text-[#FFFFFF] tracking-tight leading-[1.08] pt-1">
              {heroData.title}
            </h1>

            <p className="text-sm text-[#FFFFFF99]/60 max-w-lg leading-relaxed">
              {heroData.description}
            </p>

            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-normal text-[#FFFFFF]">
                <span>{heroData.mainMetric.leftLabel}</span>
                <span>{heroData.mainMetric.rightLabel}</span>
              </div>

              <div className="flex items-baseline justify-between mt-1 mb-2.5">
                <span className="text-2xl sm:text-3xl font-medium text-white tracking-wide font-mono">
                  {heroData.mainMetric.leftValue}
                </span>
                <span className="text-2xl sm:text-3xl font-medium text-[#FF4509] tracking-wide font-mono">
                  {heroData.mainMetric.rightValue}
                </span>
              </div>

              <ProgressBar
                value={heroData.mainMetric.progressPercent}
                className="h-[3px] bg-[#220902] rounded-none"
                indicatorClassName="bg-[#FF4509]"
              />

              <div className="flex items-center justify-between text-[11px] text-[#8a7972] font-mono mt-1.5">
                <span>{heroData.mainMetric.bottomLeft}</span>
                <span>{heroData.mainMetric.bottomRight}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroData.dualMetrics.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#000000CC] border border-[#330E02] px-3.5 py-3 sm:px-4 sm:py-3.5 flex flex-col justify-between rounded-none shadow-md"
                >
                  <div className="flex items-center justify-between font-mono text-xs sm:text-[13px] tracking-tight">
                    <span className="text-[#FFFFFF]">{card.leftLabel}</span>
                    <span className="text-[#FF4509]">{card.rightLabel}</span>
                  </div>

                  <div className="w-full h-[1px] bg-[#330E02] my-2 sm:my-2.5" />

                  <ProgressBar
                    value={card.progressPercent}
                    className="h-[3px] bg-[#220902] rounded-none"
                    indicatorClassName="bg-[#FF4509]"
                  />

                  <div className="flex items-center justify-between font-mono text-xs sm:text-[13px] text-[#FFFFFF] tracking-tight mt-2 sm:mt-2.5">
                    <span>{card.bottomLeft}</span>
                    <span>{card.bottomRight}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#000000CC] border border-[#330E02] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="text-xs text-[#84746d] block font-medium">
                {heroData.largeMetric.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-wider font-mono block mt-0.5">
                {heroData.largeMetric.value}
              </span>
            </div>

            <div className="bg-[#000000CC] border border-[#330E02] px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <AlarmClockIcon className="w-4 h-4 text-white/90 mt-0.5 shrink-0 stroke-[2.2]" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {heroData.countdown.title}
                  </h4>
                  <p className="text-[11px] text-[#786660] leading-tight mt-0.5">
                    {heroData.countdown.subtitle}
                  </p>
                </div>
              </div>

              <div className="sm:self-center">
                <Countdown
                  targetTimestamp={heroData.countdown.targetTimestamp}
                  showLiveNumbers={true}
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-40 -top-24 -bottom-64 z-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 58%, rgba(255, 69, 9, 0.3) 0%, rgba(255, 69, 9, 0.15) 38%, rgba(255, 69, 9, 0.06) 62%, transparent 82%)",
              }}
            />
            <div className="relative z-10 border border-[#531A1A] bg-[#090303]/95 p-3 shadow-[0_0_23.45px_#22030354] backdrop-blur-sm">
              <h3 className="mb-3 text-[11px] leading-4 font-medium text-white uppercase">
                {heroData.actionPanel.badge}
              </h3>

              <div className="space-y-3">
                {heroData.dualMetrics.map((card, index) => (
                  <div
                    key={index}
                    className="border border-[#321008] bg-[#0b0504] px-3 pt-3 pb-3"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] leading-4">
                      <span className="text-white">{card.leftLabel}</span>
                      <span className="text-[#FF4600]">{card.rightLabel}</span>
                    </div>

                    <div className="mt-2 h-px w-full bg-[#3a130a]" />

                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] leading-3 text-[#a4948e] uppercase">
                          Demo
                        </div>
                        <div className="mt-1 flex items-baseline">
                          <span className="font-mono text-[25px] leading-none text-white">
                            {card.bottomLeft}
                          </span>
                          <span className="ml-0.5 text-[9px] text-white">Demo</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] leading-3 text-[#a4948e] uppercase">
                          Demo
                        </div>
                        <div className="mt-1 flex items-baseline">
                          <span className="font-mono text-[25px] leading-none text-white">
                            {card.bottomRight}
                          </span>
                          <span className="ml-0.5 text-[9px] text-white">Demo</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-4">
                      <span className="pointer-events-none absolute top-0 -left-2 h-px w-2 border-t border-[#FF4600]" />
                      <span className="pointer-events-none absolute -top-2 left-0 h-2 w-px border-l border-[#FF4600]" />
                      <span className="pointer-events-none absolute top-0 -right-2 h-px w-2 border-t border-[#FF4600]" />
                      <span className="pointer-events-none absolute -top-2 right-0 h-2 w-px border-r border-[#FF4600]" />
                      <span className="pointer-events-none absolute bottom-0 -left-2 h-px w-2 border-b border-[#FF4600]" />
                      <span className="pointer-events-none absolute -bottom-2 left-0 h-2 w-px border-l border-[#FF4600]" />
                      <span className="pointer-events-none absolute right-0 -bottom-2 h-2 w-px border-r border-[#FF4600]" />
                      <span className="pointer-events-none absolute -right-2 bottom-0 h-px w-2 border-b border-[#FF4600]" />
                      <button
                        type="button"
                        className="h-9 w-full bg-[#FF4509] px-4 text-center text-[11px] font-medium text-white transition-colors hover:bg-[#ff5511]"
                      >
                        {heroData.actionPanel.primaryButtonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
