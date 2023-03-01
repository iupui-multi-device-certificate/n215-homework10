import { homeView } from "./views/_homeView.js";

import { tours } from "./model.js";
import {
  tourCardsView,
  tourPromosView,
} from "./views/partials/_tourCardsView.js";
import { toursView } from "./views/_toursView.js";
import { tourDetailView } from "./views/_tourDetailView.js";
import { clientQuotes } from "./model.js";
import { aboutView } from "./views/_aboutView.js";

import { specialOffers } from "./model.js";
import { specialOffersView } from "./views/_specialOffersView.js";

import { blogs } from "./model.js";
import { blogView } from "./views/_blogView.js";

import { contactView } from "./views/_contactView.js";

//home page
const homePage = homeView(tourPromosView(tours));

//about
const aboutPage = aboutView(clientQuotes);

//tours
const toursPage = toursView(tourCardsView(tours));

//tour detail
const tourClickHandler = (e) => {
  let tourID = e.currentTarget.id;

  //if use === get undefined because tour.id is a number
  //ideally should convert so they're on same data type & then use ===
  const getTour = (tourID) => tours.find((tour) => tourID == tour.id);

  const requestedTour = getTour(tourID);

  const tourPage = tourDetailView(requestedTour);

  $("#app").html(tourPage);
};

const specialOffersPage = specialOffersView(specialOffers);

//blog
const blogPage = blogView(blogs);

//contact us
const contactUsPage = contactView;

const setPage = (pageID) => {
  $("#app").html(eval(pageID));
};

const setNavBar = (pageID) => {
  //make use of built-in conditional
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  // add/remove visible, depending on test conditional, i less than 10
  // div.classList.toggle("visible", i < 10);
  document
    .getElementById("navBar")
    .classList.toggle("navbar--home", pageID === "homePage");
};

const navClickHandler = (e) => {
  let aID = e.currentTarget.id;

  let pageID = aID + "Page";
  setPage(pageID);
  setNavBar(pageID);
};

function initListeners() {
  $("nav a").click(function (e) {
    navClickHandler(e);
  });

  //can't remember why, but $(".tour-learn-more").click did not detect clicks.
  $(document).on("click", ".tour-learn-more", function (e) {
    tourClickHandler(e);
  });
}
$(document).ready(function () {
  initListeners();

  // setHome();
});
