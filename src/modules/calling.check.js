/* eslint-disable camelcase */
import storage from './call.storage.js';
import main_re_Arr from './calling.const.js';

const check_my_Funct = (index) => {
  if (main_re_Arr[index].completed === false) {
    main_re_Arr[index].completed = true;
  } else if (main_re_Arr[index].completed === true) {
    main_re_Arr[index].completed = false;
  }
  storage();
};

const clear_my_Funct = () => {
  const array_Main = main_re_Arr.filter((obj) => obj.completed === false);
  localStorage.setItem('array', JSON.stringify(array_Main));
  window.location.reload();
};

export default check_my_Funct;
export { clear_my_Funct };
