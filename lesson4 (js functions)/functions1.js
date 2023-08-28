function findSquare() {
    let width = 10;
    let height = 20;
    let square = width * height;
    console.log(square);
}

findSquare();

//_______________________________//

function findRound() {
    let PI = Math.PI;
    let Radius = 5;
    let Round = PI * (Radius**2);
    console.log(Round);
}

findRound();

//_______________________________//


function findCylinder() {
    let PI = Math.PI;
    let r = 5;
    let h = 10
    let Cylinder = ((2*PI) * (r**2)) + ((2*PI) * (r*h));
    console.log(Cylinder);
}

findCylinder();

//_______________________________//

const array1 = ['a', 'b', 'c', 4, 163];

array1.forEach((element) => console.log(element));

//________________________________//

document.body.onload = addElement;

function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}


//________________________________//

const bookTitles = [
    "the_vegetarian",
    "the_vegetarian",
    "the_vegetarian",
 ];
let newUl = document.createElement('ul')
bookTitles.forEach(book => {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl.appendChild(listItem)
})

document.body.appendChild(newUl)

//_______________________________//

function generateList() {
    const newList = document.createElement('ul');

    for (let i = 0; i < bookTitles.length; i++) {
        const book = bookTitles[i];
        newList.innerHTML += `<li>${book}</li>`;
    }

    return newList;
}

document.body.append(generateList());


//_________________________________//

const primitiveElements = [
    "the_book",
    123,
    true,
];
let newUl1 = document.createElement('ul')
primitiveElements.forEach(book => {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl1.appendChild(listItem)
})

document.body.appendChild(newUl1)

//__________________________________//


let users = [
    {id:1, firstName : "Susan", age: 67},
    {id:2, firstName : "Daniel", age: 35},
    {id:3, firstName : "Jacob", age: 64}
];

let userFullnames = users.map(function(element){
    return `${element.id} ${element.firstName} ${element.age}`;
})

console.log(userFullnames);


//___________________________________//

const array12 = [1, 3, 2];

console.log(Math.min(...array12));

//___________________________________//


const myNums = [1,2,3,4,5];
let sum = 0;
myNums.forEach( num => {
    sum += num;
})

console.log(sum)


//__________________________________//


const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

let myArray = [11, 22, 33, 44];
swapElements(myArray, 0, 1);
console.log(myArray);

//__________________________________//


const price = 10000;

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

console.log(`The converted version of ${price} is ${USDollar.format(price)}//40`);
