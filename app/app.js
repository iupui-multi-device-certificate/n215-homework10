//theoretically views/partials could be moved up a level
import { toursModel } from "./model.js";
import { tourCardsView } from "./views/partials/_tourCardsView.js";
import { tourDetailsView } from "./views/partials/_tourDetailsView.js";
import { clientQuotes } from "./model.js";
import { aboutView } from "./views/_aboutView.js";

//home page
const homePage = `Home page here`;

//about
const aboutPage = aboutView(clientQuotes);

//tours

//need rest of page and routes to individual pages
const toursPage = tourCardsView(toursModel);

//TODO: make this more generic or should each page have own listener???
export const toursPageListener = () =>
  $(".tour-learn-more").click(function (e) {
    // console.log("Hello World");
    let aID = e.currentTarget.id;
    console.log(aID);
  });

//blog

const blogPage = `Blog page here`;

//special-offers
const specialOffersPage = `Special Offers page here`;

//contact us
const contactUsPage = `Contact us page here`;

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
