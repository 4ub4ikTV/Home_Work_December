// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let o = 'hello'
let p = 'owu'
let m = 'com'
let d = 'ua'
let e = 1
let f = 10
let g = -999
let h = 123
let j = 3.14
let q = 2.7
let w = 16
let t = true
let y = false

//     Вивести кожну змінну за допомогою: console.log

console.log(o)
console.log(p)
console.log(m)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(j)
console.log(q)
console.log(w)
console.log(t)
console.log(y)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Orest'
let middleName = 'Andriyovich'
let lastName = 'Sviantko'

let person = firstName.concat(middleName).concat(lastName)
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fName = prompt('enter your first name')
let mName = prompt('enter your middle name')
let lName = prompt('enter your last name')


console.log(fName)
console.log(mName)
console.log(lName)