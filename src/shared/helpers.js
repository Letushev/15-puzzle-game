export const shuffleArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const random = parseInt(Math.random() * i);
    const temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
};
