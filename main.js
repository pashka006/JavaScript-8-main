// Local Stonage - пока пользователь не удалит с браузера
// Session Stonage - пока не закроется браузер

const list = document.querySelector('.list')
const btn = document.querySelector('.btn')
const inputText = document.querySelector('.input__text')
let listArr 

if (!localStorage.listArr) {
    listArr = []
} else {
    listArr = JSON.parse(localStorage.getItem('listArr'))
}

btn.addEventListener('click', () => {
    let textValue = inputText.value
    listArr.push(textValue) 
    inputText.value = ''
    updatelocal()
    console.log(listArr)
    fillList()
})

const creatElement = (text, index) =>{
    return `
        <li class="list__item">${text}
        <button onclick="deleteItem(${index})" class="delete__btn">Delete</button>
        </li>
    `
}


const fillList = () => {
    list.innerHTML = ''
    if (listArr.length > 0) {
        listArr.forEach((item, index) => {
            list.innerHTML += creatElement(item, index)
        })
    }
}

const deleteItem = index => {
    listArr.splice(index, 1)
    fillList()
    updatelocal()
}

const updatelocal = () => {
    localStorage.setItem('listArr', JSON.stringify(listArr))
}

fillList()