import { setPage } from "./controller.js";

const titleBase = "travel-fly";

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;
    // $(document).attr("title", `${titleBase}toUpperCase()}`);
    let pageID = aID + "Page";
    setPage(pageID);
  });
}
$(document).ready(function () {
  initListeners();
  // setHome();
});
