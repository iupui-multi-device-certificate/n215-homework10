import { allTours } from "./controllers/tourCardsController.js";

const titleBase = "travel-fly";
// const changeContent = (contentID) => $("#app").html(eval(contentID));

const setHome = () => {
  // $("#app").html(homeContent);
  $("#app").html(allTours);
  $(document).attr("title", `${titleBase} | HOME`);
};

function initListeners() {
  // $("nav a").click(function (e) {
  //   let aID = e.currentTarget.id;
  //   $(document).attr("title", `Paw Savers | ${aID.toUpperCase()}`);
  //   let contentID = aID + "Content";
  //   changeContent(contentID);
  // });
  console.log("Hello World");
}
$(document).ready(function () {
  initListeners();
  setHome();
});
