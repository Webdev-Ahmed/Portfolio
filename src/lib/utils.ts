import { ClassValue } from "clsx";
import { useMediaQuery } from "../hook/useMediaQuery";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const isMobile = ({
  width,
}: {
  width: "480px" | "768px" | "990px" | "1440px";
}) => {
  return useMediaQuery(`(min-width: ${width})`);
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const FramerTransition = { duration: 0.5, ease: "backInOut" };
