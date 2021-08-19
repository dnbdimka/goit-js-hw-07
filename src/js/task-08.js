

const refs = {
    divRef: document.querySelector('#controls'),

    inputNumber: document.querySelector('input[type="number"]'),
    createBtnRef: document.querySelector('button[data-action="render"]'),
    destroyBtnRef: document.querySelector('button[data-action="destroy"]'),
    boxesRef: document.querySelector('#boxes'),
}

function createBoxes(amount) {
    refs.boxesRef.innerHTML= '';
    let width = 30;
    let height = 30;
    for (let i = 1; i <= amount; i += 1){
        const newDiv = document.createElement('div');
        newDiv.style.width = width + 'px';
        width += 10;
        newDiv.style.height = height + 'px';
        height += 10;
        newDiv.style.backgroundColor = randomColor();
        refs.boxesRef.append(newDiv);
    }
}

refs.createBtnRef.addEventListener('click', onCreateBtn)
function onCreateBtn() {
    createBoxes(refs.inputNumber.value);
}

function randomColor() {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r}, ${g}, ${b})`;
}

refs.destroyBtnRef.addEventListener('click', onRemoveBtn);
function onRemoveBtn() {
    refs.boxesRef.innerHTML= '';
}



// function onInputNum () {
//     // console.log(onInputNum);
// }
// refs.inputNumber.addEventListener('input', onInputNum);


























