import anime from "animejs";

const DotGrid = ({ width, height }: { width?: number; height?: number }) => {
  const GRID_WIDTH = width ? width : 25;
  const GRID_HEIGHT = height ? height : 20;

  const handleClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleClick}
          data-index={index}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-neutral-600"
          key={`${i}-${j}`}
        >
          <div
            data-index={index}
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
