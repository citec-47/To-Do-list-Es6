/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import main_re_Arr from './calling.const.js';

const stoRAge = () => {
  localStorage.setItem('array', JSON.stringify(main_re_Arr));
};
export default stoRAge;
