const renderClientQuote = (clientQuote) => `
<figure class="client-quote">
  <img
    src="${clientQuote.relativeImagePath}"
    alt="${clientQuote.author}"
    class="client-image"
  />
  <div class="client-quote-text">
    <blockquote class="gill-sans-italic-light">
    ${clientQuote.content}
    </blockquote>
    <figcaption class="client-quote-author">
      <p>&mdash; ${clientQuote.author}</p>
    </figcaption>
  </div>
</figure>`;

const renderClientQuotes = (clientQuotes) => `
  ${clientQuotes.map((clientQuote) => renderClientQuote(clientQuote)).join("")}
`;

export const aboutView = (clientQuotes) => `
  <section class="content-width about">
    <h1 class="font-size-60 upper title underline">About:</h1>
    <p class="about-text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </section>
  <section class="content-width client-quotes">
    <h2 class="font-size-30 title upper underline">CLIENT QUOTES:</h2>
    <!-- 
    SEMANTIC HTML use figure:
    https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/#aa-hey-what-about-the-figure-element
    critique on: https://www.frontendmentor.io/solutions/testimonials-grid-section-pDG4eI238g
    -->
    ${renderClientQuotes(clientQuotes)}
  </section>
`;
