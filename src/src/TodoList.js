const myAdd = document.getElementById('add');
const myTitle = document.getElementById('input');
const myListHolder = document.getElementById('listholder');

let myData = [];
const mySaveData = (myData) => {
  localStorage.setItem('data', JSON.stringify(myData));
};
const myDataGet = JSON.parse(localStorage.getItem('data'));
if (myDataGet != null) {
  myData = myDataGet;
}
/// my Display function
const DisplayData = () => {
  let myDataDisplay = '';
  myData.forEach((user, i) => {
    myDataDisplay += `<div class="myitems"><li class="my-list"><input type="checkbox" class="checkbox" ${user.completed}>
       <input type="text" id="myPrintText" class='printdata' value='${user.name}'></input></li><i class="material-icons" id="mydotico" onclick="myDataRemove(${i})">delete_forever</i></div>`;
  });
  myListHolder.innerHTML = myDataDisplay;
};

DisplayData();

const myDataAdd = () => {
  const myIndex = myData.length + 1;
  myData.push({ name: myTitle.value, completed: false, index: myIndex });
  mySaveData(myData);
  DisplayData();
  myTitle.value = '';
};

myAdd.addEventListener('click', myDataAdd);
// my enter press button function
myTitle.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    myDataAdd();
  }
});
/* eslint-disable 
*/ // my remove function 
myDataRemove = (id) => {
  myData.splice(id, 1);
  mySaveData(myData);
  DisplayData();
  for(let i = 0; i <myData.length; i++) {
    myData[i].index = i + 1;
    mySaveData(myData);
   } 
};
const myDataPrint = document.querySelectorAll('.printdata')
const checkbox = document.querySelectorAll('.checkbox');
for(let i = 0; i < myData.length; i+=1) {

myCheckBoxValue = () => {
 if(checkbox[i].checked) {
  console.log('checkbox is on')
  myData[i].completed = `checked`;
  myDataPrint[i].style.textDecorationLine = 'line-through';
  mySaveData(myData);


 } else {
  console.log('check is off')
  myData[i].completed = `unchecked`;
  myDataPrint[i].style.textDecorationLine = 'none';
  mySaveData(myData);

 }
};
checkbox[i].addEventListener('click', myCheckBoxValue)
}



for(let i = 0; i < myData.length; i+=1) {
  if(myData[i].completed ===  `checked`) {
    myDataPrint[i].style.textDecorationLine = 'line-through';
  } else {
    myDataPrint[i].style.textDecorationLine = 'none';
  }
}

/* const myClearTask = document.getElementById('mycleartast');
for(let i = 0; i < myData.length; i+=1) {
myDataClear = () => {
 if(myData[i].completed === `checked`) {
  let mySplice = myData.splice(1,2,3, 1)
  mySaveData(myData);

 }
}
myClearTask.addEventListener('click', myDataClear)
} */