const input = document.querySelector(`#validation-input`);
const inputDataEl = input.dataset.length;
console.log(inputDataEl)

input.addEventListener(`change`, verify => {
    if (verify.currentTarget.value.length === Number(inputDataEl)) {
        input.classList.remove(`invalid`),
        input.classList.add(`valid`);
    }
    else (
        input.classList.remove(`valid`),
        input.classList.add(`invalid`));
    
});