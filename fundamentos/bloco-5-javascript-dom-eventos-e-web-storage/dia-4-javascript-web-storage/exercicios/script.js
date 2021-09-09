window.onload = function () {
  //Requisito 1
  let getColor = document.querySelector("select");
  getColor.addEventListener("change", function () {
    document.body.style.backgroundColor = getColor.value;
    localStorage.setItem("background", getColor.value);
  });

  //Requisito 2
  let getFontColor = document.getElementById("corDoTexto");
  getFontColor.addEventListener("change", function () {
    let getPColor = document.querySelector("p");
    getPColor.style.color = getFontColor.value;
    localStorage.setItem("textColor", getFontColor.value);
  });

  //Requisito 3
  let getFontSize = document.querySelector('input[name="font-size"]');
  getFontSize.addEventListener("change", function () {
    let getPSize = document.querySelector("p");
    getPSize.style.fontSize = `${getFontSize.value}px`;
    localStorage.setItem("fontSize", getFontSize.value);
  });

  //Requisito 4
  let getLetterSpacing = document.querySelector('input[name="letter-spacing"]');
  getLetterSpacing.addEventListener("change", function () {
    let getPSpacing = document.querySelector("p");
    getPSpacing.style.letterSpacing = `${getLetterSpacing.value}px`;
    localStorage.setItem("letterSpacing", getLetterSpacing.value);
  });

  //Requisito 5
  let getFontFamily = document.getElementById("fonte-family");
  getFontFamily.addEventListener("change", function () {
    let getParagraphFontFamily = document.querySelector("p");
    getParagraphFontFamily.style.fontFamily = getFontFamily.value;
    localStorage.setItem("fontFamily", getFontFamily.value);
  });
};
