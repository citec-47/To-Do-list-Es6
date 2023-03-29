import './style.css';

const myListtasks = [
  {
    description: 'Going to church',
    complated: false,
    index: 1,
  },
  {
    description: 'wash dresses',
    completed: false,
    index: 2,
  },
  {
    description: 'clean the compound',
    completed: false,
    index: 3,
  },
];

const myListOfALLmyTodoTask = document.querySelector('.myListOfALLmyTodoTask');

const disPlayMyListtodo = () => {
  for (let i = 0; i < myListtasks.length; i += 1) {
    const myTaskt = myListtasks[i];
    myListOfALLmyTodoTask.innerHTML += `<li class="mytask row_one">
    <input type="checkbox" id="check" name="check" >
    <label class="label" id="label" for="check">${myTaskt.description}</label>
    <span>&#8285;</span>
   </li>`;
  }
};

window.onload = disPlayMyListtodo();