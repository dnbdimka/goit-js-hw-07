const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlur);
inputRef.addEventListener('focus', onFocus);

function onBlur(e) {
    const input = e.currentTarget;
    const value = input.value;
    const INPUT_VALUE = Number(input.dataset.length);
    console.log(INPUT_VALUE);

    if (value.length === INPUT_VALUE) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }  
}
function onFocus() {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
}