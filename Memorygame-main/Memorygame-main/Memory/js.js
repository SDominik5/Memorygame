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

function createCards() {
  const main = document.getElementById("main");
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.className = "cards";
    div.addEventListener("click", turn);
    cardHandler(div);
    let rnd = getRandomInt(8);

    if (icons[rnd].counttt != 2) {
      div.innerHTML = icons[rnd].icon;
      div.style.contentVisibility = "hidden";
      icons[rnd].counttt++;
      console.log(icons[rnd].counttt);
      main.appendChild(div);
    } else {
      i--;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cardHandler(card) {
  card.addEventListener(
    "webkitAnimationEnd",
    function () {
      this.style.webkitAnimationName = "";
    },
    false
  );
}

const turn = (event) => {
  const div = event.target;
  div.style.webkitAnimationName = "flipV";
  div.style.contentVisibility = "visible";
};
