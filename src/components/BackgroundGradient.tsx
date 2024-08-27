const BackgroundGradient = ({ className }: { className: string }) => {
  return (
    <div className="absolute w-[100%] h-[100vh] pointer-events-none flex justify-center -z-[99]">
      <div className="absolute w-screen h-screen pointer-events-none backdrop-blur-[15vh]"></div>
      <div
        className={`${className} absolute pointer-events-none -z-[99] w-[80vw] h-[65vh] rounded-t-none rounded-full`}
      ></div>
    </div>
  );
};

export default BackgroundGradient;
