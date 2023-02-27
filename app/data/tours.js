/* 

  using JS file b/c cann't directly import json w/ ES6 modules yet AND do not want to deal with fetch/async stuff
  https://stackoverflow.com/questions/60140331/dynamic-or-static-import-of-json-in-browser-with-esm
*/

export const tours = [
  {
    id: 1,
    name: "Israel",
    price: 1000,
    smallRelativeImagePath: "./images/tours/israel-small.png",
  },
  {
    id: 2,
    name: "U.S.A",
    price: 1000,
    smallRelativeImagePath: "./images/tours/usa-small.png",
  },
  {
    id: 3,
    name: "Australia",
    price: 1800,
    smallRelativeImagePath: "./images/tours/aus-small.png",
  },
  {
    id: 4,
    name: "New Zealand",
    price: 1200,
    smallRelativeImagePath: "./images/tours/nz-small.png",
  },
  {
    id: 5,
    name: "France",
    price: 2500,
    smallRelativeImagePath: "./images/tours/france-small.png",
  },
  {
    id: 6,
    name: "Egypt",
    price: 900,
    smallRelativeImagePath: "./images/tours/egypt-small.png",
  },
  {
    id: 7,
    name: "Japan",
    price: 1300,
    smallRelativeImagePath: "./images/tours/japan-small.png",
  },
  {
    id: 8,
    name: "Canada",
    price: 2000,
    smallRelativeImagePath: "./images/tours/canada-small.png",
  },
  {
    id: 9,
    name: "U.A.E.",
    price: 3000,
    smallRelativeImagePath: "./images/tours/uae-small.png",
  },
];