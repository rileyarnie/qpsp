import type { UserScores } from "@/types/user";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAverageReadiness(scores: UserScores) {
  const values = Object.values(scores);
  const average = Math.round(
    values.reduce((sum, v) => sum + v, 0) / values.length,
  );
  return average;
}
