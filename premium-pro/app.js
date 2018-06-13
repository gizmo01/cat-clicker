// M O D E L - only data is present here in the model
let model = {
  currentCat: null,
  showAdminPanel: false,
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
    listView.init();
    adminView.init();
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
    model.currentCat.clicks++;
  },
  showAdminPanel: function() {
    document.querySelector('.form-container').classList.remove('hide');
    model.showAdminPanel = false;
  },
  hideAdminPanel: function() {
    document.querySelector('.form-container').classList.add('hide');
    model.showAdminPanel = true;
  },
  updateValues: function() {
    let name = document.getElementById('name').value;
    if (name !== "") {
      model.currentCat.name = name;
      listView.init();
      catView.render();
      document.getElementById('name').value = "";
    }
    let url = document.getElementById('url').value;
    if (url !== "") {
      model.currentCat.src = url;
      catView.render();
      document.getElementById('url').value = "";
    }

    let click = document.getElementById('clicks').value;
    if (click !== "") {
      model.currentCat.clicks = click;
      catView.render();
      document.getElementById('clicks').value = "";
    }
    this.hideAdminPanel();

  }
};

// A D M I N V I E W
let adminView = {
  init: function() {
    let admin = document.querySelector('.admin');
    let cancel = document.querySelector('.cancel');
    let save = document.querySelector('.save');
    admin.addEventListener('click', function() {
      octopus.showAdminPanel();
    });
    cancel.addEventListener('click', function() {
      octopus.hideAdminPanel();
    });
    save.addEventListener('click', function() {
      octopus.updateValues();
    });
  },
  render: function() {
    document.querySelector('.form-container').classList.toggle('hide');
  }
};

// L I S T V I E W
let listView = {
  init: function() {
    listView.render();
  },
  render: function() {
    let catArr = octopus.getCats();
    document.querySelector('.list').innerHTML = "";
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