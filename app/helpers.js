//similar to:
// https://github.com/simplenotsimpler/github-portfolio-simplified/blob/main/server/handlebars-helpers.js

export const formatMonth = (stringDate) =>
  new Date(stringDate).toLocaleString("default", { month: "short" });

// use UTC versions
//https://dev.to/zachgoll/a-complete-guide-to-javascript-dates-and-why-your-date-is-off-by-1-day-fi1
export const formatDay = (stringDate) => new Date(stringDate).getUTCDate();
