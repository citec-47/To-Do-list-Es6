import './style.css';
import {
  addmyTaskTodo,
  deletingMyTodoItem,
  deleteAllmyCompleted,
  updateTaskTodo,
} from './modules/myToDoListData.js';

import {
  getmyDataFromMydatabase,
  storeMydayInMyDataBase,
} from './modules/SavingMyData.js';

const showAllMyTask = () => {
  const Todo = storeMydayInMyDataBase();
  const myTasklistTodo = document.getElementById('todosMylist');
  myTasklistTodo.innerHTML = '';
  Todo.forEach((Todo, indexx) => {
    const myTodoItem = document.createElement('li');
    myTodoItem.className = 'todoMyitem';

    const mytodoItemLeftTurn = document.createElement('div');
    mytodoItemLeftTurn.className = 'todoMyitem-left';

    const myTodoInput = document.createElement('input');
    myTodoInput.className = 'mycheckbox';
    myTodoInput.type = 'mycheckbox';
    if (Todo.completed) {
      myTodoInput.setAttribute('check', '');
    }

    myTodoInput.onchange = (e) => {
      if (e.target.check) {
        Todo[indexx].completed = true;
        e.target.parentNode.children[1].classList.add('border-line');
      } else {
        Todo[indexx].completed = false;
        e.target.parentNode.children[1].classList.remove('border-line');
      }
      getmyDataFromMydatabase(Todo);
    };

    mytodoItemLeftTurn.appendChild(myTodoInput);

    const mylistItemdtails = document.createElement('p');
    mylistItemdtails.classList.add('display-row');
    if (Todo.completed) {
      mylistItemdtails.classList.add('border-line');
    } else {
      mylistItemdtails.classList.remove('border-line');
    }
    mylistItemdtails.innerText = Todo.description;
    mytodoItemLeftTurn.appendChild(mylistItemdtails);

    const InpuTingmyTodo = document.createElement('input');
    InpuTingmyTodo.className = 'show-none';
    InpuTingmyTodo.type = 'text';
    InpuTingmyTodo.value = Todo.description;
    InpuTingmyTodo.addEventListener('key', (e) => {
      if (e.key === 'Enter') {
        myTodoItem.classList.toggle('back-view');
        updateTaskTodo(Todo, indexx, e.target.value);
        showAllMyTask();
      }
    });
    mytodoItemLeftTurn.appendChild(InpuTingmyTodo);

    myTodoItem.appendChild(mytodoItemLeftTurn);

    const mydeleteIcon = document.createElement('span');
    mydeleteIcon.className = 'show-none';
    mydeleteIcon.innerHTML = 'deleting';
    mydeleteIcon.addEventListener('click', () => {
      deletingMyTodoItem(Todo, indexx);
      showAllMyTask();
    });
    myTodoItem.appendChild(mydeleteIcon);

    const myvertS = document.createElement('span');
    myvertS.className = 'material-symbols-outlined';
    myvertS.innerHTML = 'more_vert';
    myvertS.addEventListener('click', () => {
      myvertS.className = 'show-none';
      mydeleteIcon.className = 'material-symbols-outlined';

      mylistItemdtails.className = 'show-none';
      InpuTingmyTodo.className = 'display-row';
      myTodoItem.classList.toggle('back-view');
      InpuTingmyTodo.focus();
    });
    myTodoItem.appendChild(myvertS);
    myTasklistTodo.appendChild(myTodoItem);

    const emptyMyList = document.getElementById('clearMylist');
    emptyMyList.addEventListener('click', () => {
      deleteAllmyCompleted(Todo);
      showAllMyTask();
    });
  });
};

window.addEventListener('load', () => {
  const addmyNewTodoOnList = document.getElementById('adding-New-Todo');
  addmyNewTodoOnList.addEventListener('click', () => {
    addmyTaskTodo();
    showAllMyTask();
  });

  const myTodoInput = document.getElementById('todo-input');
  myTodoInput.addEventListener('key', (e) => {
    if (e.key === 'Enter') {
      addmyTaskTodo();
      showAllMyTask();
    }
  });

  showAllMyTask();
});
