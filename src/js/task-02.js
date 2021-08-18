const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const addIngredients = () => {
  const listRef = document.querySelector('#ingredients')
  const newArray = ingredients.map(item => {
    const liRef = document.createElement('li');
    liRef.textContent = item;
    return liRef;
  })
listRef.append(...newArray)
}
addIngredients();