function shuffleArray(array) {
  disappearEffect();
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function disappearEffect() {
  const cardDOMElements = document.querySelectorAll(".playing-card");
  cardDOMElements.forEach((card) => {
    card.style.display = "none";
  });
  setTimeout(() => {
    cardDOMElements.forEach((card) => {
      card.style.display = "flex";
    });
  }, 100);
}

export { shuffleArray as default, disappearEffect };
