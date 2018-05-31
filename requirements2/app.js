const elem1 = document.getElementById('my-elem1');
let cat1name = "Dio";
let cat2name = "Balu";

let totalClicks1 = Number(document.getElementById('clicks1').innerText);
document.querySelector('.cat1').innerText = cat1name;
document.querySelector('.cat2').innerText = cat2name;

elem1.addEventListener('click', function() {
  //the element has been clicked... do stuff here
  totalClicks1++;
  document.getElementById('clicks1').innerText = totalClicks1;
}, false);

const elem2 = document.getElementById('my-elem2');
let totalClicks2 = Number(document.getElementById('clicks2').innerText);

elem2.addEventListener('click', function() {
  //the element has been clicked... do stuff here
  totalClicks2++;
  document.getElementById('clicks2').innerText = totalClicks2;
}, false);