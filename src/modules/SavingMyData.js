// Fetch/GET data/TODO from the localStorage
const getmyDataFromMydatabase = () => {
  let data = JSON.parse(localStorage.getItem('Todo'));
  if (!data) {
    data = [];
  }
  return data;
};

// Saves data/ TODO in the localStorage
const storeMydayInMyDataBase = (Todo) => {
  localStorage.setItem('Todo', JSON.stringify(Todo));
};

export { getmyDataFromMydatabase, storeMydayInMyDataBase };