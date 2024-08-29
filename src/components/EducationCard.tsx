import { EducationCardProps } from "../types/types";

const EducationCard = ({
  location,
  title,
  date,
  description,
}: EducationCardProps) => {
  return (
    <div className="flex max-768:flex-col max-768:gap-y-5">
      <div className="w-[55%] max-990:w-[55%] max-768:w-full">
        <h1 className="text-4xl max-480:text-3xl font-semibold">{location}</h1>
      </div>
      <div className="w-[45%] max-990:w-[50%] max-768:w-full">
        <h1 className="text-2xl max-480:text-xl">{title}</h1>
        <span className="text-lg max-480:text-base  text-neutral-500">
          {date}
        </span>
        <p className="mt-8 max-480:text-base  text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
