cardsData = [
  {
    id: 1,
    image: "./images/You Choose.jpg",
    title: "You Choose",
    description:
      "Select the plan that matches your lifestyle before choosing your meals for the week",
  },
  {
    id: 2,
    image: "./images/We Deliver.jpg",
    title: "We Deliver",
    description:
      "Dietitian designed chef made meals arrive fresh in insulated box",
  },
  {
    id: 3,
    image: "./images/You Enjoy.jpg",
    title: "You Enjoy",
    description: "Ready made & Pre-portioned,simple heat+eat   ",
  },
];

const cardsContainer = document.querySelector("#cardsContainer");
function createAndAppendCards() {
  cardsData.forEach((eachObj) => {
    const cardContainer = document.createElement("li");
    cardContainer.classList.add("card-container");
    cardsContainer.appendChild(cardContainer);

    // const cardImageContainer = document.createElement("div");
    // cardImageContainer.classList.add("card-image-container");
    // cardContainer.appendChild(cardImageContainer);

    const cardLogo = document.createElement("img");
    cardLogo.src = eachObj.image;
    cardLogo.alt = eachObj.title;
    cardLogo.classList.add("card-logo");
    cardContainer.appendChild(cardLogo);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = eachObj.title;
    cardTitle.classList.add("card-title");
    cardContainer.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = eachObj.description;
    cardDescription.classList.add("card-description");
    cardContainer.appendChild(cardDescription);
  });
}

createAndAppendCards();
