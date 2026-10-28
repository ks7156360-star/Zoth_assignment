"use client";

import { useQuery } from "@tanstack/react-query";
import type { SaleApiResponse } from "@/types/sale";

async function fetchSaleData(): Promise<SaleApiResponse> {
  const res = await fetch("/api/sale");
  if (!res.ok) {
    throw new Error(`Failed to fetch sale data: ${res.statusText}`);
  }
  return res.json();
}

export function useSaleData() {
  return useQuery({
    queryKey: ["sale-data"],
    queryFn: fetchSaleData,
  });
}

