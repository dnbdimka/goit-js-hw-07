const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onChangeName)
function onChangeName(e) {
    const input = e.currentTarget;
    const text = input.value;
    if (text === '') {
        refs.output.textContent = 'незнакомец';
        return;
    }
        refs.output.textContent = text;
}