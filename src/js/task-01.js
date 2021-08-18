
const showQuantityCategories = () => {

    const listRef = document.querySelector('#categories');
    const liAllRef = listRef.children;
    console.log(`В списке ${liAllRef.length} категории`);
  
}
showQuantityCategories();
// const listRef = document.querySelector('#categories');
// const liAllRef = listRef.children;
// console.log(`В списке ${liAllRef.length} категории`);

//
//
//

const showItems = () => {
    const items = document.querySelectorAll('li.item');
    // console.log(items);
    [...items].forEach(item => {

        const titleRef = item.querySelector('h2');
        console.log(`Категория: ${titleRef.textContent}`)
        
        
        const listRef = item.querySelector('ul');
        const liRef = listRef.querySelectorAll('li')
        
        console.log(`Количество элементов: ${liRef.length}`)

    })
}
showItems();

















