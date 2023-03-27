// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }

// let user1 = new User(1, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user2 = new User(2, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user3 = new User(3, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user4 = new User(4, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user5 = new User(5, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user6 = new User(6, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user7 = new User(7, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user8 = new User(8, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user9 = new User(9, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// let user10 = new User(10, 'Orest', 'Sviantko', 'ork@gmail.com', 102);
// console.log(user1)

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arr = [];
// arr.push(user1, user2, user3, user4, user4, user5, user6, user7, user8, user9, user10)
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(value => value.id % 2 === 0);
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort((a, b) => a.id - b.id);
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let user1 = new Client(1, 'Orest', 'Sviantko', 'ork@gmail.com', 102, [1, 2]);
// let user2 = new Client(2, 'Orst', 'Svianko', 'ork2@gmail.com', 101, [1, 2, 3]);
// let user3 = new Client(3, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4]);
// let user4 = new Client(4, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5]);
// let user5 = new Client(5, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5, 6]);
// let user6 = new Client(6, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5, 6, 7]);
// let user7 = new Client(7, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5, 6, 7, 8]);
// let user8 = new Client(8, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// let user9 = new Client(9, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// let user10 = new Client(10, 'Ort', 'Sviantk', 'ork3@gmail.com', 103, [1]);

// створити пустий масив, наповнити його 10 об'єктами Client

// let arr = []
// let number = arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = arr.sort((a, b) => a.order.length - b.order.length);
// console.log(sort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, years, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.years = years;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//
//     this.info = function () {
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey] !== 'function') {
//                 console.log(`${argumentsKey} - ${this[argumentsKey]}`)
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     this.changeYear = function (newValue) {
//         this.years = newValue
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let car = new Car('BMW', 'Germany', 2012, 230, 2.4);
// console.log(car)
// car.engine()
// car.info()
// car.increaseMaxSpeed(25)
// car.changeYear(2015)
// car.addDriver({name: 'Andriy'})
// console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, years, maxSpeed, carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.years = years;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//
//     engine = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     }
//
//
//     info = function () {
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey] !== 'function') {
//                 console.log(`${argumentsKey} - ${this[argumentsKey]}`)
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue) {
//         this.years = newValue
//     }
//
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
//
// let car = new Car('BMW', 'Germany', 2012, 230, 2.4);
// console.log(car)
// car.engine()
// car.info()
// car.increaseMaxSpeed(25)
// car.changeYear(2015)
// car.addDriver({name: 'Andriy'})
// console.log(car)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Popeluska(name, age, footSize) {
//     this.name = name
//     this.age = age
//     this.footSize = footSize
// }
//
// let popeluska1 = new Popeluska('Olya', 23, 39)
// let popeluska2 = new Popeluska('Anya', 23, 38)
// let popeluska3 = new Popeluska('Nadia', 23, 36)
// let popeluska4 = new Popeluska('Julia', 23, 35)
// let popeluska5 = new Popeluska('Natalya', 23, 32)
//
// let arr = []
// arr.push(popeluska1, popeluska2, popeluska3, popeluska4, popeluska5)
//
// class Princ {
//
//     constructor(name, age, findfootSize) {
//         this.name = name;
//         this.age = age;
//         this.findfootSize = findfootSize;
//     }
// }
//
// let princ = new Princ('Orest', 29, 38);
//
// let findPopeluska = (arr, boy) => {
//     for (const item of arr) {
//         if (item.footSize === boy.findfootSize) {
//             console.log(`My popeluska is ${item.name}`)
//         }
//     }
// }
//
// findPopeluska(arr, princ)