/*10c****************************************************************************/

const button = document.querySelector('.js-Button');
console.log(button.classList.contains('js-Button'));

/*10f*****************************************************************************

function onoff (button) {
  const onoff = document.querySelector(`.${button}-Button`);
  
  if (onoff.classList.contains('is-Toggled') === false) {
    onoff.classList.add('is-Toggled');
  } else if (onoff.classList.contains('is-Toggled') === true) {
    onoff.classList.remove('is-Toggled');
  }
}********************************************************************************/

/*10g****************************************************************************/

function onoff (button1, button2, button3) {
  let onoff1 = document.querySelector(`.${button1}-Button`);
  let onoff2 = document.querySelector(`.${button2}-Button`);
  let onoff3 = document.querySelector(`.${button3}-Button`);
  
  if (onoff1.classList.contains('is-Toggled') === false && onoff2.classList.contains('is-Toggled') === false && onoff3.classList.contains('is-Toggled') === false) {
    onoff1.classList.add('is-Toggled');
  } else if (onoff1.classList.contains('is-Toggled') === true) {
    onoff1.classList.remove('is-Toggled');
  }
}

/*10h****************************************************************************/

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const error = document.querySelector('.error');
  let cost = Number(inputElement.value);

  if (cost < 40 && cost > 0) {
    cost = cost + 10;

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
    error.style.display = 'none';
  } else if (cost <= 0) {
    error.style.display = 'flex';
  }
}

/*10i****************************************************************************/

let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.display').innerHTML = `${calculation}`;

function updateCalculation (value) {
  if (value === '=') {
    calculation = eval(calculation);
  } else if ('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'){
    calculation += value;
  }

  localStorage.setItem('calculation', calculation);

  document.querySelector('.display').innerHTML = `${calculation}`;
}