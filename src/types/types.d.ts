import { ReactNode } from "react";

declare interface LinkProps {
  href: string;
  className?: string;
  icon?: boolean;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

declare interface CardProps {
  className?: string;
  color: string;
  href: string;
  image: string;
  title: string;
  subject: string;
  description: string;
  imageAlt: string;
}
