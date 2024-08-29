import { useState } from "react";
import { NavLinks } from "../constants";
import { isMobile } from "../lib/utils";
import Link from "./Link";
import { useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

const Nav = () => {
  const location = useLocation();

  const [linkEnable, setLinkEnable] = useState(false);

  const NavAllowed = location.pathname == "/" || location.pathname == "/info";

  return NavAllowed ? (
    <header className="flex fixed px-14 max-768:px-7 max-480:px-3 w-full items-center z-[99] justify-between max-768:justify-end max-768:gap-2 py-6 max-480:justify-between">
      {isMobile({ width: "480px" }) ? (
        <div className="shadow-center-lg bg-[#101010]/40 rounded-full shadow-[#101010] max-768:fixed left-7">
          <h1 className="text-xl font-semibold">Ahmed Raza</h1>
          <p className="text-sm opacity-50">Web Designer</p>
        </div>
      ) : (
        <div className="shadow-2xl bg-neutral-400/15 size-12 flex items-center border-[1px] border-neutral-100/15 backdrop-blur-md justify-center rounded-full shadow-[#101010]">
          <h1 className="text-xl font-serif">ah.</h1>
        </div>
      )}
      <nav className="flex shadow-xl shadow-black/30 768:fixed max-480:fixed max-480:left-1/2 max-480:-translate-x-1/2 p-1 gap-x-2 768:left-1/2 768:-translate-x-1/2 border-white/10 duration-300 border-[1px] bg-neutral-400/5 hover:bg-neutral-400/10 rounded-full backdrop-blur-md">
        {NavLinks.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <a
              key={index}
              href={link.href}
              className={`py-2 px-6 text-sm relative z-10 rounded-full duration-300 hover:bg-neutral-400/15 ${
                isActive ? "bg-neutral-400/20" : "bg-transparent"
              }`}
            >
              <div
                className={`absolute ${
                  isActive ? "opacity-100" : "opacity-0"
                } h-[.12rem] w-5 rounded-full -translate-y-[100%] duration-300 bg-[#f2f2f2] left-1/2 -translate-x-1/2 -top-[0.3rem] rounded-bl-none rounded-br-none shadow-center shadow-white`}
              ></div>
              {link.title}
            </a>
          );
        })}
      </nav>
      {isMobile({ width: "768px" }) ? (
        <div className="flex gap-x-4 shadow-center-lg bg-[#101010]/40 rounded-full shadow-[#101010]">
          <Link href="">Linkedin</Link>
          <Link href="/Resume.pdf" target="_blank">
            Resume
          </Link>
        </div>
      ) : (
        <>
          <button
            onClick={() => setLinkEnable((prev) => !prev)}
            className="size-12 rounded-full flex items-center text-center justify-center text-2xl bg-neutral-400/10 border-white/10 border-[1px] backdrop-blur-md"
          >
            {linkEnable ? <IoClose /> : <span>@</span>}
          </button>

          <div
            className={`fixed ${linkEnable ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"} duration-300 origin-top-right right-7 top-24 rounded-2xl p-4 bg-neutral-400/15 border-[1px] border-neutral-100/15 backdrop-blur-md shadow-2xl shadow-[#101010]`}
          >
            <Link href="">Linkedin</Link>
            <Link href="/Resume.pdf" target="_blank">
              Resume
            </Link>
          </div>
        </>
      )}
    </header>
  ) : (
    <header className="w-full fixed max-768:py-6 px-14 max-768:px-7 max-480:px-3 py-10 z-[990]">
      <button className="shadow-center-md shadow-black/15 rounded-full">
        <Link
          className="!bg-white/10 !px-4 !pr-6 backdrop-blur-md group justify-center"
          icon={false}
          href="/"
        >
          <div className="flex items-center gap-x-2">
            <FaArrowLeft className="group-hover:-translate-x-1 duration-300 transition-transform" />
            Back
          </div>
        </Link>
      </button>
    </header>
  );
};

export default Nav;
