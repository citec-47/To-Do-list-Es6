/* eslint-disable  import/no-cycle */
import { displaymyTasksCaller, mytasks, funyTasks } from '../index.js';
import { shop } from './call.storage.js';

export const view = (index, a) => {
  if (a.checked) {
    mytasks[index].completed = true;
  } else {
    mytasks[index].completed = false;
  }
  shop();
};

export const cleaning = () => {
  if (mytasks.length === 0) return;
  if (mytasks.length === 1) {
    if (mytasks[0].completed === true) {
      mytasks.pop();
      shop();
      funyTasks.innerHTML = '';
    }
  } else {
    const filt = mytasks.filter((verify) => verify.completed === false);
    displaymyTasksCaller(filt);
  }
};
