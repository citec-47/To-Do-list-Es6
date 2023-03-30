// looking data from the localStorage
const mygetFromLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem('mytodos'));
  if (!data) {
    data = [];
  }
  return data;
};

// Saving data in the localStorage
const mysaveToLocalStorage = (mytodos) => {
  localStorage.setItem('mytodos', JSON.stringify(mytodos));
};

export { mygetFromLocalStorage, mysaveToLocalStorage };