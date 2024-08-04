import { motion } from "framer-motion";

const Link = ({
  children,
  href,
  className,
}: {
  children: string;
  href?: string;
  className?: string;
}) => {
  const DURATION = 0.45;
  const STAGGER = 0.025;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden cursor-pointer ${className}`}
      href={href}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "backInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 text-white">
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "backInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>{" "}
    </motion.a>
  );
};

export default Link;
