import { DEFAULT_SIZE, SPLIT_SIZE, SIZE_DIFF } from "./constants";

const randomizeColor = () => {
  let chars = "0123456789ABCDEF";
  let newColor = "";
  for (let i = 0; i < 6; i++) {
    newColor += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `#${newColor}`;
};

const handleSplit = (size, key) => {
  let splitSquares = [];
  const newSize = size - SIZE_DIFF;
  const canSplit = newSize > SIZE_DIFF;

  for (let i = 0; i < SPLIT_SIZE; i++) {
    let randomColor = randomizeColor();
    splitSquares.push({
      key: Date.now().toString() + parseInt(Math.random() * 1000),
      size: newSize,
      color: randomColor,
      isShown: true,
      canSplit: canSplit,
      indent: DEFAULT_SIZE - newSize,
      parent: key,
    });
  }

  return splitSquares;
};

export { handleSplit };
