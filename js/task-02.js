const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const products = ingredients.map(ingredient => {
    const elementOfList = document.createElement('li');
    elementOfList.textContent = ingredient;
    elementOfList.classList.add('item');

    return elementOfList;
});

console.log(products);

listRef.append(...products);
console.log(listRef);



// another way - with function
// const makeElementsOfList = ingredients => {
//     return ingredients.map(ingredient => {
        
//         const elementOfList = document.createElement('li');
//         elementOfList.textContent = ingredient;
//         elementOfList.classList.add('item');

//         return elementOfList;
//     });
// }
// const products = makeElementsOfList(ingredients);

// listRef.append(...products);
// console.log(listRef);
