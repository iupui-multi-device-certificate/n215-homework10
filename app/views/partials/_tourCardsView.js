//TODO: should this have corresponding class??
//TODO: link to individual tour page dyanamic via jQuery ? usually use routers for that stuff
const renderTourCard = (tour) => `
  <figure>
    <img src="${tour.smallRelativeImagePath}" alt="" />
    <figcaption>
      <h1 class="font-size-60 upper">${tour.name}</h1>
      <h2 class="font-size-30 title">from $${tour.price}</h2>
      <a href="#" class="btn btn--round">Learn More</a>
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
