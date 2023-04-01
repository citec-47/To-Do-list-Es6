/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */

import {
  mytasks, toodoo, lisNot, funyTasks, displayMYtasks,
} from '../index.js';

const addnewTask = () => {
  if (toodoo.value) {
    const test = mytasks.some((tested) => {
      if (tested.descripts.toLowerCase() === toodoo.value.toLowerCase()) return true;
      return false;
    });
    if (test) {
      lisNot.style.display = 'block';
      lisNot.innerHTML = 'Sorry! You can\'t add the same task twice';
    } else {
      lisNot.style.display = 'none';
      const task = {
        descripts: toodoo.value,
        index: mytasks.length + 1,
        completed: false,
      };
      mytasks.push(task);
      toodoo.value = '';
      funyTasks.innerHTML = '';
      displayMYtasks();
    }
  } else {
    lisNot.style.display = 'block';
    lisNot.innerHTML = 'Sorry! You can\'t add an empty task';
  }
};

export { addnewTask };