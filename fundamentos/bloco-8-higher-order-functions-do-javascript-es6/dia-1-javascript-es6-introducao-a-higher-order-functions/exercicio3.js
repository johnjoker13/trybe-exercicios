const lottery = (num) => {
    const randomNum = Math.trunc(Math.random() * 5) + 1;
   return num === randomNum ? "Parabéns você ganhou" : "Tente novamente";
};

