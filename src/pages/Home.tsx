import { BiPlus } from "react-icons/bi";
import BackgroundGradient from "../components/BackgroundGradient";
import PageSection from "../components/PageSection";
import { isMobile } from "../lib/utils";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { FaArrowDown } from "react-icons/fa6";
import { CompactProjects } from "../constants";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <PageSection className="w-full relative h-[80vh] max-768:h-[clamp(500px,_100vw,_70vh)] max-480:h-[75vh] max-1440:h-[75vh]">
        {isMobile({ width: "480px" }) ? (
          <BackgroundGradient className="bg-white/[0.075]" />
        ) : (
          <BackgroundGradient className="bg-white/20" />
        )}

        {isMobile({ width: "480px" }) ? (
          <div className="w-full h-full flex justify-center max-768:px-6 max-990:px-12 items-end">
            <div className="w-[80%] h-[80%] max-768:h-[clamp(50%,_100vh,_80%)] max-990:w-[100%] max-990:h-[75%] max-1440:w-[850px] bg-neutral-800/70 border-[1px] p-2 pb-0 border-neutral-100/10 backdrop-blur-3xl rounded-3xl rounded-b-none shadow-center-md shadow-neutral-950/75 bottom-0">
              <div className="w-full h-full relative border border-neutral-100/50 rounded-2xl bg-[#101010] overflow-hidden rounded-b-none">
                <div className="absolute w-[70%] h-[450px] filter blur-[200px] -top-1/3 bg-white/20 left-1/2 -translate-x-1/2"></div>

                <div className="w-full h-10 bg-gradient-to-r from-neutral-700/95 via-neutral-300 to-neutral-700/95 rounded-2xl rounded-b-none shadow-center shadow-neutral-950/70 flex justify-between pl-5 pr-3 items-center relative z-10">
                  <div className="flex space-x-3">
                    <div className="size-3 shadow-center shadow-red-500 bg-red-400 rounded-full"></div>
                    <div className="size-3 shadow-center shadow-yellow-400 bg-yellow-500/90 rounded-full"></div>
                    <div className="size-3 shadow-center shadow-green-400 bg-green-500/90 rounded-full"></div>
                  </div>
                  <div className="text-2xl text-neutral-100/20">
                    <BiPlus />
                  </div>
                </div>

                <div className="text-8xl ml-20 mt-24 leading-[5.5rem] max-768:ml-[clamp(20px,5vw,50px)] max-768:mt-[clamp(20px,10vw,65px)] max-990:text-[8vw] max-990:leading-[6.5vw] max-990:ml-10 max-990:mt-14 max-1440:text-7xl max-1440:ml-14 max-1440:mt-20 max-1440:leading-[4rem] text-shadow tracking-tighter shadow-orange-300/50 font-semibold text-[#f2f2f2]">
                  <h1>I craft websites,</h1>
                  <h1>
                    interactions &{" "}
                    <span className="font-serif [text-shadow:_0_0_20px_rgb(255_255_255_/_30%)] italic bg-gradient-to-b from-neutral-300 from-40% to-85% to-neutral-800 font-normal text-transparent bg-clip-text">
                      design.
                    </span>
                  </h1>
                </div>

                <div className="relative text-xl mt-12 max-768:mt-[clamp(30px,5vw,50px)] max-768:ml-[clamp(20px,5vw,50px)] max-768:text-[clamp(14px,3vw,22px)] max-768:leading-[clamp(20px,4vw,50px)] max-990:text-[clamp(18px,2vw,50px)] max-990:mt-14 max-990:leading-[clamp(24px,2vw,50px)] max-1440:text-xl max-1440:mt-12 font-semibold ml-[50%]">
                  <h1 className="w-auto">
                    Studying at Aptech. Based in Karachi.
                  </h1>
                  <h1 className="w-auto text-neutral-500">
                    Certified in Graphics Design.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full px-6 flex flex-col justify-center">
            <SectionTitle className="mb-7 mt-12">
              <span className="font-semibold">Ahmed Raza</span>—Web Designer
            </SectionTitle>
            <div className="text-[clamp(10px,12.5vw,3.75rem)] leading-[clamp(10px,11vw,3.5rem)] [text-shadow:_0_0_20px_rgb(255_255_255_/_30%),_0_-3px_15px_var(--tw-shadow-color),_0_3px_10px_rgb(0_0_255_/_40%)] tracking-tighter shadow-orange-300/50 font-semibold text-[#f2f2f2]">
              <h1>I craft websites,</h1>
              <h1>
                interactions &{" "}
                <span className="font-serif [text-shadow:_0_0_10px_rgb(255_255_255_/_25%),_0_-2px_5px_var(--tw-shadow-color),_0_2px_5px_rgb(0_0_255_/_25%)] after:content-['design.'] after:font-serif after:absolute after:[text-shadow:_none] after:bg-gradient-to-b after:from-neutral-100 after:italic after:from-40% after:to-85% after:to-gray-400 after:bg-clip-text after:left-0 relative italic to-stone-400 text-transparent font-normal">
                  design.
                </span>
              </h1>
            </div>
            <div className="relative text-[clamp(10px,5vw,1.5rem)] mt-[clamp(10px,9vw,3.5rem)] font-semibold">
              <h1 className="w-auto">Studying at Aptech. Based in Karachi.</h1>
              <h1 className="w-auto text-neutral-500">
                Certified in Graphics Design.
              </h1>
            </div>
          </div>
        )}

        <div className="absolute z-99 pointer-events-none bottom-0 w-screen h-[150px] bg-gradient-to-t translate-y-1/2 from-[#101010] from-60% to-transparent left-1/2 -translate-x-1/2">
          {!isMobile({ width: "480px" }) && (
            <>
              <div className="w-[90%] h-[1px] bg-white/10 mb-4 mx-auto"></div>
              <div className="px-7 flex gap-2 items-center">
                <FaArrowDown className="animate-bounce" />
                <p className="text-neutral-400">Selected Work:</p>
              </div>
            </>
          )}
        </div>
      </PageSection>
      <PageSection className="relative py-24 max-768:py-12 max-480:py-0 w-full h-auto max-990:px-12 max-768:px-6 max-480:px-4 flex flex-col gap-y-[clamp(30px,10vw,50px)]">
        {CompactProjects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            subject={project.subject}
            description={project.description}
            href={project.href}
            color={project.color}
            image={project.imagePath}
            imageAlt={project.title}
          />
        ))}
      </PageSection>
      <Footer />
    </>
  );
};

export default Home;
