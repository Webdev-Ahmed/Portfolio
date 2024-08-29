import BackgroundGradient from "../components/BackgroundGradient";
import EducationCard from "../components/EducationCard";
import Footer from "../components/Footer";
import FullImageCard from "../components/FullImageCard";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";
import { Education } from "../constants";
import { FramerTransition, isMobile } from "../lib/utils";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <>
      <PageSection className="relative">
        {isMobile({ width: "768px" }) ? (
          <BackgroundGradient className="bg-white/[0.075]" />
        ) : (
          <BackgroundGradient className="bg-white/[0.25]" />
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={FramerTransition}
          className="pt-48 !max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] max-768:pt-36 max-990:px-12 max-768:px-6 max-480:px-4 h-full mx-auto relative z-10"
        >
          <SectionTitle className="font-semibold tracking-tight text-xs mb-5">
            ABOUT ME
          </SectionTitle>

          <div className="text-6xl text-pretty max-1440:text-5xl max-990:text-[clamp(32px,5vw,2.75rem)] max-768:text-[clamp(20px,8.5vw,4rem)] max-768:text-balance text-shadow tracking-tighter shadow-orange-300/50 text-[#f2f2f2]">
            <h1>
              I'm passionate about creating beautiful design that{" "}
              <span className="font-serif [text-shadow:_0_0_10px_rgb(255_255_255_/_25%),_0_-2px_5px_var(--tw-shadow-color),_0_2px_5px_rgb(0_0_255_/_25%)] after:content-['empower_people.'] after:font-serif after:absolute after:[text-shadow:_none] after:bg-gradient-to-b after:from-neutral-100 after:italic after:from-40% after:to-85% after:to-gray-400 after:bg-clip-text after:left-0 relative italic to-stone-400 text-transparent font-normal">
                empower people.
              </span>
            </h1>
          </div>
        </motion.div>

        <div className="mt-20 768:flex gap-x-16 max-990:gap-x-6 max-768:gap-x-4 !max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] max-990:px-12 max-768:px-6 max-480:px-4 mx-auto relative">
          {isMobile({ width: "768px" }) ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...FramerTransition, delay: 0.15 }}
                className="w-[50%] h-full"
              >
                <FullImageCard
                  image="/images/Ahmed-Raza.jpg"
                  imageAlt="Ahmed Raza"
                />
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>My background</h1>
                  <p className="text-base text-neutral-400">
                    I'm from Karachi, Pakistan, I'm currently in 10th standard
                    studying science. I was always obsessed with new
                    technologies.
                  </p>
                  <p className="text-base text-neutral-400">
                    I was deeply fascinated in the concepts of programming and
                    designing — how the things works inside the cool looking
                    world of computers.
                  </p>
                </div>
                <FullImageCard image="/images/Flower-1.jpg" imageAlt="Flower" />
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>This thing called Web design?</h1>
                  <p className="text-base text-neutral-400">
                    When the pandemic struck, I took it as an opportunity to
                    explore new things. I came across Web design, and thought it
                    might be fun to give it a go and made 10-20 websites.
                  </p>
                  <p className="text-base text-neutral-400">
                    Long story short, my failures eventually turned into
                    successes, and the rest was history
                  </p>
                </div>
                <FullImageCard image="/images/Flower-2.jpg" imageAlt="Flower" />
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>In my spare time,</h1>
                  <p className="text-base text-neutral-400">
                    I'm probably making tweaks to my portfolio or working on
                    some other projects.
                  </p>
                  <p className="text-base text-neutral-400">
                    Other than that, you'll find me playing cricket and
                    football, gaming, taking some pictures, and trying to get my
                    hands on the latest tech.
                  </p>
                </div>
                <div className="px-6 py-14 pt-0 text-xl flex flex-col gap-y-7">
                  <h1 className="text-2xl">Thanks for stopping by!</h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...FramerTransition, delay: 0.3 }}
                className="w-[50%] h-full"
              >
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>
                    This is my story — alongside some flicks that I took in my
                    free time.
                  </h1>
                </div>
                <FullImageCard image="/images/Sky.jpg" imageAlt="Sky" />
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>And, I wanted to learn.</h1>
                  <p className="text-base text-neutral-400">
                    I was greatly pleased with how I was able to enter an
                    institute for Graphics design.
                  </p>
                  <p className="text-base text-neutral-400">
                    I wanted to push my design craft at a faster pace and have a
                    positive impact on vastly more people.
                  </p>
                </div>
                <FullImageCard
                  image="/images/Flower-5.jpg"
                  imageAlt="Flower Bud"
                />
                <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                  <h1>Making it all happen.</h1>
                  <p className="text-base text-neutral-400">
                    To my advantage, I was able to leverage a lot of the skills
                    and design principles I had picked up during graphics design
                    to greatly expedite my journey of self-learning Web Design.
                  </p>
                  <p className="text-base text-neutral-400">
                    I loved solving problems by making stuff, and really valued
                    paying meticulous attention to craftsmanship.
                  </p>
                </div>
                <FullImageCard image="/images/Flower-4.jpg" imageAlt="Flower" />
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...FramerTransition, delay: 0.2 }}
              className="w-full h-full"
            >
              <FullImageCard
                image="/images/Ahmed-Raza.jpg"
                imageAlt="Ahmed Raza"
              />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                <h1>
                  This is my story — alongside some flicks that I took in my
                  free time.
                </h1>
              </div>
              <FullImageCard image="/images/Sky.jpg" imageAlt="Sky" />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                <h1>My background</h1>
                <p className="text-base text-neutral-400">
                  I'm from Karachi, Pakistan, I'm currently in 10th standard
                  studying science. I was always obsessed with new technologies.
                </p>
                <p className="text-base text-neutral-400">
                  I was deeply fascinated in the concepts of programming and
                  designing — how the things works inside the cool looking world
                  of computers.
                </p>
              </div>
              <FullImageCard image="/images/Flower-1.jpg" imageAlt="Flower" />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                <h1>And, I wanted to learn.</h1>
                <p className="text-base text-neutral-400">
                  I was greatly pleased with how I was able to enter an
                  institute for Graphics design.
                </p>
                <p className="text-base text-neutral-400">
                  I wanted to push my design craft at a faster pace and have a
                  positive impact on vastly more people.
                </p>
              </div>
              <FullImageCard image="/images/Flower-5.jpg" imageAlt="Flower" />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                <h1>This thing called Web design?</h1>
                <p className="text-base text-neutral-400">
                  When the pandemic struck, I took it as an opportunity to
                  explore new things. I came across Web design, and thought it
                  might be fun to give it a go and made 10-20 websites.
                </p>
                <p className="text-base text-neutral-400">
                  Long story short, my failures eventually turned into
                  successes, and the rest was history
                </p>
              </div>
              <FullImageCard image="/images/Flower-2.jpg" imageAlt="Flower" />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-7">
                <h1>Making it all happen.</h1>
                <p className="text-base text-neutral-400">
                  To my advantage, I was able to leverage a lot of the skills
                  and design principles I had picked up during graphics design
                  to greatly expedite my journey of self-learning Web Design.
                </p>
                <p className="text-base text-neutral-400">
                  I loved solving problems by making stuff, and really valued
                  paying meticulous attention to craftsmanship.
                </p>
              </div>
              <FullImageCard image="/images/Flower-4.jpg" imageAlt="Flower" />
              <div className="px-6 py-14 text-xl flex flex-col gap-y-6">
                <h1>In my spare time,</h1>
                <p className="text-base text-neutral-400">
                  I'm probably making tweaks to my portfolio or working on some
                  other projects.
                </p>
                <p className="text-base text-neutral-400">
                  Other than that, you'll find me playing cricket and football,
                  gaming, taking some pictures, and trying to get my hands on
                  the latest tech.
                </p>
              </div>
              <div className="px-6 py-14 pt-0 text-xl flex flex-col gap-y-7">
                <h1 className="text-2xl">Thanks for stopping by!</h1>
              </div>
            </motion.div>
          )}
        </div>
      </PageSection>
      <PageSection className="relative">
        <div className="!max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] px-4 max-990:px-14 max-768:px-7 max-480:px-4 mx-auto relative">
          <div className="w-full h-[1px] mt-10 mb-20 bg-white/15"></div>

          <SectionTitle className="uppercase font-bold mb-16">
            Education
          </SectionTitle>

          <div className="w-full max-768:space-y-16">
            {Education.map((item, index) => (
              <EducationCard
                key={index}
                location={item.location}
                title={item.title}
                date={item.date}
                description={item.description}
              ></EducationCard>
            ))}
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  );
};

export default Info;
