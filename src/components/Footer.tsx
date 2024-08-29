import { isMobile } from "../lib/utils";
import Link from "./Link";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] py-20 max-990:px-14 max-768:px-0 flex items-center justify-center border-t-[1px] border-white/10 mt-20">
      <div className="max-w-[1024px] max-1440:max-w-[880px] w-full h-full flex flex-col justify-between max-768:px-7">
        <div className="w-full flex justify-between items-start text-start">
          {isMobile({ width: "480px" }) && (
            <h1 className="text-6xl font-serif">ah.</h1>
          )}
          <div className="flex gap-x-24">
            <div>
              <ul className="flex flex-col gap-y-5">
                <li>
                  <h1 className="text-xs uppercase tracking-tight font-extrabold text-neutral-500">
                    Main
                  </h1>
                </li>
                <li>
                  <Link
                    icon={false}
                    className="!p-0 !bg-transparent hover:!bg-transparent"
                    href="/"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    icon={false}
                    className="!p-0 !bg-transparent hover:!bg-transparent"
                    href="/"
                  >
                    Info
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-5">
                <li>
                  <h1 className="text-[10px] uppercase tracking-tight font-extrabold text-neutral-500">
                    Contact
                  </h1>
                </li>
                <li>
                  <Link
                    href=""
                    className="!p-0 !bg-transparent hover:!bg-transparent"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/src/public/Resume.pdf"
                    className="!p-0 !bg-transparent hover:!bg-transparent"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex max-768:flex-col max-768:gap-y-8 justify-between 768:items-end max-768:mt-16">
          <div>
            <h1 className="font-semibold max-480:text-sm ">
              © 2024 Ahmed Raza. All Rights Reserved.
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              Made with love and passion.
            </p>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Last updated by Ahmed on August 28, 2024, 4:50 PM EST
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
