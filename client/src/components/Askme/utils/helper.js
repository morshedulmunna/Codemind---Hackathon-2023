export const generateUniqueId = () => {
  const timestamp = new Date();
  const randomNumber = Math.random();
  const hexDesimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexDesimalString}`;
};

export const TypeText = (text) => {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      return text.chartAt(index);
    } else {
      clearInterval(interval);
    }
  });
};
