/*12ab****************************************************************************/

let add = function () {
  console.log(2+3);
}

add();
add();

function runTwice (fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log('12b');
});

runTwice(add);

/*12cdpq****************************************************************************/


document.querySelector('.change-Button').addEventListener('click', () => {
  let button = document.querySelector('.change-Button');
  button.innerHTML = 'Loading...';

  setTimeout(() => {
    button.innerHTML = 'Finished';
  }, 1000);
})

/*12ef****************************************************************************/

let timeoutId;

function addCart () {
  const cart = document.querySelector('.add-Mensage');
  cart.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    cart.innerHTML = '';
  }, 2000);
}

/*12ghipq****************************************************************************/

let messages = 0;

let addButton = document.querySelector('.add-button').addEventListener('click', () => messages++);
let removeButton = document.querySelector('.remove-button').addEventListener('click', () => messages--);

setInterval(() => {
  if (document.title === '12-Exercises' && messages > 0) {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = '12-Exercises';
  }
}, 1000);

/*12jk****************************************************************************/

let multiply = (num, num2) => num * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

/*12l****************************************************************************/

function countPositive (nums) {
  let greater = 0;

  nums.forEach((num) => {
    if (num > 0) {
      greater++;
    }
  });

  return console.log(greater);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

/*12m****************************************************************************/

function addNum (array, num) {
  return array.map(value => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

/*12no****************************************************************************/

function removeEgg (foods) {
  let removedEgg = 0;
  return foods.filter((food) => {

    if (food === 'egg' && removedEgg <2) {
      removedEgg++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
