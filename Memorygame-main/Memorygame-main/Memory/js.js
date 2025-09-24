var icons = [
    {
        id: 0,
        icon: "🍕",
        counttt: 0
    },
    {
        id: 1,
        icon: "🍔",
        counttt: 0
    },
    {
        id: 2,
        icon: "🌭",
        counttt: 0
    },
    {
        id: 3,
        icon: "🍟",
        counttt: 0
    },
    {
        id: 4,
        icon: "🥞",
        counttt: 0
    },
    {
        id: 5,
        icon: "🍣",
        counttt: 0
    },
    {
        id: 6,
        icon: "🍰",
        counttt: 0
    },
    {
        id: 7,
        icon: "🍩",
        counttt: 0
    }
]

function createCards(){
    const main = document.getElementById('main')
    for(let i = 0; i < 16; i++){
        const div = document.createElement('div')
        div.addEventListener('click', turn(2))
        let rnd = getRandomInt(8)
        div.innerHTML = icons[rnd].icon
        icons[rnd].counttt++
        console.log(icons[rnd].counttt)
        main.appendChild(div)
        if(icons[rnd].counttt == 2){
            main.removeChild(div)
            i--
        }


    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function turn(cards){

}
