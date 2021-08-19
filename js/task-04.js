const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click',onDecrementButton)
incrementBtn.addEventListener('click',onIncrementButton)
let counterValue = 0;

function onDecrementButton() {
    counterValue = Number(value.textContent) - 1;
    value.textContent = counterValue;
}
function onIncrementButton() {
    counterValue = Number(value.textContent) + 1;
    value.textContent = counterValue;
}