let gameHeading = document.querySelector(".heading h1");
let allCards = document.querySelectorAll(".cards .card");

let turn = "x";

allCards.forEach((card) => {
  card.addEventListener("click", () => {
    gameSetup(card);
  });
});

function gameSetup(card) {
  if (card.innerHTML === "") {
    card.innerHTML = `${turn.toUpperCase()}`;
    turn = turn === "x" ? "o" : "x";
    gameHeading.innerHTML = turn.toUpperCase();
    getWinner();
  }
}
function getWinner() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    let [a, b, c] = combination;
    if (
      allCards[a].innerHTML == allCards[b].innerHTML &&
      allCards[a].innerHTML == allCards[c].innerHTML &&
      allCards[a].innerHTML != ""
    ) {
      showWinner(allCards[a], allCards[b], allCards[c]);
      return;
    }
  }
}

function showWinner(...wCards) {
  wCards.forEach((card) => (card.style.backgroundColor = "#000"));
  gameHeading.innerHTML = `${wCards[0].innerHTML} Is Winner`;
  allCards.forEach((card) => {
    card.replaceWith(card.cloneNode(true));
  });
  setInterval(() => (gameHeading.innerHTML += "."), 1000);
  setTimeout(() => window.location.reload(), 3000);
}
