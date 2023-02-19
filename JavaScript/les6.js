// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
const lengths = strings.map(str => str.length);
console.log(lengths);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log(uppercaseStrings);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const lowercaseStrings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map(str => str.toLowerCase());
console.log(lowercaseStrings);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = '  dirty   string    ';
let cleanString = dirtyString.trim();
console.log(cleanString);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
    const wordsArray = str.split(' ');
    return wordsArray;
}

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNums = nums.map(num => num.toString());
console.log(stringNums);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let num = [11, 21, 3];

function sortNums(num, direction) {
    if (direction === 'ascending') {
        return num.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return num.sort((a, b) => b - a);
    } else {
        return num;
    }
}

console.log(sortNums(num, 'ascending'));
console.log(sortNums(num, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(longCourses)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesWithId = longCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(coursesWithId)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)//

const deck = [];
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        const card = {
            cardSuit: suits[i],
            value: values[j],
            color: (suits[i] === 'diamond' || suits[i] === 'heart') ? 'red' : 'black'
        };
        deck.push(card);
    }
}

// знайти піковий туз
const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');

// всі шістки
const sixes = deck.filter(card => card.value === '6');

// всі червоні карти
const redCards = deck.filter(card => card.color === 'red');

// всі буби
const diamonds = deck.filter(card => card.cardSuit === 'diamond');

// всі трефи від 9 та більше
const highClubs = deck.filter(card => card.cardSuit === 'clubs' && parseInt(card.value) >= 9);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const deckBySuit = deck.reduce((acc, card) => {
    if (!acc[card.cardSuit]) {
        acc[card.cardSuit] = [];
    }
    acc[card.cardSuit].push(card);
    return acc;
}, {});

console.log(deckBySuit);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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

// --написати пошук всіх об'єктів, в який в modules є sass

const resultWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(resultWithSass);

// --написати пошук всіх об'єктів, в який в modules є docker

const resultWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(resultWithDocker);


