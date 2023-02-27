const renderTourCard = (tour) => `
  <figure class="tour-card">
    <img src="${tour.smallRelativeImagePath}" alt="" />
    <figcaption>
      <h1 class="font-size-60 upper">${tour.name}</h1>
      <h2 class="font-size-30 title">from $${tour.price}</h2>
      <a href="#" id=${tour.id} class="btn btn--round tour-learn-more">Learn More</a>
    </figcaption>
  </figure>
`;

const renderTours = (tours) => `
  ${tours.map((tour) => renderTourCard(tour)).join("")}
`;

//could be combined into renderTours, pass boolean for promo
const renderPromoTours = (tours) => `
  ${tours
    .slice(0, 2)
    .map((tour) => renderTourCard(tour))
    .join("")}
`;

export const tourCardsView = (tours) => `
  <section class="tour-cards">
    ${renderTours(tours)}
  </section>
`;
