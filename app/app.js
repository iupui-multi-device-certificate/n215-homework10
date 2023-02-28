import { homeView } from "./views/_homeView.js";

import { toursModel } from "./model.js";
import {
  tourCardsView,
  tourPromosView,
} from "./views/partials/_tourCardsView.js";
import { toursView } from "./views/_toursView.js";
import { tourDetailsView } from "./views/partials/_tourDetailsView.js";
import { clientQuotes } from "./model.js";
import { aboutView } from "./views/_aboutView.js";

import { specialOffers } from "./model.js";
import { specialOffersView } from "./views/_specialOffersView.js";

import { blogs } from "./model.js";
import { blogView } from "./views/_blogView.js";

import { contactView } from "./views/_contactView.js";

//home page
const homePage = homeView(tourPromosView(toursModel));

//about
const aboutPage = aboutView(clientQuotes);

//tours

//need rest of page and routes to individual pages
const toursPage = toursView(tourCardsView(toursModel));

//TODO: make this more generic or should each page have own listener???
export const toursPageListener = () =>
  $(".tour-learn-more").click(function (e) {
    // console.log("Hello World");
    let aID = e.currentTarget.id;
    console.log(aID);
  });

//special-offers
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
    toursPageListener();
  });
}
$(document).ready(function () {
  initListeners();
  // setHome();
});
