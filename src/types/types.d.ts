import { ReactNode } from "react";

declare interface LinkProps {
  href: string;
  className?: string;
  icon?: boolean;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}
