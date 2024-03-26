let cards = document.querySelectorAll(".card");
let firstCard,
  secondCard = null;
  let canClick =true,score=0;

cards.forEach((card) => {
  card.addEventListener("click", cardHandler);
});
function cardHandler() {
    if(!canClick) return;
  // double click
  if (this.classList.contains("flip")) return;

  this.classList.add("flip");
  if (!firstCard) firstCard = this;
  else if (!secondCard) secondCard = this;
  // scr img 1 and img 2
  let imgSrc1 = firstCard ? firstCard.firstElementChild.src : null;
  let imgSrc2 = secondCard ? secondCard.firstElementChild.src : null;
  if (imgSrc1 === imgSrc2) {
    firstCard = null;
    secondCard = null;
    score++;
    if(score === 6) gameOver();
  } else if (imgSrc1 && imgSrc2) {
    canClick=false;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = null;
      secondCard = null;
      canClick=true;

    }, 1000);
  }
}
function gameOver(){
    setTimeout( ()=>{
    let re= confirm("You Win🤍🤍 \n play Agian ???")
    if (re) location.reload();
    
    },1000)
}


// cards
cards.forEach(card => {
  let num=Math.floor(Math.random()*12);
  card.style.order=num;
});
