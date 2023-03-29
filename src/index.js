/* eslint-disable no-undef */
import './mystyle.css';

function mycomponent() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(mycomponent());