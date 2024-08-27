import { GoArrowUpRight } from "react-icons/go";
import { LinkProps } from "../types/types";

const Link = ({
  href,
  className,
  children,
  target,
  icon = true,
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className={`flex py-2 px-3 rounded-full bg-transparent hover:bg-white/10 duration-300 items-center gap-x-1 ${className}`}
    >
      <span className="font-semibold">{children}</span>
      {icon && <GoArrowUpRight />}
    </a>
  );
};

export default Link;
