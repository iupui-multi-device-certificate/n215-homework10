const renderOffer = (offer) => `
<article class="offer">
  <img
    src="${offer.relativeImagePath}"
    class="offer-image"
    alt=""
  />
  <div class="info">
    <h2 class="font-size-30 upper title underline">
      ${offer.name}
    </h2>
    <div class="gill-sans-light">
      ${offer.description}
    </div>
    <a href="#" class="btn btn--small btn--round"
      >Learn More</a
    >
  </div>
</article>`;

const renderOffers = (offers) => `
  ${offers.map((offer) => renderOffer(offer)).join("")}
`;

export const specialOffersView = (offers) => `
<section class="content-width special-offers">
<h1 class="font-size-60 upper title underline">Special Offers(s):</h1>
<div class="wrapper-special-offers">
  <!-- SEMANTIC: using article since independent enough contat that could be distributed to other sites -->
  ${renderOffers(offers)}
</div>
</section>`;
