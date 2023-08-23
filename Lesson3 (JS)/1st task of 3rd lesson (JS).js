// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині)

//_______________1st and 2nd tasks (for)_________________________________//

let users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let k = 0; k < users1.length-1; k++) {
    document.write(`<div>${users1[k].name} ${users1[k].age} ${users1[k].status}</div>`);
}

//__________________3rd and 4th tasks (while)______________________________//

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'kolya2', age: 2346, status: true},
    {name: 'olya2', age: 23, status: false},
    {name: 'max2', age: 387, status: true},
    {name: 'anya2', age: 61, status: false},
    {name: 'oleg2', age: 45, status: false},
    {name: 'andrey2', age: 230, status: true},
    {name: 'masha2', age: 48, status: true},
    {name: 'olya2', age: 38, status: false},
    {name: 'max2', age: 34, status: true}
];

let i = 1;
while (i < users.length) {
    document.write(`<h1>${users[i].name} ${users[i].age} ${users[i].status}</h1>`);
    i++;
}



//__________________________________________//


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let index = 1; index< listOfItems.length; index++) {
    document.write(`<ul><li>${listOfItems[index]}</li></ul>`);
}