/* eslint-disable camelcase */
import addObj_Todo from './calling.Obj.js';

const btnAdd = () => {
  const inputAdd = document.getElementById('add-input').value;

  addObj_Todo(inputAdd);
};

export default btnAdd;