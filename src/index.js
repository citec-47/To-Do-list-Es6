import './index.css';
import addHtml from './modules/caling.html.js';
import btnAdd from './modules/callinf.buttonAdd.js';
import refreshBtn from './modules/calling.reload.js';
// eslint-disable-next-line camelcase
import { clear_my_Funct } from './modules/calling.check.js';

const buttonAdd = document.getElementById('add-button');
buttonAdd.addEventListener('click', btnAdd);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', refreshBtn);
const clear = document.getElementById('clear');
clear.addEventListener('click', clear_my_Funct);
addHtml();
