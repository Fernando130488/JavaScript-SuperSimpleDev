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

/*12cd****************************************************************************/

function updateButton () {
  let button = document.querySelector('.change-Button')
  
  button.innerHTML = 'Loading...';

  setTimeout(function() {
    button.innerHTML = 'Finished';
  }, 1000);
}

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