import { ReactNode } from "react";

const PageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <section className={`max-w-[1280px] relative mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default PageSection;
