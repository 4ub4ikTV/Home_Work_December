// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let rec = (a, b) => {
//     let result = a * b
//     return result
// }
// leng = +prompt('Enter the length rectangle')
// widt = +prompt('Enter the width rectangle')
// let rectangle = rec(leng, widt)
// document.write(`<h3>Area Rectangle = ${rectangle} </h3>`)
//
// document.write(`<hr>`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let cir = (a, b) => {
//     let result = 2 * a * b
//     return result
// }
//
// p = 3.14
// radius = +prompt('Enter the radius circle')
// let circle = cir(p, radius)
// document.write(`<h3>Area Circle = ${circle} </h3>`)
//
// document.write(`<hr>`)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cyl = (a, b, c) => {
//     let result = 2 * a * b * c
//     return result
// }
//
// pC = 3.14
// lengthCylinder = +prompt('Enter the length cylinder')
// radiusCylinder = +prompt('Enter the radius cylinder')
// let cylinder = cyl(pC, radiusCylinder, lengthCylinder)
// document.write(`<h3>Area cylinder = ${cylinder} </h3>`)
//
// document.write(`<hr>`)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//
// let arr = (a) => {
//     for (const user of a) {
//         document.write(`<h3>${user.name}-${user.age}</h3>`)
//     }
// }
// arr(users)
//
// document.write(`<hr>`)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let t = (a) => {
//     document.write(`<p>${a}</p>`)
// }
//
// a = prompt('Enter your text')
// t(a)
//
// document.write(`<hr>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul = (b) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${b}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// b = 'Lorem'
// ul(b)
//
// document.write(`<hr>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ull = (te, numb) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${te}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// te = 'Lor'
// numb = +prompt('Enter the quantity li')
// ull(te, numb)
//
// document.write(`<hr>`)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = (a) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < a.length; i++) {
//         document.write(`<li>${a[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// mas([1, 2, 4, true, 'false'])
// document.write(`<hr>`)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = (a) => {
//     for (const aElement of a) {
//         document.write(`<div>${aElement.id} ${aElement.name} ${aElement.age}</div>`)
//     }
// }
//
// let user = [
//     {id: 1, name: 'Orest', age: 20},
//     {id: 2, name: 'Nazar', age: 10},
//     {id: 3, name: 'Nadia', age: 19}
// ];
// arr(user)
// document.write(`<hr>`)

// - створити функцію яка повертає найменьше число з масиву

// let calc = (a, b, c) => {
//     if (b > a && a < c) {
//     } else if (a > b && b < c) {
//     } else if (a > c && c < b) {
//     }
// }
// calc(1, 2, 3)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let arr = (text) => {
//     min = 0
//     for (const textElement of text) {
//         min += textElement
//     }
//     document.write(`<h4>Сумоване значення елементів: ${min}</h4>`)
// }
//
// arr([1, 2, 10])
// document.write(`<hr>`)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }
//
// let arr = [11, 22, 33, 44];
// document.write(swap(arr, 0, 1));
//
// document.write(`<hr>`

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     let exchangeRate = 0
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             exchangeRate = currencyValues[i].value
//             break
//         }
//     }
//     let sumExchange = sumUAH / exchangeRate;
//     return Math.round(sumExchange * 100) / 100
// }
//
// let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
//
// document.write('10000 тисяч гривень у відношенні до долларів- ', exchange(10000, currencyValues, 'USD'))
// document.write('<br>')
// document.write('10000 тисяч гривень у відношенні до євро- ', exchange(10000, currencyValues, 'EUR'));

