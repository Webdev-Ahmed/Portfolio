import { motion } from "framer-motion";
import { ReactNode } from "react";

const Button = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        borderColor: "#fff",
        backgroundColor: "transparent",
        color: "rgb(23 23 23)",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`px-4 py-2 relative ${className} duration-500 bg-neutral-900 overflow-hidden border-white/20 border-[1.5px] rounded-lg group`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute w-[200%] h-[150%] left-1/2 -translate-x-1/2 duration-500 rounded-[50%] transition-all top-full group-hover:-top-[20%] bg-white"></span>
    </motion.button>
  );
};

export default Button;
