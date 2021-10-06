const inputControlEl = document.querySelector(`#font-size-control`);
const sizeTextEl = document.querySelector(`#text`);

inputControlEl.addEventListener(`input`, inputControlSize);

function inputControlSize(el) {
    sizeTextEl.style.fontSize = el.target.value + 'rem'
}