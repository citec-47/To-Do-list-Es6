import './style.css';
import {
  myaddTodo,
  mydeleteTodoItem,
  mydeleteAllCompleted,
  myupdateTodo,
} from './modules/requestmyDat.js';

import {
  mysaveToLocalStorage,
  mygetFromLocalStorage,
} from './modules/savingData.js';

const mydisplayTodoList = () => {
  const mytodos = mygetFromLocalStorage();
  const todosList = document.getElementById('mytodoslist');
  todosList.innerHTML = '';
  mytodos.forEach((todo, index) => {
    const mytodoItem = document.createElement('li');
    mytodoItem.className = 'mytodoitem';

    const todo2ItemLeft = document.createElement('div');
    todo2ItemLeft.className = 'mytodoitem-left';

    const myinput = document.createElement('input');
    myinput.className = 'mycheckbox';
    myinput.type = 'checkbox';
    if (todo.completed) {
      myinput.setAttribute('checked', '');
    }

    myinput.onchange = (e) => {
      if (e.target.checked) {
        mytodos[index].completed = true;
        e.target.parentNode.children[1].classList.add('border');
      } else {
        mytodos[index].completed = false;
        e.target.parentNode.children[1].classList.remove('border');
      }
      mysaveToLocalStorage(mytodos);
    };

    todo2ItemLeft.appendChild(myinput);

    const mylistItemPara = document.createElement('p');
    mylistItemPara.classList.add('move-row');
    if (todo.completed) {
      mylistItemPara.classList.add('border');
    } else {
      mylistItemPara.classList.remove('border');
    }
    mylistItemPara.innerText = todo.description;
    todo2ItemLeft.appendChild(mylistItemPara);

    const myInputing = document.createElement('input');
    myInputing.className = 'show-none';
    myInputing.type = 'text';
    myInputing.value = todo.description;
    myInputing.addEventListener('keys', (e) => {
      if (e.key === 'ENTER') {
        mytodoItem.classList.toggle('background-focus');
        myupdateTodo(mytodos, index, e.target.value);
        mydisplayTodoList();
      }
    });
    todo2ItemLeft.appendChild(myInputing);

    mytodoItem.appendChild(todo2ItemLeft);

    const mytododeleteIcon = document.createElement('span');
    mytododeleteIcon.className = 'show-none';
    mytododeleteIcon.innerHTML = 'DELETE';
    mytododeleteIcon.addEventListener('click', () => {
      mydeleteTodoItem(mytodos, index);
      mydisplayTodoList();
    });
    mytodoItem.appendChild(mytododeleteIcon);

    const myplentitodolist = document.createElement('span');
    myplentitodolist.className = 'material-symbols-outlined';
    myplentitodolist.innerHTML = 'more_vert';
    myplentitodolist.addEventListener('click', () => {
      myplentitodolist.className = 'show-none';
      mytododeleteIcon.className = 'material-symbols-outlined';

      mylistItemPara.className = 'show-none';
      myInputing.className = 'move-row';
      mytodoItem.classList.toggle('background-focus');
      myInputing.focus();
    });
    mytodoItem.appendChild(myplentitodolist);
    todosList.appendChild(mytodoItem);

    const mycleartodoList = document.getElementById('myclearlist');
    mycleartodoList.addEventListener('click', () => {
      mydeleteAllCompleted(mytodos);
      mydisplayTodoList();
    });
  });
};

window.addEventListener('load', () => {
  const addmyNewTodoel = document.getElementById('myaddnewtodo');
  addmyNewTodoel.addEventListener('click', () => {
    myaddTodo();
    mydisplayTodoList();
  });

  const todomyInput = document.getElementById('todomyinput');
  todomyInput.addEventListener('keys', (e) => {
    if (e.key === 'ENTER') {
      myaddTodo();
      mydisplayTodoList();
    }
  });

  mydisplayTodoList();
});
