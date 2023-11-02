import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  //function called CN that Shadcn uses to conditionally add Tailwind classes to components
  return twMerge(clsx(inputs));
}
