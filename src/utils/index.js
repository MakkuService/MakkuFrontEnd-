export const populateArray = (size, multiplier = 1) => [...Array(size)]
  .map((_, i) => (i + 1) * multiplier);

export const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
};

export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);
