import { mygetFromLocalStorage, mysaveToLocalStorage } from './savingData.js';

// Adding new TODO item
const myaddTodo = () => {
  const mytodos = mygetFromLocalStorage();
  const mynewTodoDiscription = document.getElementById('todomyinput');
  const mynewTodo = {
    description: mynewTodoDiscription.value,
    completed: false,
    index: mytodos.length + 1,
  };
  mynewTodoDiscription.value = '';
  mytodos.push(mynewTodo);
  mysaveToLocalStorage(mytodos);
};

// Updating  TODO item one at a time
const myupdateTodo = (mytodos, index, value) => {
  mytodos[index].description = value;

  mysaveToLocalStorage(mytodos);
};

// Delete  TODO one at a time from the list
const mydeleteTodoItem = (mytodos, index) => {
  const takingnewTodos = mytodos.filter(
    (todo, innerIndex) => index !== innerIndex,
  );
  for (let i = 0; i < takingnewTodos.length; i += 1) {
    takingnewTodos[i].index = i + 1;
  }
  mysaveToLocalStorage(takingnewTodos);
};

// Deleting all completed todo Items on the list
const mydeleteAllCompleted = (mytodos) => {
  const takingnewTodos = mytodos.filter((todo) => todo.completed !== true);
  for (let i = 0; i < takingnewTodos.length; i += 1) {
    takingnewTodos[i].index = i;
  }
  mysaveToLocalStorage(takingnewTodos);
};

export {
  myaddTodo,
  mysaveToLocalStorage,
  mygetFromLocalStorage,
  mydeleteTodoItem,
  mydeleteAllCompleted,
  myupdateTodo,
};
