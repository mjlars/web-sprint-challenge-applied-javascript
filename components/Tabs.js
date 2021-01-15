// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
let dataArray = [];

const newData = axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data);
    dataArray = response.data;
  })
  .catch(err => {
    console.log(err);
  });

const newArray = Array.from(newData);
const Topics = document.querySelector(".topics");

function newTopics(data) {
  const createTabs = document.createElement("div");
  createTabs.classList.add("tab");
  createTabs.textContent = data;
  Topics.appendChild(createTabs);

  return Topics;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    return response.data.topics;
  })
  .then(items => {
    items.forEach(item => newTopics(item));
  })
  .catch(error => {
    console.log(error);
  });
