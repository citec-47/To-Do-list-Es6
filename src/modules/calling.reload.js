/* eslint-disable camelcase */
import storAge from './call.storage.js';
import main_re_Arr from './calling.const.js';
// eslint-disable-next-line no-unused-vars
import add_my_Html from './caling.html.js';

const refreshin_Btn = () => {
  main_re_Arr.splice(0, main_re_Arr.length);
  storAge();
  add_my_Html();
};

export default refreshin_Btn;
