//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker



//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length)

let str1 = 'lorem ipsum';
console.log(str1.length)

let str2 = 'javascript is cool';
console.log(str2.length)

//____________________________________//

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let firstPhrase = 'hello world';
console.log(firstPhrase.toUpperCase())

let secondPhrase = 'lorem ipsum';
console.log(secondPhrase.toUpperCase())

let thirdPhrase = 'javascript is cool';
console.log(thirdPhrase.toUpperCase())

//____________________________________//

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let firstPhrase1 = 'HELLO WORLD';
console.log(firstPhrase.toLowerCase())

let secondPhrase1 = 'LOREM IPSUM';
console.log(secondPhrase.toLowerCase())

let thirdPhrase1 = 'JAVASCRIPT IS COOL';
console.log(thirdPhrase.toLowerCase())

//__________________________________//

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let string = ' dirty string   ';
let replaceAll1 = string.replaceAll(' ','');
console.log(replaceAll1);
let replaceAll2 = replaceAll1.replaceAll('y','y ')
console.log(replaceAll2);


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string5 = 'Ревуть воли як ясла повні';
let splits = string5.split(" ")
console.log(splits)


//________________________________________//

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numberArray = [10,8,-7,55,987,-1011,0,1050,0];
let newNumbers = numberArray.toString();
console.log(newNumbers)

//________________________________________//

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
nums.sort(function(a, b){return a-b});

let lowest = nums[0];

console.log(nums)


let nums2 = [11,21,3];
nums2.sort(function(a, b){return b-a});

let highest = nums2[0];

console.log(nums2)

//_____________________________________//


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration > a.monthDuration ? 1 : -1);
console.log(coursesAndDurationArray)

//_______________________________________________//

let filteredElements =  coursesAndDurationArray.filter(function(months) {
    return months.monthDuration > 5;
});

console.log(filteredElements)

//______________________________________________//

let coursesWithID = coursesAndDurationArray.map(function(u){
    u.id = 1
    return u;
});

console.log(coursesWithID)

//_____________________________________________//


//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
}

    const deck1 = new Deck();


    console.log(deck1.deck);

    let cardFinder = deck1.deck.includes('Ace of Spades',0);
    if (cardFinder === true){
        console.log('Ace of Spades has been found')
    }

let cardFinder2 = deck1.deck.includes('6 of Hearts', 0) && deck1.deck.includes('6 of Spades', 0) && deck1.deck.includes('6 of Clubs', 0) && deck1.deck.includes('6 of Diamonds', 0);
if (cardFinder2 === true){
    console.log('All six-s have been found')
}

let redCards = deck1.deck.filter(function (cards) {
    return cards.endsWith('Hearts')
})
console.log(redCards)

let redCards2 = deck1.deck.filter(function (cards) {
    return cards.endsWith('Clubs')
})
console.log(redCards2)

let greyCardsbiggerthanNine = deck1.deck.filter(function (cards) {
        return cards.endsWith('Clubs')
})
console.log(greyCardsbiggerthanNine)




// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck1.deck.reduce(function(accumulator, suit) {
 if(suit.endsWith('Spades')){
     accumulator[0].push(suit)
 }
 else if (suit.endsWith('Hearts')){
        accumulator[1].push(suit)
 }
else if(suit.endsWith('Clubs')){
     accumulator[2].push(suit)
 }
else{
    accumulator[3].push(suit)
 }
   return accumulator;

},[[],[],[],[]]);
console.log(reduce)

//__________________________________//


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const result = coursesArray.filter(item => item.modules.includes('sass'))
console.log(result)

const result1 = coursesArray.filter(item => item.modules.includes('docker'))
console.log(result1)