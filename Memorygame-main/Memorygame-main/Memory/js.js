var icons = [
  {
    id: 0,
    icon: "🍕",
    counttt: 0,
  },
  {
    id: 1,
    icon: "🍔",
    counttt: 0,
  },
  {
    id: 2,
    icon: "🌭",
    counttt: 0,
  },
  {
    id: 3,
    icon: "🍟",
    counttt: 0,
  },
  {
    id: 4,
    icon: "🥞",
    counttt: 0,
  },
  {
    id: 5,
    icon: "🍣",
    counttt: 0,
  },
  {
    id: 6,
    icon: "🍰",
    counttt: 0,
  },
  {
    id: 7,
    icon: "🍩",
    counttt: 0,
  },
];

var x = [];

function createCards() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");

    div.classList.add("unturned", "cards");
    div.addEventListener("click", turn);
    let rnd = getRandomInt(8);

    if (icons[rnd].counttt != 2) {
      div.innerHTML = icons[rnd].icon;
      div.style.contentVisibility = "hidden";
      icons[rnd].counttt++;
      main.appendChild(div);
    } else {
      i--;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cardHandler(card1, card2) {
  setTimeout(() => {
    card1.classList.replace("turned", "unturned");
    card1.style.webkitAnimationName = "";
    card1.style.contentVisibility = "hidden";

    card2.classList.replace("turned", "unturned");
    card2.style.webkitAnimationName = "";
    card2.style.contentVisibility = "hidden";
  }, 300);
}

const turn = (event) => {
  const div = event.target;
  div.style.webkitAnimationName = "flipV";
  div.style.contentVisibility = "visible";
  checkCards(div, x);
};

function checkCards(div, x) {
  div.classList.replace("unturned", "turned");

  let cards = document.getElementsByTagName("div");
  let turnedCard = [];

  for (const card of cards) {
    if (card.classList.contains("turned")) {
      turnedCard.push(card);
    }
  }

  if (turnedCard.length >= 2) {
    if (turnedCard[0].innerHTML === turnedCard[1].innerHTML) {
      turnedCard[0].style.backgroundColor = "green";
      turnedCard[0].classList.remove("turned", "cards");
      turnedCard[0].removeEventListener("click", turn);

      turnedCard[1].style.backgroundColor = "green";
      turnedCard[1].classList.remove("turned", "cards");
      turnedCard[1].removeEventListener("click", turn);
      x.push("_");
    } else {
      cardHandler(turnedCard[0], turnedCard[1]);
    }
    if (x.length == 8) {
      gameEnd();
    }
  }
}

function gameEnd() {
  const body = document.body;
  const field = document.createElement("div");
  const btn = document.createElement("button");

  field.className = "field";

  body.innerHTML = "";
  body.style.height = "100%";
  body.style.width = "100%";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.paddingTop = "15vh";
  body.style.backgroundColor = "rgba(0, 0, 92, 0.92)";

  btn.textContent = "Új Játék";
  btn.style.backgroundColor = "#4169E1";
  btn.style.border = "black solid 1px";
  btn.style.borderRadius = "10%";
  btn.style.height = "3.5em";
  btn.style.width = "10em";
  btn.style.gridRow = "2";
  btn.addEventListener("click", () => {
    location.reload();
  });

  const h1 = document.createElement("h1");
  h1.innerHTML = "Gratulálok nyertél!";
  h1.style.gridRow = "1";

  field.appendChild(h1);
  field.appendChild(btn);
  body.appendChild(field);
}

