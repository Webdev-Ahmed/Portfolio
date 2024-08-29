import Card from "../components/Card";
import Footer from "../components/Footer";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";

const Cambridge = () => {
  return (
    <>
      <PageSection className="!max-w-full relative h-fit">
        <div
          className="w-full h-screen absolute -z-[10] opacity-70 "
          style={{
            backgroundImage: `radial-gradient(ellipse at top, #637E76 15%, transparent 80%)`,
          }}
        ></div>

        <div className="max-990:gap-x-6 pt-32 h-auto max-768:gap-x-4 !max-w-[1024px] max-1440:!max-w-[880px] max-990:!max-w-[100vw] max-990:px-12 max-768:px-6 max-480:px-4 mx-auto relative z-[99]">
          <h1 className="bg-gradient-to-b max-768:text-6xl max-480:text-5xl tracking-tighter from-green-50 from-50% to-80% [text-shadow:_0_0_15px_rgb(255_255_255_/_0.3)] to-[#93baae] bg-clip-text text-transparent font-semibold text-7xl text-center">
            Cambridge Hospital
          </h1>
          <p className="text-xl max-768:text-lg text-white/50 text-center mt-6">
            Aptech's Project, December 2023
          </p>

          <div className="flex flex-col p-2 pt-4 gap-y-2 mt-6 h-auto bg-neutral-800/20 rounded-3xl border-neutral-100/10 border-[1px]">
            <h1 className="text-center text-4xl font-bold my-2 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent tracking-tight">
              Overview
            </h1>
            <div className="rounded-3xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Cambridge.png"
                alt="Cambridge Hospital"
                loading="lazy"
                className="border-white/50 rounded-2xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Cambridge-2.png"
                alt="Cambridge Hospital"
                loading="lazy"
                className="border-white/50 rounded-2xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Cambridge-4.png"
                alt="Cambridge Hospital"
                loading="lazy"
                className="border-white/50 rounded-2xl aspect-[16/10] object-center object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden p-2 bg-neutral-800/50 border-[1px] border-neutral-100/10">
              <img
                src="/images/Cambridge-3.png"
                alt="Cambridge Hospital"
                loading="lazy"
                className="border-white/50 rounded-2xl aspect-[16/10] object-center object-cover"
              />
            </div>
          </div>

          <SectionTitle className="my-10">Info</SectionTitle>
          <div className="w-full flex max-768:flex-col gap-x-10 max-768:gap-y-6 max-768:gap-x-0">
            <div className="w-[50%] max-768:w-full">
              <h1 className="text-sm font-bold">My Role</h1>
              <p className="mt-6 text-neutral-400">
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  UI/UX Lead
                </span>{" "}
                — Interaction Design, Visual Design, User Flows, Rapid
                Prototyping
              </p>

              <h1 className="text-sm font-bold my-6">Team</h1>
              <p className="text-neutral-400">
                Ayesha Malick, Docs <br />
                Arshad Hussain, Docs <br />
                Adnan, Images <br />
              </p>

              <h1 className="text-sm font-bold py-6">Timeline & Status</h1>
              <p className="text-neutral-400">
                30 Days,{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  Launched in January 2024
                </span>
              </p>
            </div>
            <div className="w-[50%] max-768:w-full">
              <h1 className="text-sm font-bold">Overview</h1>
              <p className="mt-6 text-neutral-400">
                We were given this project as a final exam to a semester. We had
                to make a beautifull yet intuitive website, there was no backend
                to build because it was a first sem project, we decided to go
                with the good ol'{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  HTML
                </span>
                ,{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  CSS
                </span>
                , and{" "}
                <span className="text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_.5)]">
                  JS
                </span>
              </p>
              <p className="text-neutral-400 mt-6">
                I led the <span>UI/UX</span> direction of the site experience
                for designing the website.
              </p>
              <p className="mt-6 text-neutral-400">
                The website was met with outstanding results and our team was
                applauded for this amazing website, We got the highest result in
                our batch.
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
              title="Svelte Markdown Blog"
              subject="Personal Project, '23"
              description="Envisioning an awesome blog website for devs."
              href="/svelte-blog"
              color="#ffc078"
              imageAlt="Svelte-alt"
              image="/images/Svelte-Blog.png"
            />
          </div>
        </div>
      </PageSection>
      <Footer />
    </>
  );
};

export default Cambridge;
