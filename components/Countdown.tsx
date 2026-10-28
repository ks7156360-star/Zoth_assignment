"use client";

import React, { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetTimestamp?: string;
  className?: string;
  showLiveNumbers?: boolean;
}

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const DEFAULT_TIME: TimeRemaining = {
  days: "[XX]",
  hours: "[XX]",
  minutes: "[XX]",
  seconds: "[XX]",
};

function calculateTimeRemaining(targetIso?: string): TimeRemaining {
  if (!targetIso) {
    return DEFAULT_TIME;
  }

  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return {
    days: String(d).padStart(2, "0"),
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
  };
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getClientSnapshot() {
  return Math.floor(Date.now() / 1000);
}

function getServerSnapshot() {
  return 0;
}

export function AlarmClockIcon({
  className = "w-4 h-4",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

export function Countdown({
  targetTimestamp,
  className,
  showLiveNumbers = true,
}: CountdownProps) {
  const currentTick = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const isClient = currentTick > 0;
  const timeLeft = isClient
    ? calculateTimeRemaining(targetTimestamp)
    : DEFAULT_TIME;

  const items = [
    { value: isClient && showLiveNumbers ? timeLeft.days : "[XX]", label: "DEMO" },
    { value: isClient && showLiveNumbers ? timeLeft.hours : "[XX]", label: "DEMO" },
    { value: isClient && showLiveNumbers ? timeLeft.minutes : "[XX]", label: "DEMO" },
    { value: isClient && showLiveNumbers ? timeLeft.seconds : "[XX]", label: "DEMO" },
  ];

  return (
    <div className={cn("inline-flex items-center gap-1 sm:gap-1.5", className)}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center justify-center bg-[#0d0705] border border-[#2f1911] px-2 py-1 rounded min-w-[34px] sm:min-w-[38px]">
            <span className="font-mono text-[11px] sm:text-xs font-semibold text-white tracking-wider">
              {item.value}
            </span>
            <span className="text-[8px] sm:text-[9px] font-medium text-[#7c6962] tracking-widest mt-0.5">
              {item.label}
            </span>
          </div>
          {idx < items.length - 1 && (
            <span className="text-[#8e4828] font-bold text-xs -mt-2">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
