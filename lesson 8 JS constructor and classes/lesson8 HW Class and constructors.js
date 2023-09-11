//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомогою циклу знайти яка попелющка мае бути з принцем
// Додатково, знайти додаткову попелюшку за допомогою функцii find та вiдповiдного колбеку





//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)


let User = function(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

let Constr = new User(1, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234);

console.log(Constr)

let users = [
    new User(1, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(24, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(36, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(45, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(57, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(68, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(71, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(80, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(92, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234),
    new User(103, 'Kolya', 'Pavlov', 'pavlov@gmail.com', 80634561234)
]

console.log(users)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredID = users.filter(e =>e.id %2 === 0);
console.log(filteredID)


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedID = users.sort(User.id);
  console.log(sortedID)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    id = 123
    name = 'Olya'
    surname = 'Petrova'
    email = 'petrova@gmail.com'
    phone = 80982243176
    order = ['kovbasa','syr','khlib','pomidor']

}

let myBox = new Client()
console.log(Client)

let clients = [
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client(),
    new Client()
]
console.log(clients)

let sortedClients = clients.sort(Client.id);
  console.log(sortedClients)



//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


let Cars = function(model, manufacturer, year, velocity, max_capacity, driver) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.velocity = velocity;
    this.max_capacity = max_capacity;
    this.newSpeed = this.velocity + 20;
    this.newValue = this.year + 3;
    this.driver = driver;
    this.drive = function (){
        return `їдемо зі швидкістю ${this.velocity} на годину`
    };
    this.increaseMaxSpeed = function () {
        return `${this.newSpeed}`
    }
    this.changeYear = function() {
        return `${this.newValue}`
    }
    this.addDriver = function(){
        return Cars.push
    }

};

  let Automobiles = new Cars('camry', 'toyota', 2015, 210, 420, 'professionalRacer');
  console.log(Automobiles)

console.log(Automobiles.drive());
console.log(Automobiles.increaseMaxSpeed())
console.log(Automobiles.changeYear())


console.log(Automobiles)



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

let Cinderella = function(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;
};

let Cindy1 = new Cinderella('Emily', 21, 36)
let Cindy2 = new Cinderella('Mary', 22, 39)
let Cindy3 = new Cinderella('Katrin', 24, 35)
let Cindy4 = new Cinderella('Rita', 28, 37)
let Cindy5 = new Cinderella('MaryAnna', 29, 41)
let Cindy6 = new Cinderella('Mishel', 24, 34)
let Cindy7 = new Cinderella('Suzan', 21, 35)
let Cindy8 = new Cinderella('Olga', 31, 42)
let Cindy9 = new Cinderella('Lily', 28, 33)
let Cindy10 = new Cinderella('Helen', 28, 39)

let Cinderellas = [Cindy1,Cindy2,Cindy3, Cindy4,Cindy5,Cindy6,Cindy7,Cindy8,Cindy9,Cindy10]
console.log(Cinderellas)


let Prince = function (name2, age2, foundSize){
    this.name2 = name2;
    this.age2 = age2;
    this.foundSize = foundSize;
};

let littleKing = new Prince('Julian', 32, 34)
console.log(littleKing)

for (let i = 0; i <= Cinderellas.length; i++) {
    if(Cinderellas[i].foot_size === littleKing.foundSize){
        break
    }
    console.log('it`s a match')
}

let necessaryCindy = Cinderellas.find(({foot_size}) => {
    if (foot_size === 34){
        return true;
    }
})
console.log(necessaryCindy)








//let obj = {model: 'AUDI A8', year: '2019', color: 'brown'}
//
// for (key in obj) {
//   console.log(`${key} = ${obj[key]}`);
// }
// // model = AUDI A8
// // year = 2019
// // color = brown