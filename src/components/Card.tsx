import { CardProps } from "../types/types";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({
  className,
  color,
  href,
  image,
  title,
  subject,
  description,
  imageAlt,
}: CardProps) => {
  return (
    <div
      className={`w-[80%] h-[700px] ${className} mx-auto max-768:max-h-[600px] min-h-[370px] max-768:h-[80vw] max-990:w-[100%] max-990:h-[clamp(400px,70vw,625px)] max-1440:w-[850px] bg-neutral-800/35 border-[1px] p-2 border-neutral-100/10 rounded-3xl overflow-hidden shadow-center-md shadow-neutral-950/75 bottom-0`}
    >
      <div className="w-full h-full relative border p-[clamp(10px,5vw,2.5rem)] border-neutral-100/15 hover:border-neutral-100/50 transition-color duration-300 rounded-2xl bg-neutral-800/80 overflow-clip group">
        <a href={href}>
          {/* <div
            style={{ backgroundColor: `${color}80` }}
            className={`absolute w-[70%] h-[450px] max-768:w-[95%] max-480:w-[85%] max-768:h-[350px] max-480:h-[200px] filter blur-[100px] max-768:blur-[100px] max-480:blur-[30px] rounded-full max-768:opacity-65 -top-1/4 left-1/2 -translate-x-1/2 duration-300 opacity-0 group-hover:opacity-100`}
          ></div> */}
          <div
            style={{
              backgroundImage: `radial-gradient(ellipse at top, ${color}, transparent)`,
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-70 max-768:opacity-70 duration-300 transition-opacity"
          ></div>

          <div className="flex justify-between relative z-10">
            <div>
              <h1 className="text-2xl font-semibold tracking-tighter [text-shadow:_0_0_20px_rgb(255_255_255_/_0.3)]">
                {title}
              </h1>
              <span className="mt-2 text-sm">
                <div className="flex gap-[4px]">
                  <p className="text-neutral-300">
                    <span className="font-semibold text-white">{subject}</span>{" "}
                    — {description}
                  </p>
                </div>
              </span>
            </div>
            <div className="text-xl mt-2 duration-300 transition-transform group-hover:translate-x-3">
              <FaArrowRight />
            </div>
          </div>

          <div className="w-[85%] h-[clamp(200px,50vw,520px)] max-768:w-[90%] 768:translate-y-10 768:group-hover:translate-y-0 transition-transform duration-300 bottom-0 shadow-center-md shadow-neutral-950/50 absolute left-1/2 -translate-x-1/2 rounded-2xl rounded-b-none z-10 overflow-hidden ">
            <img
              src={image}
              className="w-full h-full"
              alt={imageAlt}
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
