const categoriesRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesRef.length);


categoriesRef.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
})

