const FullImageCard = ({
  image,
  className,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} w-full h-[700px] max-990:h-[clamp(470px,65vw,640px)] max-768:h-[clamp(640px,130vw,1064px)] max-480:h-[clamp(460px,130vw,640px)] bg-neutral-800/70 border-[1px] p-2 border-neutral-100/20 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-center-md shadow-neutral-950/50`}
    >
      <div className="rounded-2xl border-[1px] overflow-hidden border-neutral-100/30 w-full h-full">
        <img
          src={image}
          className="w-full h-full object-cover object-center"
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FullImageCard;
