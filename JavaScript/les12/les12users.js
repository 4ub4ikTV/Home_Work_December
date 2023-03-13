let url = new URL(location.href);
let id = url.searchParams.get('data');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            let userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item}: - ${value[item]}`
            } else {
                userDiv.innerText = `${item}:`

                for (const key in value[item]) {
                    let userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key}: - ${value[item][key]}`
                    } else {
                        userInnerDiv.innerText = `${key}:`

                        for (const element in value[item][key]) {
                            let htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element}: - ${value[item][key][element]}`
                            }
                            userInnerDiv.appendChild(htmlDivElement)
                        }
                    }
                    userDiv.appendChild(userInnerDiv)
                }
            }
            document.body.appendChild(userDiv)
        }
    })