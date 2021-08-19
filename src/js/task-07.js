const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
refs.text.style.fontSize = refs.input.value + 'px';

refs.input.addEventListener('input', onChangeSize)

function onChangeSize (e) {
    const fontSize = e.target.value
    refs.text.style.fontSize = fontSize + 'px';
}