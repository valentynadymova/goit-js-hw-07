const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingridientsList = document.querySelector('#ingredients');

const ingridientsItems = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});

ingridientsList.append(...ingridientsItems);