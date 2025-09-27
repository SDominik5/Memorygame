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
  main.innerHTML = ""
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.className = 'unturned'
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
        card1.className = "unturned";
        card1.style.webkitAnimationName = ""
        card2.className = "unturned";
        card2.style.webkitAnimationName = ""
        card1.style.contentVisibility = "hidden";
        card2.style.contentVisibility = "hidden";
    }, 300);
}

const turn = (event) => {
  const div = event.target;
  div.style.webkitAnimationName = "flipV";
  div.style.contentVisibility = "visible";
  checkCards(div, x)
};

function checkCards(div, x) {
    div.className = 'turned';

    let cards = document.getElementsByTagName('div');
    let turnedCard = [];

    for (const card of cards) {
        if (card.className === 'turned') {
            turnedCard.push(card);
        }
    }

    if (turnedCard.length >= 2) {
        if (turnedCard[0].innerHTML === turnedCard[1].innerHTML) {
            turnedCard[0].className = "matched";
            turnedCard[1].className = "matched";
            turnedCard[0].style.backgroundColor = 'green';
            turnedCard[1].style.backgroundColor = 'green';
            x.push('_')
        } else {
            cardHandler(turnedCard[0], turnedCard[1]);
        }
        if(x.length == 8){
          alert("Gratulálok, nyertél!")         
        }
    }
}