import Card from "../components/Card";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
import { motion } from "framer-motion";
import { FramerTransition } from "../lib/utils";

const Brainwave = () => {
  return (
    <>
      <PageSection className="!max-w-full relative h-fit">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={FramerTransition}
          className="w-full h-screen absolute -z-[10] opacity-70"
          style={{
            backgroundImage: `radial-gradient(ellipse at top, #4a1d7b 15%, transparent 80%)`,
          }}
        ></motion.div>

        <div className="max-990:gap-x-6 pt-32 h-auto max-768:gap-x-4 !max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] max-990:px-12 max-768:px-6 max-480:px-4 mx-auto relative z-[99]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={FramerTransition}
            className="bg-gradient-to-b max-768:text-6xl max-480:text-5xl tracking-tighter from-purple-100 from-50% to-80% [text-shadow:_0_0_15px_rgb(255_255_255_/_0.3)] to-purple-300 bg-clip-text text-transparent font-semibold text-7xl text-center"
          >
            Brainwave
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...FramerTransition, delay: 0.15 }}
            className="text-xl max-768:text-lg text-white/50 text-center mt-6"
          >
            Personal's Project, December 2023
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...FramerTransition, delay: 0.3 }}
            className="flex overflow-clip flex-col mt-6 h-auto bg-neutral-800/20 rounded-2xl border-neutral-100/10 border-[1px]"
          >
            <h1 className="text-center text-4xl font-bold my-2 mt-5 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent tracking-tight">
              Screen Shots
            </h1>
            <div className="p-2 flex gap-y-2 flex-col">
              <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
                <img
                  src="/images/Brainwave.png"
                  alt="Brainwave"
                  loading="lazy"
                  className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
                <img
                  src="/images/Brainwave-2.png"
                  alt="Brainwave"
                  loading="lazy"
                  className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
                <img
                  src="/images/Brainwave-3.png"
                  alt="Brainwave"
                  loading="lazy"
                  className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
                <img
                  src="/images/Brainwave-4.png"
                  alt="Brainwave"
                  loading="lazy"
                  className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
                <img
                  src="/images/Brainwave-5.png"
                  alt="Brainwave"
                  loading="lazy"
                  className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
                />
              </div>
            </div>
          </motion.div>
          <div className="w-full h-[1px] bg-white/10 my-20 max-768:my-14"></div>

          <div>
            <h1 className="text-5xl max-768:text-4xl max-480:text-3xl font-semibold tracking-tight text-neutral-600 mb-20 max-768:mb-14">
              First Project
            </h1>
            <Card
              className="w-full"
              title="Cambridge Hospital"
              subject="Aptech's Project, '23"
              description="Giving a beautifull yet seamless experiance."
              href="/cambridge-hospital"
              color="#637E76"
              imageAlt="Cambridge-alt"
              image="/images/Cambridge.png"
            />
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  );
};

export default Brainwave;
