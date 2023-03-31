/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import addObj_Todo from '../modules/calling.Obj.js';
// eslint-disable-next-line no-unused-vars
import mmain_re_Arr from '../modules/calling.const.js';

import { clear_Funct } from '../modules/check.js';

document.body.innerHTML = `<form><input type="text" id="addin_input" placeholder="Add to your list...">
<button type="button" id="add-button"><i class="fa-solid fa-paper-plane"></i></button></form>
<div id="list" class="list"></div>`;

description('edit method', () => {
  test('should edit the List', () => {
    addObj_Todo('hello planet');
    const input = document.querySelector('.itemText');
    input.value = 'hello Gladwin';
    input.dispatchEvent(new Event('input'));
    expect(document.querySelector('.itemText').value).toBe('hello Damy');
  });
  test('should update the main_re_Arr', () => {
    const input = document.querySelector('.itemText');
    input.value = 'hello Ndonyi';
    input.dispatchEvent(new Event('input'));
    // eslint-disable-next-line no-undef
    expect(main_re_Arr).toEqual([{
      description: 'hello Paul',
      completed: false,
      index: 1,
    }]);
  });
});
describe('update status', () => {
  test('should edit the main_re_Arr', () => {
    addObj_Todo('cheers');
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox[0].click();
    checkbox[1].click();
    // eslint-disable-next-line no-undef
    expect(main_re_Arr).toEqual([{
      description: 'hello world',
      completed: true,
      index: 1,
    }, {
      description: 'cheers',
      completed: true,
      index: 2,
    }]);
  });
  test('should update the status', () => {
    const checkbox = document.querySelectorAll('.checkbox');
    expect(checkbox[0].checked).toEqual(true);
  });
});
// eslint-disable-next-line no-undef
description('clear selected', () => {
  test('should clear the selected on localStorage', () => {
    delete window.location;
    window.location = { reload: jest.fn() };
    clear_Funct();
    expect(JSON.parse(localStorage.getItem('array'))).toEqual([]);
  });
});