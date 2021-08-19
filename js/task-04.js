const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click',onDecrementButton)
incrementBtn.addEventListener('click',onIncrementButton)

function onDecrementButton() {

    value.textContent = Number(value.textContent) - 1;

}
function onIncrementButton () {
    value.textContent = Number(value.textContent) + 1;
    
}