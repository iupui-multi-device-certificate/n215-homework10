//theoretically views/partials could be moved up a level
import { toursModel } from "./model.js";
import { tourCardsView } from "./views/partials/_tourCardsView.js";

//home page
const homePage = `Home page here`;

//about
const aboutPage = `About page here`;

//tours
//need rest of page and routes to individual pages
const toursPage = tourCardsView(toursModel);

//blog

const blogPage = `Blog page here`;

//special-offers
const specialOffersPage = `Special Offers page here`;

//contact us
const contactUsPage = `Contact us page here`;

export const setPage = (pageID) => $("#app").html(eval(pageID));
