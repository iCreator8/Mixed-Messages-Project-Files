// ---BUTTON FUNCTION CREATION ---

function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    let buttonBack = document.getElementsByClassName('colorBox input').value;
    buttonBack = color;

    document.body.style.backgroundColor = color;
    document.getElementById('colorInputText').value = color;
    document.getElementById('colorInputColor').style.backgroundColor = color;
}

let pressButton = document.getElementById('colorButton');

colorButton.addEventListener('click', changeColor);