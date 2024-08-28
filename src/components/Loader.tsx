import { AnimatePresence, motion } from "framer-motion";
const Loader = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: "100%" }}
        exit={{ opacity: 0 }}
        className="w-screen h-screen fixed bg-neutral-900 flex items-center justify-center z-[60]"
      >
        <div className="flex flex-col items-center gap-y-5">
          <div className="size-8 border-[5px] border-white border-b-neutral-900 animate-spin rounded-full"></div>
          <h1 className="text-xl">Just a moment</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
