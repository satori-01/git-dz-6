// // 

// let array = [1, 2, 3, 4, 5];
// let newArray = array.join();
// console.log(newArray);


// function pushJoin(array, separator) {
//     let result = '';
//     for (let i = 0; i < array.length; i++) {
//       result += array[i];
//       if (i !== array.length - 1) {
//         result += separator;
//       }
//     }
//     return result;
//   }


// JavaScript
const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
  const todoText = input.value.trim();
  if (todoText !== '') {
    const div = document.createElement('div');
    const text = document.createElement('h3');
    const divButtons = document.createElement('div');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    div.setAttribute('class', 'text block_text');
    divButtons.setAttribute('class', 'div_buttons');
    deleteButton.setAttribute('class', 'delete_button');
    editButton.setAttribute('class', 'edit button');

    text.textContent = todoText;
    deleteButton.textContent = 'delete';
    editButton.textContent = 'edit';

    deleteButton.onclick =()=> div.remove()
    editButton.onclick = () => {
        const editText = prompt(`'EDIT ${text.innerHTML}'`).trim()
        editText === '' ? alert('нельзя менять на пустую ') : text.innerHTML = editText
    }

    divButtons.appendChild(deleteButton);
    divButtons.appendChild(editButton);

    div.appendChild(text);
    div.appendChild(divButtons);

    todoList.prepend(div);

    input.value = ''; 
  }
};

createButton.onclick = createTodo;

