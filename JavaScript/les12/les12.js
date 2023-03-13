// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
//

let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            let userName = document.createElement('a');
            userName.innerText = user.id + ' - ' + user.name
            userName.href = 'les12users.html?data=' + user.id
            userDiv.appendChild(userName)
            mainDiv.appendChild(userDiv)
        }
    })




