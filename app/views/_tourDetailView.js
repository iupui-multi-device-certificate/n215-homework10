export const tourDetailView = (tour) =>
  // console.log("detailview:", tour.id);
  `        <section class="tour">
<section class="banner-large content-width">
  <img src="${tour.imagePath}${tour.imageLarge}" alt="" />
  <div class="banner-text">
    <h1 class="font-size-60 figure-title">${tour.name} tour package:</h1>
    <div class="font-size-30 figure-title upper align-right">
      Starting from $${tour.price}
    </div>
  </div>
</section>
<section class="tour-images content-width">
  <img src="${tour.imagePath}${tour.image01}" alt="" />
  <img src="${tour.imagePath}${tour.image02}" alt="" />
  <img src="${tour.imagePath}${tour.image03}" alt="" />
</section>
<section class="trip-plan content-width">
  <section class="trip-plan-item">
    <h2 class="font-size-60 upper title underline">Day #1:</h2>
    <div class="body-text">
      ${tour.day01}
    </div>
  </section>
  <section class="trip-plan-item">
    <h2 class="font-size-60 upper title">Day #2:</h2>
    <div class="body-text">
      ${tour.day02}
    </div>
  </section>
  <section class="trip-plan-item">
    <h2 class="font-size-60 upper title">Day #3:</h2>
    <div class="body-text">
      ${tour.day03}
    </div>
  </section>
</section>
<section class="outro">
  <a href="#" class="btn btn--round btn--small">Book Now</a>
</section>
</section>
`;
