import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  trackClassName?: string;
  indicatorClassName?: string;
}

export function ProgressBar({
  value,
  className,
  trackClassName,
  indicatorClassName,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative w-full h-1.5 bg-[#25130d] overflow-hidden",
        trackClassName,
        className
      )}
    >
      <div
        className={cn(
          "h-full bg-[#FF4600] transition-all duration-300 ease-out",
          indicatorClassName
        )}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}

