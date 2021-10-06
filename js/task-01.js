const items=document.querySelectorAll('.item');

console.log(`В списке ${items.length} категории`);

const printCategoryDesc=item=>{
  const title=item.querySelector('h2');
  const items=item.querySelectorAll('li');

  console.log(`Категория: ${title.textContent}, Количество элементов: ${items.length}`);
  

};
items.forEach(printCategoryDesc);