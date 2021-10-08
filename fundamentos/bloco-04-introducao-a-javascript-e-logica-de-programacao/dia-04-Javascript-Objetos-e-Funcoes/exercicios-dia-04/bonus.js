const roman = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const sumArray = (prev, next) => {
  if (prev >= next) {
    return prev + next;
  } else {
    return next - prev;
  }
};

const returnNum = (str) => {
  const newArr = [];
  let translate = 0;
  const splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i += 1) {
    if (splitStr[i] === "I") {
      translate = 1;
      newArr.push(translate);
    }
    if (splitStr[i] === "IV") {
      translate = 4;
      newArr.push(translate);
    }
    if (splitStr[i] === "V") {
      translate = 5;
      newArr.push(translate);
    }
    if (splitStr[i] === "IX") {
      translate = 9;
      newArr.push(translate);
    }
    if (splitStr[i] === "X") {
      translate = 10;
      newArr.push(translate);
    }
    if (splitStr[i] === "XL") {
      translate = 40;
      newArr.push(translate);
    }
    if (splitStr[i] === "L") {
      translate = 50;
      newArr.push(translate);
    }
    if (splitStr[i] === "XC") {
      translate = 90;
      newArr.push(translate);
    }
    if (splitStr[i] === "C") {
      translate = 100;
      newArr.push(translate);
    }
    if (splitStr[i] === "CD") {
      translate = 400;
      newArr.push(translate);
    }
    if (splitStr[i] === "D") {
      translate = 500;
      newArr.push(translate);
    }
    if (splitStr[i] === "CM") {
      translate = 900;
      newArr.push(translate);
    }
    if (splitStr[i] === "M") {
      translate = 1000;
      newArr.push(translate);
    }
  }
  return newArr.reduce(sumArray);
};

console.log(returnNum("MMXXI"));
