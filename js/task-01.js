
const listRef = document.querySelectorAll('.item');
console.log('Number of categories:', listRef.length);


listRef.forEach(element => {
    console.log("Category:", element.querySelector('h2').textContent);
    console.log("Elements:", element.querySelector('ul').children.length);
})

