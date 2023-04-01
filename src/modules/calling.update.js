/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */

import { mytasks, lisNot } from '../index.js';
import { shop } from './call.storage.js';

export const myupdate = (item, number) => {
  const test = mytasks.some((tester) => {
    if (tester.descripts.toLowerCase() === item.toLowerCase()) return true;
    return false;
  });
  if (test) {
    lisNot.style.display = 'block';
    lisNot.innerHTML = "Sorry! You can't add the same task twice";
  } else {
    lisNot.style.display = 'none';
    mytasks[number].descripts = item;
    shop();
  }
};
