let colors = [
  "red",
  "orange",
  "yellow darken-2",
  "light-green",
  "green",
  "green darken-3",
  "blue",
  "indigo",
  "purple",
  "pink",
  "pink darken-3",
  "pink lighten-2",
];

const divideColors = () => {
  let divider = 6;
  let count = 0;
  let rows = Math.ceil(colors.length / divider);
  let index = 0;
  let array = Array(rows);

  for (let i = 0; i < array.length; i++) {
    array[i] = [];
  }
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    if (count == divider) {
      count = 0;
      index++;
    }
    array[index].push(color);
    count++;
  }
  colors = array;
};
divideColors();

export { colors };
