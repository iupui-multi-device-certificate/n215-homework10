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

//need rest of page and routes to individual pages
const toursPage = toursView(tourCardsView(tours));

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

const titleBase = "travel-fly";

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;
    // $(document).attr("title", `${titleBase}toUpperCase()}`);
    let pageID = aID + "Page";
    setPage(pageID);
  });

  $(document).on("click", ".tour-learn-more", function (e) {
    // console.log("tour-learn-more clicked");
    console.log(e.currentTarget.id);
    tourClickHandler(e);
  });

  //   let tourID = e.currentTarget.id;
  //   console.log("clicked tourID: ", tourID);
  //   // const getTour = (tourID) => tours.find((tour) => (tour.id = tourID));

  //   // const requestedTour = getTour(tourID);

  //   // const tourPage = tourDetailView(requestedTour);
  //   // $("#app").html(tourPage);
  // });
}
$(document).ready(function () {
  initListeners();

  // setHome();
});
