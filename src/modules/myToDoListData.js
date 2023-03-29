import { getmyDataFromMydatabase, storeMydayInMyDataBase } from './SavingMyData.js';

// adding new items to my todo list
const addmyTaskTodo = () => {
  const Todo = getmyDataFromMydatabase();
  const mynewTaskTodo = document.getElementById('todoMyinput');
  const newTaskTodo = {
    descriptiveinfor: mynewTaskTodo.value,
    completed: false,
    indexx: Todo.length + 1,
  };
  mynewTaskTodo.value = '';
  Todo.push(newTaskTodo);
  storeMydayInMyDataBase(Todo);
};

// writing todo items afteredidtiong
const updateTaskTodo = (Todo, indexx, value) => {
  Todo[indexx].descriptiveinfor = value;

  storeMydayInMyDataBase(Todo);
};

// Deleting one item  from my Todo list
const deletingMyTodoItem = (Todo, indexx) => {
  const newTaskTodoAll = Todo.filter((todo, innerIndex) => indexx !== innerIndex);
  for (let i = 0; i < newTaskTodoAll.length; i += 1) {
    newTaskTodoAll[i].indexx = i + 1;
  }
  storeMydayInMyDataBase(newTaskTodoAll);
};

// Deleting All Items in my Todo list
const deleteAllmyCompleted = (Todo) => {
  const newTaskTodoAll = Todo.filter((todo) => todo.completed !== true);
  for (let i = 0; i < newTaskTodoAll.length; i += 1) {
    newTaskTodoAll[i].indexx = i;
  }
  storeMydayInMyDataBase(newTaskTodoAll);
};

export {
  addmyTaskTodo,
  storeMydayInMyDataBase,
  getmyDataFromMydatabase,
  deletingMyTodoItem,
  deleteAllmyCompleted,
  updateTaskTodo,
};