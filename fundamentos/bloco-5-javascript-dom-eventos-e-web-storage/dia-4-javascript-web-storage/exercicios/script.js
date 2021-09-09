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

  //Persistir alteracoes
  function getData() {

    let backgroundColor = localStorage.getItem("background");
    if (backgroundColor) document.body.style.backgroundColor = backgroundColor;

    let fontColor = localStorage.getItem("textColor");
    let paragraph = document.querySelector("p");
    if (fontColor) paragraph.style.color = fontColor;

    let fontSize = localStorage.getItem("fontSize");
    let sizeFont = document.querySelector("p");
    if (fontSize) sizeFont.style.fontSize = `${fontSize}px`;

    let letterSpacing = localStorage.getItem("letterSpacing");
    let spacingLetter = document.querySelector("p");
    if (letterSpacing) spacingLetter.style.letterSpacing = `${letterSpacing}px`;

    let fontFamily = localStorage.getItem("fontFamily");
    let familyFont = document.querySelector("p");
    if (fontFamily) familyFont.style.fontFamily = fontFamily;
  }

  getData();
};
