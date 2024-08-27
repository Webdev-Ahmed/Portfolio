import { ReactNode } from "react";

const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div className="size-2.5 shadow-center shadow-white/50 rounded-full bg-neutral-100"></div>
      <p className="text-neutral-100/45 text-sm">{children}</p>
    </div>
  );
};

export default SectionTitle;
