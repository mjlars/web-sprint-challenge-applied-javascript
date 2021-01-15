// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector(".cards-container");

// get request

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.bootstrap.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.technology.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.jquery.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.node.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
  });

function techCards(data) {
  const techCards = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const authorImgContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthor = document.createElement("span");

  // creating structure

  techCards.appendChild(cardHeadline);
  techCards.appendChild(authorImgContainer);
  authorImgContainer.appendChild(imgContainer);
  authorImgContainer.appendChild(cardAuthor);
  imgContainer.appendChild(cardImg);

  // classlist

  techCards.classList.add("card");
  cardHeadline.classList.add("headline"),
    authorImgContainer.classList.add("author"),
    imgContainer.classList.add("img-container");

  // adding content

  cardHeadline.textContent = data.headline;
  cardImg.src = data.authorPhoto;
  cardAuthor.textContent = data.authorName;

  return techCards;
}