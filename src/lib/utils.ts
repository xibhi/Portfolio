import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const cleanText = content.replace(/<[^>]*>/g, "").replace(/#+/g, "");
  const wordCount = cleanText.split(/\s+/).filter((w) => w.length > 0).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

