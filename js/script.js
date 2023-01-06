// containers
let container1 = document.querySelector(".mainContainer");
let container2 = document.querySelector(".secondContainer");

// botoes para alterar a cor
let darkBtn = document.querySelector(".switch-btn-d");
let lightBtn = document.querySelector(".switch-btn-l");
// titles
let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");
let subtitle = document.querySelector(".subtitle");

// social media cards container
let socialMediaContainer = document.querySelector(".social-media-container");
// social media cards
let socialMediaCards = document.getElementsByClassName("social-media-card");
// social media numeros dos cards e conta
let account = document.getElementsByClassName("account");
let followersText = document.getElementsByClassName("followers-text");
let followersNumber = document.getElementsByClassName("followers-number");

// social media status cards
let socialMediaOverviewCard = document.getElementsByClassName(
  "social-media-overview-card"
);
let pageViews = document.getElementsByClassName("pg-views");
let pageNumbers = document.getElementsByClassName("pg-numbers");

function dark() {
  // troca dos botoes
  darkBtn.style.display = "none";
  lightBtn.style.display = "block";
  // container 1 elementos
  container1.style.backgroundColor = "#1e202a";
  title.style.color = "#fff";
  subtitle.style.color = "#fff";
  // cards alteracao das cores e dos backgrounds
  for (let i = 0; i < socialMediaCards.length; i++) {
    socialMediaCards[i].classList.remove("social-media-card-l");
    socialMediaCards[i].classList.add("social-media-card-d");
    followersText[i].style.color = "#fff";
    account[i].style.color = "#fff";
    followersNumber[i].style.color = "#fff";
  }
  // container 2 elementos
  container2.style.backgroundColor = "#1e202a";
  title2.style.color = "#fff";

  for (let x = 0; x < socialMediaOverviewCard.length; x++) {
    socialMediaOverviewCard[x].classList.remove("social-media-overview-card-l");
    socialMediaOverviewCard[x].classList.add("social-media-overview-card-d");
    pageViews[x].style.color = "#fff";
    pageNumbers[x].style.color = "#fff";
  }
}

function light() {
  // troca dos botoes
  lightBtn.style.display = "none";
  darkBtn.style.display = "block";

  // container 1 elementos
  container1.style.backgroundColor = "#fff";
  title.style.color = "#000";
  subtitle.style.color = "#000";
  // cards background alteracao
  for (let i = 0; i < socialMediaCards.length; i++) {
    socialMediaCards[i].classList.remove("social-media-card-d");
    socialMediaCards[i].classList.add("social-media-card-l");
    followersText[i].style.color = "#484646";
    account[i].style.color = "#484646";
    followersNumber[i].style.color = "#000";
  }
  // container 2 elementos
  container2.style.backgroundColor = "#fff";
  title2.style.color = "#000";

  for (let x = 0; x < socialMediaOverviewCard.length; x++) {
    socialMediaOverviewCard[x].classList.remove("social-media-overview-card-d");
    socialMediaOverviewCard[x].classList.add("social-media-overview-card-l");
    pageViews[x].style.color = "#484646";
    pageNumbers[x].style.color = "#000";
  }
}
