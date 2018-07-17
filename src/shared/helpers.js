export const swapElements = (index1, index2, array) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

export const shuffleArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const random = parseInt(Math.random() * i);
    swapElements(i, random, array);
  }
  return array;
};
