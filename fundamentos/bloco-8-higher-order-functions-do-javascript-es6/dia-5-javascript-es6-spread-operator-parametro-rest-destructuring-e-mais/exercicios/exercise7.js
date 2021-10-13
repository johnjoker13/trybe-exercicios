const ships = [
  {
    name: "Titanic",
    length: 269.1,
    measurementUnit: "meters",
  },
  {
    name: "Queen Mary 2",
    length: 1132,
    measurementUnit: "feet",
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters",
  },
];

// escreva shipLength abaixo

const shipLength = ({ name, length, measurementUnit } = obj) => {
  return `Ship: ${name}, length: ${length} ${measurementUnit}`;
};

console.log(shipLength(ships[0]));
