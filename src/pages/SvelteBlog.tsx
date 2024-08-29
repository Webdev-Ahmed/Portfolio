import Card from "../components/Card";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";

import { motion } from "framer-motion";
import { FramerTransition } from "../lib/utils";

const SvelteBlog = () => {
  return (
    <>
      <PageSection className="!max-w-full relative h-fit">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={FramerTransition}
          className="w-full h-screen absolute -z-[10] opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse at top, #ffc078 15%, transparent 80%)`,
          }}
        ></motion.div>

        <div className="max-990:gap-x-6 pt-32 h-auto max-768:gap-x-4 !max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] max-990:px-12 max-768:px-6 max-480:px-4 mx-auto relative z-[99]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={FramerTransition}
            className="bg-gradient-to-b max-768:text-6xl max-480:text-5xl tracking-tighter from-orange-50 from-50% to-80% [text-shadow:_0_0_15px_rgb(255_255_255_/_0.3)] to-[#e5c6a3] bg-clip-text text-transparent font-semibold text-7xl text-center"
          >
            Svelte Markdown Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...FramerTransition, delay: 0.15 }}
            className="text-xl max-768:text-lg text-white/50 text-center mt-6"
          >
            Aptech's Project, December 2023
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...FramerTransition, delay: 0.3 }}
            className="flex flex-col p-2 pt-4 gap-y-2 mt-6 h-auto bg-neutral-800/20 rounded-2xl border-neutral-100/10 border-[1px]"
          >
            <h1 className="text-center text-4xl font-bold my-2 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent tracking-tight">
              Screen Shots
            </h1>
            <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Svelte-Blog-2.png"
                alt="Svelte Blog"
                loading="lazy"
                className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Svelte-Blog.png"
                alt="Svelte Blog"
                loading="lazy"
                className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Svelte-Blog-3.png"
                alt="Svelte Blog"
                loading="lazy"
                className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Svelte-Blog-4.png"
                alt="Svelte Blog"
                loading="lazy"
                className="border-white/50 rounded-xl aspect-[16/10] object-center object-cover"
              />
            </div>
          </motion.div>

          <SectionTitle className="my-10">Info</SectionTitle>
          <div className="w-full flex max-768:flex-col gap-x-10 max-768:gap-y-6 max-768:gap-x-0">
            <div className="w-[50%] max-768:w-full">
              <h1 className="text-sm font-bold">My Role</h1>
              <p className="mt-6 text-neutral-400">
                It was a solo project so I was doing all the work.
              </p>

              <h1 className="text-sm font-bold py-6">Timeline & Status</h1>
              <p className="text-neutral-400">
                3 Months,{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  Launched in September 2023
                </span>
              </p>
            </div>
            <div className="w-[50%] max-768:w-full">
              <h1 className="text-sm font-bold">Overview</h1>
              <p className="mt-6 text-neutral-400">
                I was chellenging my skills, seeing how much I have evovled, you
                should be caught up with the technologies I used by the title,
                but if you did'nt let me tell you, I used{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  Svelte
                </span>
                ,{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  Tailwind
                </span>
                ,{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  React Query
                </span>{" "}
                and{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  Axios
                </span>{" "}
                for this project.
              </p>
              <p className="mt-6 text-neutral-400">
                This is basically a blog website where you can post your code or
                your opinion on someone else's code!
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-20 max-768:my-14"></div>

          <div>
            <h1 className="text-5xl max-768:text-4xl max-480:text-3xl font-semibold tracking-tight text-neutral-600 mb-20 max-768:mb-14">
              Next Project
            </h1>
            <Card
              className="w-full"
              title="Brainwave"
              subject="Personal Project, '23"
              description="A beautiful and intuitive AI platform."
              href="/brainwave"
              color="#4a1d7b"
              imageAlt="Brainwave-alt"
              image="/images/Brainwave.png"
            />
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  );
};

export default SvelteBlog;
