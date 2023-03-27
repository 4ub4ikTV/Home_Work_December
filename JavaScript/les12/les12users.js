let url = new URL(location.href);
let id = url.searchParams.get('data');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {
        let divMain = document.createElement('div')
        divMain.classList.add('users-info')

        let div1Main = document.createElement('div');
        div1Main.classList.add('block-users')


        for (const item in value) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('user-div')
            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} - ${value[item]}`
            } else {
                userDiv.innerText = `${item}:`

                for (const key in value[item]) {
                    let userInnerDiv = document.createElement('div');
                    userInnerDiv.classList.add('user-inner-div')
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} - ${value[item][key]}`
                    } else {
                        userInnerDiv.innerText = `${key}:`

                        for (const element in value[item][key]) {
                            let htmlDivElement = document.createElement('div');
                            htmlDivElement.classList.add('html-div-element')
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} - ${value[item][key][element]}`
                            }
                            userInnerDiv.appendChild(htmlDivElement)
                        }
                    }
                    userDiv.appendChild(userInnerDiv)
                }
            }
            div1Main.appendChild(userDiv)
        }
        divMain.appendChild(div1Main)
        document.body.appendChild(divMain)
    })
