import './style.css';

const arrayOfObjects = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Clean the entire building',
    completed: false,
    index: 1,
  },
  {
    description: 'Doing laundry',
    completed: false,
    index: 2,
  },
];

const myTodoListProjectone = document.querySelector('.dailyTaskOfTodO');

const myToDoComplextion = () => {
  arrayOfObjects.forEach((taskOfTodo) => {
    const list = document.createElement('li');
    list.className = 'mylistItem';
    list.innerHTML = `<div class="showingMycontent">
                        <input type="mycheckbox" id="${taskOfTodo.index}" class="check">
                        <p class="description">${taskOfTodo.description}</p>
                        <p class="myListholder"><i class="fa-solid fa-ellipsis-vertical"></i></p>
                    </div><br>
                    <hr>`; myTodoListProjectone.appendChild(list);
  });
};
myToDoComplextion();