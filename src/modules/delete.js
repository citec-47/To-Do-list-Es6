/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */

import { mytasks, funyTasks, displaymyTasksCaller } from '../index.js';
import { shop } from './local-storage.js';

export const erase = (a) => {
  if (mytasks.length === 1) {
    mytasks.pop();
    shop();
    funyTasks.innerHTML = '';
  } else {
    const newTasks = mytasks.filter((elem) => elem.index - 1 !== a);
    displaymyTasksCaller(newTasks);
  }
};
