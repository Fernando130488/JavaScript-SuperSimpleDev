/*11a****************************************************************************/

const nums = [10, 20, 30];
console.log(nums);

nums[2] = 99;
console.log(nums);

/*11b****************************************************************************/

function getLastValue (array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  console.log(lastValue);
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

/*11c****************************************************************************/

function arraySwap (array) {
  console.log(array);
  const lastIndex = array.length - 1;

  const firstValue = array[0];
  const lastValue = array[lastIndex];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

/*11d****************************************************************************/

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*11e****************************************************************************/

for (let i = 5; i >= 0; i--){
  console.log(i);
}

/*11f****************************************************************************/

i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}

/*11g****************************************************************************/

let array = [1, 2, 3];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  let number = array[i] + 1;
  newArray.push(number);
}

console.log(newArray);

/*11h****************************************************************************/

function addOne (array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i] + 1;
    newArray.push(number);
  }

  console.log(newArray);
}

addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

/*11i****************************************************************************/

function addNum (array, num) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i] + num;
    newArray.push(number);
  }

  console.log(newArray);
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

/*11j****************************************************************************/

function addNum (array1, array2) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let number = array1[i] + array2[i];
    newArray.push(number);
  }

  console.log(newArray);
}

addNum([1, 1, 2], [1, 1, 3]);
addNum([1, 2, 3], [4, 5, 6]);

/*11k****************************************************************************/

function countPositive (nums) {
  let greater = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      greater++;
    }
  }

  console.log(greater);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

/*11lm****************************************************************************/

function minMax (nums) {
  let max;
  let min;

  if (nums.length === 0) {
    return console.log(null);
  }

  min = Math.min(...nums);
  max = Math.max(...nums);

  console.log(max, min);
}

minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([]);
minMax([3]);

/*11n****************************************************************************/

function countWords(words) {
  let count = {};

  for (let i = 0; i < words.length; i++) {
    let name = words[i];

    if (count[name]) {
      count[name]++;
    } else {
      count[name] = 1;
    }
  }

  console.log(count);
}

countWords(['apple', 'grape', 'apple', 'apple']);

/*11op****************************************************************************/

function searchCheck (array) {
  let word;
  let position;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      position = i;
      word = 'search';
      break;
    }
  }

  if (word === 'search') {
    console.log(position);
  } else {
    console.log(-1);
  }
}

searchCheck(['hello', 'world', 'search', 'good']);
searchCheck(['not', 'found']);
searchCheck(['hello', 'world', 'search', 'good', 'search']);

/*11q****************************************************************************/

function findIndex (array, word) {
  let check;
  let position;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      position = i;
      check = word;
      break;
    }
  }

  if (check === word) {
    console.log(position);
  } else {
    console.log(-1);
  }
}

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');


/*11rstu****************************************************************************/

function removeEgg (foods) {
  foods.reverse();

  let list = [];
  let eggCount = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggCount < 2) {
      eggCount++;
      continue;
    } else {
      list.push(foods[i]);
    }
  }

  list.reverse();

  console.log(list);
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

/*11v****************************************************************************/

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i);
  }
}

/*11w****************************************************************************/

function unique (array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }

  console.log(newArray);
}

unique(['green', 'red', 'blue', 'red']);
unique(['red', 'green', 'red', 'green']);

/*11x****************************************************************************/

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        localStorage.setItem('todoList', JSON.stringify(todoList));
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

  localStorage.setItem('todoList', JSON.stringify(todoList));
}