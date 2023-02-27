import { toursModel } from "../models/toursModel.js";
import { tourCardsView } from "../views/partials/_tourCardsView.js";

export const allTours = tourCardsView(toursModel);

// export const topTours
