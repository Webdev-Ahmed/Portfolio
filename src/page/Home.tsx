import { FaGithub, FaInstagram } from "react-icons/fa";
import Button from "../components/Button";
import DotGrid from "../components/DotGrid";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Home = () => {
  const copyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <section className="w-full h-screen flex">
      <div
        id="right"
        className="w-[50%] px-10 h-full flex items-center justify-center"
      >
        <div
          id="img"
          className="w-full bg-me bg-cover bg-top rounded-2xl h-[650px] border border-neutral-100/10 relative before:absolute before:inset-20 before:bg-white/30 before:-z-10 before:blur-3xl"
        ></div>
      </div>
      <div
        id="left"
        className="flex flex-col relative justify-center w-[50%] h-full"
      >
        <div className="absolute left-[250px] bottom-[250px]">
          <DotGrid width={20} height={15} />
        </div>
        <div className="flex flex-col gap-10 absolute pointer-events-none">
          <h1 className="text-6xl font-semibold leading-[70px] w-auto">
            Hey, I am{" "}
            <span className="bg-gradient-to-br from-purple-400 to-indigo-700 bg-clip-text text-transparent font-bold">
              Ahmed
            </span>{" "}
            <br /> I'm a Full Stack Dev <br /> Based in Karachi, Pakistan
          </h1>
          <div className="pointer-events-auto space-x-4">
            <Button className="text-lg">
              <a href="/projects">See my work</a>
            </Button>
            <Button className="text-lg">
              <a href="/projects">let's connect</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-[20px] px-6 py-4 rounded-xl bg-neutral-900/60 border-[1px] border-neutral-100/20 left-1/2 -translate-x-1/2 flex text-2xl items-center gap-6">
        <a
          className="hover:scale-110 transition-transform"
          href="https://github.com/Webdev-Ahmed"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="hover:scale-110 transition-transform"
          href="https://www.instagram.com/ahmedraza.dev/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <button
          className="hover:scale-110 transition-transform relative group"
          onClick={() => copyText("webdevahmedraza@gmail.com")}
        >
          <span className="group-hover:opacity-100 opacity-0 transition-all absolute top-[-60px] py-2 bg-neutral-900/40 border border-neutral-100/20 text-sm rounded-xl w-[110px] left-1/2 -translate-x-1/2">
            Click to copy
          </span>
          <MdOutgoingMail />
        </button>
        <button
          className="hover:scale-110 transition-transform text-xl group relative"
          onClick={() => copyText("+92 328-224-1305")}
        >
          <span className="group-hover:opacity-100 opacity-0 transition-all absolute top-[-62.5px] py-2 bg-neutral-900/40 border border-neutral-100/20 text-sm rounded-xl w-[110px] left-1/2 -translate-x-1/2">
            Click to copy
          </span>
          <FaPhone />
        </button>
      </div>
    </section>
  );
};

export default Home;
