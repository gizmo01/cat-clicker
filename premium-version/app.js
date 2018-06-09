// M O D E L - only data is present here in the model
let model = {
  currentCat: null,
  cats: [{
      name: "Dio",
      clicks: 0,
      src: "images/Dio.jpg"
    },
    {
      name: "Balu",
      clicks: 1,
      src: "images/Balu.jpg"
    },
    {
      name: "MiuMiu",
      clicks: 2,
      src: "images/MiuMiu.jpg"
    },
    {
      name: "Brandon",
      clicks: 3,
      src: "images/Brandon.jpg"
    },
    {
      name: "Dylan",
      clicks: 4,
      src: "images/Dylan.jpg"
    }
  ]
};

// O C T O P U S
let octopus = {
  init: function() {
    listView.render();
  },
  getCats: function() {
    return model.cats;
  },
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  addClicks: function() {
    model.currentCat.clicks++
  }
};


// L I S T V I E W
let listView = {
  render: function() {
    let catArr = octopus.getCats();
    for (cat of catArr) {
      let elem = document.createElement('button');
      elem.textContent = cat.name;
      document.querySelector('.list').appendChild(elem);
      elem.addEventListener('click', (function(cat) {
        return function() {
          octopus.setCurrentCat(cat);
          catView.render();
        };
      })(cat));
      // TODO: read and learn more about closures!
    }
  }
}

// C A T V I E W
let catView = {
  render: function() {
    cat = octopus.getCurrentCat();
    let display = document.querySelector('.display');
    display.innerHTML = `<h2>${cat.name}</h2>`;
    display.insertAdjacentHTML("beforeend", `<img src="${cat.src}" alt="A picture of ${cat.name}">`);
    display.insertAdjacentHTML("beforeend", `<p>Number of clicks: <span>${cat.clicks}</span> </p>`);
    let image = document.querySelector('img');
    image.addEventListener('click', function() {
      octopus.addClicks();
      catView.render();
    });
  }
};

octopus.init();