/* eslint-disable camelcase */
import storage from './call.storage.js';
import mainArr from './calling.const.js';
// eslint-disable-next-line camelcase
import add_my_Html from './caling.html.js';

const addObj_Todo = (value) => {
  let object = {};
  object = {
    description: value,
    completed: false,
    index: 0,
  };
  mainArr.push(object);
  storage();
  add_my_Html();
};

export default addObj_Todo;
