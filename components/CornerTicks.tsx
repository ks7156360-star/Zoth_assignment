import React from "react";
import { cn } from "@/lib/utils";

interface CornerTicksProps {
  className?: string;
  size?: number;
  color?: string;
  offset?: string;
  strokeWidth?: string;
}

export function CornerTicks({
  className,
  size = 6,
  color = "border-[#FF4600]",
  offset = "-inset-1.5",
  strokeWidth = "border-[1.5px]",
}: CornerTicksProps) {
  const cornerStyle = { width: `${size}px`, height: `${size}px` };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", offset, className)}
    >
      <span
        style={cornerStyle}
        className={cn("absolute top-0 left-0 border-t border-l", strokeWidth, color)}
      />
      <span
        style={cornerStyle}
        className={cn("absolute top-0 right-0 border-t border-r", strokeWidth, color)}
      />
      <span
        style={cornerStyle}
        className={cn("absolute bottom-0 left-0 border-b border-l", strokeWidth, color)}
      />
      <span
        style={cornerStyle}
        className={cn("absolute bottom-0 right-0 border-b border-r", strokeWidth, color)}
      />
    </div>
  );
}

