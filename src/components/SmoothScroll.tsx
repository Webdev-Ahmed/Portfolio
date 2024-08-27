import { ReactLenis } from "lenis/react";
import { PropsWithChildren } from "react";

const SmoothScroll = ({ children }: PropsWithChildren) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
