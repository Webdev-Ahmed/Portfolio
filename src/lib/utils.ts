import { useMediaQuery } from "../hook/useMediaQuery";

export const isMobile = ({
  width,
}: {
  width: "480px" | "768px" | "990px" | "1440px";
}) => {
  return useMediaQuery(`(min-width: ${width})`);
};
