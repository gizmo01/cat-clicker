const elem = document.getElementById('my-elem');
let totalClicks = Number(document.getElementById('clicks').innerText);
elem.addEventListener('click', function() {
  //the element has been clicked... do stuff here
  totalClicks++;
  document.getElementById('clicks').innerText = totalClicks;
}, false);