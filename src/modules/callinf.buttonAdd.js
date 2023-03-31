/* eslint-disable camelcase */
import addObj_Todo from './calling.Obj.js';

const btnAdd = () => {
  const inputAdd = document.getElementById('addin_input').value;

  addObj_Todo(inputAdd);
};

export default btnAdd;