/* eslint-disable camelcase */
import storage from './call.storage.js';
import main_re_Arr from './calling.const.js';
// eslint-disable-next-line camelcase
import check_to_Funct from './calling.check.js';

// eslint-disable-next-line camelcase
const add_my_Html = () => {
  const list_to_Do = document.getElementById('list');
  let index = 0;
  list_to_Do.innerHTML = '';
  for (let i = 0; i < main_re_Arr.length; i += 1) {
    main_re_Arr[i].index = i + 1;
    storage();
  }
  const arrMain = JSON.parse(localStorage.getItem('array'));
  for (let i = 0; i < arrMain.length; i += 1) {
    for (let j = 0; j < arrMain.length; j += 1) {
      if (arrMain[j].index === i + 1) {
        index = j;
        break;
      }
    }
    const div = document.createElement('div');
    div.id = 'item';
    div.className = 'item';
    list_to_Do.appendChild(div);
    const form_todo = document.createElement('form');
    form_todo.className = 'formLi';
    div.appendChild(form_todo);
    const checkbox_todo = document.createElement('input');
    checkbox_todo.className = 'checkbox';
    checkbox_todo.type = 'checkbox';
    checkbox_todo.checked = arrMain[index].completed ? 'checked' : '';
    form_todo.appendChild(checkbox_todo);
    const input = document.createElement('input');
    input.className = 'itemText';
    input.value = `${arrMain[index].description}`;
    input.type = 'text';
    input.id = 'itemText';
    form_todo.appendChild(input);
    const button_todo = document.createElement('button');
    button_todo.className = 'button-remove';
    button_todo.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    div.appendChild(button_todo);
    button_todo.addEventListener('click', () => {
      button_todo.innerHTML = '<i class="fa-solid fa-trash"></i>';
      main_re_Arr.splice(i, 1);
      storage();
      add_my_Html();
    });
    input.addEventListener('input', () => {
      main_re_Arr[i].description = input.value;
      storage();
    });
    checkbox_todo.addEventListener('click', () => {
      check_to_Funct(i);
      add_my_Html();
    });
  }
  document.getElementById('add-input').value = '';
};

// eslint-disable-next-line camelcase
export default add_my_Html;
