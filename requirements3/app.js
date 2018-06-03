let cats = ["Dio", "Balu", "MiuMiu", "Brandon", "Dylan", ];

// Let's loop over the cats in our array
for (let i = 0; i < cats.length; i++) {

  // This is the cat we're on...
  let cat = cats[i];

  // We're creating a DOM element for the cats
  let elem = document.createElement('button');
  elem.textContent = cat;
  elem.classList.add(cat);

  let catId;
  let catClicks = "0";
  let display = document.querySelector('.display');
  // ... and when we click, alert the value of `cat`
  elem.addEventListener('click', (function(catCopy) {
    return function() {
      display.innerHTML = `<h2>${catCopy}</h2>`;
      display.insertAdjacentHTML("beforeend", `<img src="images/${catCopy}.jpg" alt="A picture of ${catCopy}">`);
      display.insertAdjacentHTML("beforeend", `<p>Number of clicks: <span id="${catCopy}Clicks">${catClicks}</span> </p>`);

      let catId = document.querySelector("img");
      catClicks = Number(document.getElementById(`${catCopy}Clicks`).innerText);
      catId.addEventListener('click', function() {
        catClicks++;
        document.getElementById(`${catCopy}Clicks`).innerText = catClicks;
      });
    };
  })(cat));

  document.querySelector('.list').appendChild(elem);
};