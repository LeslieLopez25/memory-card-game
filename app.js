const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// LINK TEXT
playerLivesCount.textContent = playerLives;

// GENERATE THE DATA
const getData = () => [
  { imgSrc: "./images/apple.jpg", name: "apple" },
  { imgSrc: "./images/banana.jpg", name: "banana" },
  { imgSrc: "./images/cherry.jpg", name: "cherry" },
  { imgSrc: "./images/kiwi.jpg", name: "kiwi" },
  { imgSrc: "./images/orange.jpg", name: "orange" },
  { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
  { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
  { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
  { imgSrc: "./images/apple.jpg", name: "apple" },
  { imgSrc: "./images/banana.jpg", name: "banana" },
  { imgSrc: "./images/cherry.jpg", name: "cherry" },
  { imgSrc: "./images/kiwi.jpg", name: "kiwi" },
  { imgSrc: "./images/orange.jpg", name: "orange" },
  { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
  { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
  { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
];

// RANDOMIZE
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// CARD GENERATOR FUNCTION
const cardGenerator = () => {
  const cardData = randomize();
  // GENERATE THE HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // ATTACH THE INFO TO THE CARDS
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // ATTACH THE CARDS TO THE SECTION
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
// CHECK CARDS
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  // LOGIC
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try Again");
      }
    }
  }
  // RUN A CHECK TO SEE IF WE WON THE GAME
  if (toggleCard.length === 16) {
    restart("You Won!");
  }
};

// RESTART
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    // RANDOMIZE
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
