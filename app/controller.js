//theoretically views/partials could be moved up a level
import { toursModel } from "./model.js";
import { tourCardsView } from "./views/partials/_tourCardsView.js";

//need rest of page
export const toursPage = tourCardsView(toursModel);
