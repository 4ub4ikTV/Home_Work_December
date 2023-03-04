// - створити блок,

let divFather = document.createElement('div');
divFather.innerText = 'Hello'

//     - додати йому класи wrap, collapse, alpha, beta

divFather.classList.add('wrap', 'collapse', 'alpha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

divFather.style.background = 'silver'

// - додати цей блок в body.

document.body.appendChild(divFather)
document.write(`<hr>`)

// - клонувати його повністю, та додати клон в body.

let divFather1 = document.querySelector('.wrap')

let clone = divFather1.cloneNode(true)
document.body.appendChild(clone)
document.write(`<hr>`)

// - Є масив:

let arr = ['Main', 'Products', 'About us', 'Contacts']

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let divUl = document.createElement('div');
for (const arrElement of arr) {
    let arrLi = document.createElement('li');
    arrLi.innerText = arrElement
    divUl.appendChild(arrLi)
}
document.body.appendChild(divUl)
document.write(`<hr>`)

// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let divCourses = document.createElement('div')
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divElements = document.createElement('div');
//     let titleElements = document.createElement('h2');
//     titleElements.innerText = coursesAndDurationArrayElement.title
//     let divTextElements = document.createElement('div');
//     divTextElements.innerText = 'Month Duration: '.concat(coursesAndDurationArrayElement.monthDuration)
//     divCourses.append(divElements)
//     divElements.append(titleElements, divTextElements)
// }
// document.body.appendChild(divCourses)
// document.write(`<hr>`)

//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let divCourses = document.createElement('div')
divCourses.classList.add('father')
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divElements = document.createElement('div');
    divElements.classList.add('item')
    let titleElements = document.createElement('h1');
    titleElements.classList.add('heading')
    titleElements.innerText = coursesAndDurationArrayElement.title
    let pTextElements = document.createElement('p');
    pTextElements.classList.add('description')
    pTextElements.innerText = 'Month Duration: '.concat(coursesAndDurationArrayElement.monthDuration)
    divElements.append(titleElements, pTextElements)
    divCourses.append(divElements)
}
document.body.appendChild(divCourses)
document.write(`<hr>`)

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let divFamily = document.createElement('div');
divFamily.classList.add('family')
for (const simpson of simpsons) {
    let simpsonElement = document.createElement('div');
    simpsonElement.classList.add('member')
    let nameSurnameAge = document.createElement('h2');
    nameSurnameAge.classList.add('nameSimpson')
    nameSurnameAge.innerText = simpson.name + ' - '.concat(simpson.surname) + ' - '.concat(simpson.age)
    let infoSimpson = document.createElement('p');
    infoSimpson.classList.add('textSimpson')
    infoSimpson.innerText = simpson.info
    let imgSimpson = document.createElement('img');
    imgSimpson.classList.add('imageSimpson')
    imgSimpson.src = simpson.photo


    simpsonElement.append(nameSurnameAge, infoSimpson, imgSimpson)
    divFamily.appendChild(simpsonElement)
}
document.body.appendChild(divFamily)
document.write(`<hr>`)

//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let fatherElement = document.createElement('div');
fatherElement.classList.add('fatherElement')

for (const coursesArrayElement of coursesArray) {

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv')

    let title = document.createElement('h3');
    title.innerText = coursesArrayElement.title
    title.classList.add('titleH3')

    let monthDuration = document.createElement('p');
    monthDuration.innerText = 'Month Duration - ' + coursesArrayElement.monthDuration
    monthDuration.classList.add('month')

    let hourDuration = document.createElement('p');
    hourDuration.innerText = 'Hour Duration - ' + coursesArrayElement.hourDuration
    hourDuration.classList.add('hour')


    let ul = document.createElement('ul')
    ul.classList.add('mainUl')
    mainDiv.append(title, monthDuration, hourDuration, ul)
    fatherElement.appendChild(mainDiv)

    for (const ulElement of coursesArrayElement.modules) {
        let li = document.createElement('li');
        li.classList.add('mainUlLi')
        li.innerText = ulElement
        ul.appendChild(li)
    }
}
document.body.appendChild(fatherElement)
document.write(`<hr>`)

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div');
div.innerText = 'Hello'
div.setAttribute('id', 'text')

let button = document.createElement('button');
button.innerText = 'Click'

document.body.append(div, button)

button.onclick = () => {
    div.style.display = 'none'
}
document.write(`<hr>`)

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
let buton = document.createElement('button');
buton.innerText = 'Click'

document.body.append(input, buton)
buton.onclick = () => {
    input.oninput
    if (input.value < 18) {
        let mainP = document.createElement('p');
        mainP.innerText = 'Малий'
        document.body.append(mainP)
    } else if (input.value >= 18) {
        let secondP = document.createElement('p');
        secondP.innerText = 'Вітаю'
        document.body.append(secondP)
    }
}
