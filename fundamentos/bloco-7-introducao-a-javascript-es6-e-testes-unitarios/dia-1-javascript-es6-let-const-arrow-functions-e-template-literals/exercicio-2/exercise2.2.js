const getP = document.getElementById('clicked');
const getButton = document.getElementById('add-click');

let clickCount = 0;
const manyClicks = e => {
    e.preventDefault();
    clickCount += 1;
    getP.innerHTML = clickCount;
}

getButton.addEventListener('click', manyClicks);