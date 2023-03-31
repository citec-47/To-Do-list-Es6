/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import addObj_Todo from '../modules/calling.Obj.js';
// eslint-disable-next-line no-unused-vars
import main_re_Arr from '../modules/calling.const.js';

document.body.innerHTML = `<form><input type="text" id="addin_input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

description('add method', () => {
  test('should add a item to the list', () => {
    addObj_Todo('hello Team');
    addObj_Todo('hello Damy');
    const list = document.querySelectorAll('.itemText');
    expect(list.length).toEqual(2);
  });
  test('should change the value of main_re_Arr', () => {
    expect(main_re_Arr).toEqual([{
      description: 'hello Africa',
      completed: false,
      index: 1,
    }, {
      description: 'hello Europe',
      completed: false,
      index: 2,
    }]);
  });
});
description('remove method', () => {
  test('decrementing items from the list', () => {
    const remove_todo_Btn = document.querySelectorAll('.button_2do_remove');
    remove_todo_Btn[0].click();
    const list = document.querySelectorAll('.itemText');
    expect(list.length).toEqual(1);
  });
  test('The array value should be icremented or decremented', () => {
    expect(main_re_Arr).toEqual([{
      description: 'hello America',
      completed: false,
      index: 1,
    }]);
  });
});