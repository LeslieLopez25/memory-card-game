const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// LINK TEXT
playerLivesCount.textContent = playerLives;

// GENERATE THE DATA
const getData = () => [
  { imgSrc: "./images/apple.jpg", name: "apple" },
  { imgSrc: "./images/avocado.jpg", name: "avocado" },
  { imgSrc: "./images/banana.jpg", name: "banana" },
  { imgSrc: "./images/cherry.jpg", name: "cherry" },
  { imgSrc: "./images/kiwi.jpg", name: "kiwi" },
  { imgSrc: "./images/orange.jpg", name: "orange" },
  { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
  { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
  { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
  { imgSrc: "./images/apple.jpg", name: "apple" },
  { imgSrc: "./images/avocado.jpg", name: "avocado" },
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
};

randomize();
