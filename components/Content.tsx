"use client";

import Image from "next/image";
import type { SaleApiResponse } from "@/types/sale";

interface ContentProps {
  data?: SaleApiResponse["content"];
}

const defaultContent: SaleApiResponse["content"] = {
  leftHeading: "Lorem ipsum",
  leftDescription:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
  leftCardTitle: "Lorem ipsum dolor",
  leftCardRows: [
    { label: "Lorem ipsum", value: "Demo" },
    { label: "Lorem ipsum", value: "Demo" },
    { label: "Lorem ipsum", value: "Demo" },
  ],
  timeline: [
    {
      id: 1,
      status: "active",
      eyebrow: "Demo",
      title: "Lorem ipsum",
      subtitle: "[XX]",
      highlight: true,
    },
    { id: 2, status: "upcoming", title: "DEMO", subtitle: "Lorem ipsum" },
    { id: 3, status: "upcoming", title: "Demo", subtitle: "Lorem ipsum" },
    { id: 4, status: "upcoming", title: "DEMO", subtitle: "Lorem ipsum" },
  ],
  infoRows: [
    { id: 1, iconName: "shield", label: "Demo", value: "DEMO" },
    {
      id: 2,
      iconName: "globe",
      label: "Lorem ipsum",
      value: "DEMO",
      hasGlobeIcon: true,
    },
    { id: 3, iconName: "key", label: "Lorem ipsum", value: "[XX]" },
    {
      id: 4,
      iconName: "flower",
      label: "Demo",
      value: "[XX]",
      subRow: { label: "Demo", value: "Lorem ipsum" },
    },
    {
      id: 5,
      iconName: "file",
      label: "Lorem ipsum",
      value: "Demo",
      isLink: true,
    },
  ],
};

const iconSources = [
  "/content/icon-1.png",
  "/content/icon-2.png",
  "/content/icon-3.png",
  "/content/icon-4.png",
  "/content/icon-5.png",
];

export function Content({ data }: ContentProps) {
  const content = data ?? defaultContent;

  return (
    <section className="w-full bg-black py-16 select-none lg:min-h-[571px] lg:py-[82px]">
      <div className="mx-auto grid w-full max-w-[1698px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-[478px_minmax(0,1fr)] lg:gap-[120px] lg:px-[clamp(64px,9.1vw,155px)]">
        <div>
          <h2 className="text-[40px] leading-none font-normal tracking-[-1.6px] text-white sm:text-[48px]">
            {content.leftHeading}
          </h2>
          <p className="mt-5 max-w-[430px] text-[18px] leading-[1.35] font-normal text-[#898989] sm:text-[21px]">
            {content.leftDescription}
          </p>

          <div className="mt-[54px] min-h-[225px] border border-[#531A1A] bg-[#090303] px-[34px] py-[25px] shadow-[0_0_23.45px_#22030354]">
            <h3 className="text-[16px] leading-6 font-medium text-white">
              {content.leftCardTitle}
            </h3>
            <div className="mt-[22px] space-y-[26px]">
              {content.leftCardRows.map((row, index) => (
                <div
                  key={`${row.label}-${index}`}
                  className="flex items-center justify-between text-[14px] leading-6"
                >
                  <span className="text-white">{row.label}</span>
                  <a
                    href="#"
                    className="text-[#858080] underline decoration-[#4d4242] underline-offset-4 transition-colors hover:text-white"
                  >
                    {row.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="relative max-w-[610px]">
            <div className="absolute top-[8px] right-[calc(25%_-_9px)] left-[8px] h-px bg-[#2b211e] sm:right-[83px]" />
            <div className="relative flex justify-between">
              {content.timeline.map((step, index) => (
                <div key={step.id ?? index} className="flex w-1/4 min-w-0 flex-col sm:w-auto sm:min-w-[92px]">
                  <span
                    className={`h-[18px] w-[18px] rounded-full border-2 bg-black ${
                      step.status === "active"
                        ? "border-[#FF4600]"
                        : "border-[#403531]"
                    }`}
                  />
                  <div className="mt-[14px] min-h-[17px] text-[13px] leading-[17px] text-[#FF4600]">
                    {step.eyebrow}
                  </div>
                  <div className="mt-1 truncate text-[13px] leading-5 font-normal text-white sm:text-[17px]">
                    {step.title}
                  </div>
                  {step.subtitle && (
                    <div className="mt-1 truncate text-[11px] leading-4 text-[#938b88] sm:text-[13px]">
                      {step.subtitle}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[78px] w-full border-t border-[#302b29]">
            {content.infoRows.map((row, index) => (
              <div
                key={row.id ?? index}
                className={`w-full border-b border-[#302b29] text-[15px] text-white ${
                  row.subRow ? "py-[11px]" : "flex h-[38px] items-center justify-between"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-[13px]">
                    <Image
                      src={iconSources[index] ?? iconSources[0]}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 shrink-0"
                    />
                    <span>{row.label}</span>
                  </div>

                  {row.isLink ? (
                    <a
                      href="#"
                      className="underline decoration-[#777170] underline-offset-4 hover:text-white"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      {row.hasGlobeIcon && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-[9px] leading-none">
                          $ 
                        </span>
                      )}
                      <span>{row.value}</span>
                    </div>
                  )}
                </div>

                {row.subRow && (
                  <div className="mt-[8px] flex w-full items-center justify-between pl-[29px]">
                    <span>{row.subRow.label}</span>
                    <span>{row.subRow.value}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
