const inputTodo = document.querySelector('#todo-input')
const todoButton = document.querySelector('#add-btn')
const todoList = document.querySelector('#todo-list')

function tambahKegiatan(){
    const teksKegiatan = inputTodo.value;

    const itemBaru = document.createElement('li');
    itemBaru.textContent = teksKegiatan;

    todoList.appendChild(itemBaru);

    inputTodo.value = "";
}

todoButton.addEventListener('click', tambahKegiatan)