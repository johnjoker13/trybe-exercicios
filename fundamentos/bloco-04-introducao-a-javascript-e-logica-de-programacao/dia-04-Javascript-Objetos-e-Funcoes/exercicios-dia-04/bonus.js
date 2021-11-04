const roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const sumArray = (prev, next) => {
  if (prev >= next) {
    return prev + next;
  } else {
    return next - prev;
  }
};

const transformRoman = (alg) => {
  const splitAlg = alg.split("");
  const newArray = [];
  const algValues = Object.keys(roman);
  splitAlg.forEach((element) => {
    if (algValues.includes(element)) {
      newArray.push(roman[element]);
    } else {
      throw new Error(`Algarismo não reconhecido ${element}`);
    }
  });
  console.log(newArray.reduce(sumArray));
};

transformRoman("MMXXk");
