let background = document.querySelector('.container');
let hexValue = document.querySelector('.hex-value');
let hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let button = document.querySelector('.btn-click');

button.addEventListener('click', changeHex);

function changeHex () {
    let hex = '#';
    for (let i=0; i < 6; i++) {
        let value = Math.floor(Math.random() * hexNumbers.length);
        hex += hexNumbers[value];
    }

    hexValue.textContent = hex;
    background.style.backgroundColor = hex;
}
