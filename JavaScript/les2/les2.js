// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['hello', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, true]

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookInfo1 = {
    title: 'The Forest',
    pageCount: 1365,
    genre: 'Fantasy'
}
let bookInfo2 = {
    title: 'God of War',
    pageCount: 546,
    genre: 'Mystery'
}
let bookInfo3 = {
    title: 'Final Offer',
    pageCount: 895,
    genre: 'Romance'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookInfo4 = {
    title: 'The Forest',
    pageCount: 1365,
    genre: 'Fantasy',
    authors: [
        'Armando Lucas Correa',
        42
    ]
}
let bookInfo5 = {
    title: 'God of War',
    pageCount: 546,
    genre: 'Mystery',
    authors: [
        'Jess Kidd',
        45
    ]
}
let bookInfo6 = {
    title: 'Final Offer',
    pageCount: 895,
    genre: 'Romance',
    authors: [
        'Martha McPhee',
        36
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty0'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty1'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty2'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty3'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty4'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty5'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty6'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty7'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty8'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty9'
    }
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.

let x = 1

//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 0 до 59: ')
if (time < 16) {
    console.log('Перша частина години')
} else if (time > 15 && time < 31) {
    console.log('Друга частина години')
} else if (time > 30 && time < 46) {
    console.log('Третя частина години')
} else if (time > 45 && time < 60) {
    console.log('Четверта частина години')
} else {
    console.log('????')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть число від 1 до 31: ')
if (day < 11) {
    console.log('Перша декада місяця')
} else if (day < 21) {
    console.log('Друга декада місяця')
} else if (day < 32) {
    console.log('Третя декада місяця')
} else {
    console.log('????')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('Введіть порядковий номер дня тижня: ')
switch (week) {
    case 1 :
        console.log('Monday')
        break
    case 2 :
        console.log('Tuesday')
        break
    case 3 :
        console.log('Wednesday')
        break
    case 4 :
        console.log('Thursday')
        break
    case 5 :
        console.log('Friday')
        break
    case 6 :
        console.log('Saturday')
        break
    case 7 :
        console.log('Sunday')
        break
    default:
        console.log('????');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x1 = +prompt('Введіть перше число: ')
let x2 = +prompt('Введіть друге число: ')
if (x1 > x2) {
    console.log('Більше число: ', x1)
} else if (x2 > x1) {
    console.log('Більше число: ', x2)
} else {
    console.log('Числа рівні')
}

// Або то, Або це

let y1 = 10
let y2 = 5
if (y1 > y2) {
    console.log('Більше число: ', y1)
} else if (y2 > y1) {
    console.log('Більше число: ', y2)
} else {
    console.log('Числа рівні')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let y = prompt('enter anything') || 'default'
console.log(y)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}
