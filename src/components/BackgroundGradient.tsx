import { motion } from "framer-motion";

const BackgroundGradient = ({ className }: { className: string }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: "0.5" }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute w-[100%] h-[100vh] pointer-events-none flex justify-center -z-[99]"
      >
        {/* <div className="absolute w-screen h-screen pointer-events-none backdrop-blur-[100px]"></div> */}
        <div
          className={`${className} absolute pointer-events-none -z-[99] w-[80vw] h-[65vh] rounded-t-none rounded-full filter blur-[100px]`}
        ></div>
      </motion.div>
    </>
  );
};

export default BackgroundGradient;
