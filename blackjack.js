

let cards = []
let sum = 0
let message = ""
let isAlive = false
let blackJack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let gameON = false



function start(){

    if (gameON == false){

        isAlive = true
        let card1 = getRandomNumber()
        let card2 = getRandomNumber()
        cards.push(card1)
        cards.push(card2)
        sum = card1 + card2

        rendergame()
    }

    
}

function getRandomNumber()
{
    let randomNumber = Math.floor(Math.random()*13) +1
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10)
    {
        return 10
    }
    else {return randomNumber}
    
}

function rendergame(){

    gameON = true
    cardEl.textContent = "Cards: "

    for (let i = 0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
   
    if (sum <= 21){
        message = "wanna pick a card"
        
    }
    else if(sum === 21) {
        message = "blackjack"
        blackJack = true
    }
    else{
        message = "lost the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent ="Sum: " + sum

    
}
function drawCard(){
    if (isAlive == true && blackJack==false){
    let card3 = getRandomNumber()
    sum += card3
    cards.push(card3)
    rendergame()
    }
    

}


