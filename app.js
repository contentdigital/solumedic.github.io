
const numeroHoras1 = document.getElementById ('numeroHoras1');
const numeroHoras2 = document.getElementById ('numeroHoras2');
const numeroHoras3 = document.getElementById ('numeroHoras3');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', function() {
    let randomNumber = getRandomIntInclusive(15, 30);



  numeroHoras1.innerHTML = randomNumber
  numeroHoras2.innerHTML = randomNumber
  numeroHoras3.innerHTML = randomNumber

 
  });

 