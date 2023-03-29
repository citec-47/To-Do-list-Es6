const addInIt = document.getElementById('addIng');
const myTodoTitle = document.getElementById('input');
const myDsisPlaydeList = document.getElementById('displayedlist');

let ShowingmyData = [];
const myPreserveData = (ShowingmyData) => {
  localStorage.setItem('data', JSON.stringify(ShowingmyData));
};
const myDataGet = JSON.parse(localStorage.getItem('data'));
if (myDataGet != null) {
  ShowingmyData = myDataGet;
}
///  function
const ShowiingMyData = () => {
  let ShowiingMyData = '';
  ShowingmyData.forEach((users, i) => {
    ShowiingMyData += `<div class="myitem"><li class="mytolist"><input type="mycheckbox" class="mycheckbox" ${users.completed}>
       <input type="text" id="sendOutMyData" class='sendOutMyData' value='${users.name}'></input></li><i class="material-icons" id="mydotico" onclick="myDataRemove(${i})">delete_all</i></div>`;
  });
  myDsisPlaydeList.innerHTML = ShowiingMyData;
};

ShowiingMyData();

const myDataAdded = () => {
  const myTodoIndex = ShowingmyData.length + 1;
  ShowingmyData.push({ name: myTodoTitle.value, completed: false, indexx: myTodoIndex });
  myPreserveData(ShowingmyData);
  ShowiingMyData();
  myTodoTitle.value = '';
};

addInIt.addEventListener('click', myDataAdded);
// my enter press button function
myTodoTitle.addEventListener('keytouch', (event) => {
  if (event.key === 'Enter') {
    myDataAdded();
  }
});
/* eslint-disable 
*/ // my remove function 
myDataRemove = (id) => {
  ShowingmyData.splice(id, 1);
  myPreserveData(ShowingmyData);
  ShowiingMyData();
  for(let i = 0; i <ShowingmyData.length; i++) {
    ShowingmyData[i].indexx = i + 1;
    myPreserveData(ShowingmyData);
   } 
};
const sendOutMyData = document.querySelectorAll('.sendOutMyData')
const mycheckbox = document.querySelectorAll('.mycheckbox');
for(let i = 0; i < ShowingmyData.length; i+=1) {

  myBoxValue= () => {
 if(mycheckbox[i].checked) {
  console.log('checkbox is on')
  ShowingmyData[i].completed = `check`;
  sendOutMyData [i].style.textDecorationLine = 'border-line';
  myPreserveData(ShowingmyData);


 } else {
  console.log('check off')
  ShowingmyData[i].completed = `uncheck`;
  sendOutMyData [i].style.textDecorationLine = 'none';
  myPreserveData(ShowingmyData);

 }
};
mycheckbox[i].addEventListener('click', myBoxValue)
}



for(let i = 0; i < ShowingmyData.length; i+=1) {
  if(ShowingmyData[i].completed ===  `check`) {
    sendOutMyData [i].style.textDecorationLine = 'border-line';
  } else {
    sendOutMyData [i].style.textDecorationLine = 'none';
  }
}