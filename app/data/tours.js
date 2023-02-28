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
    largeRelativeImagePath: "./images/tours/israel-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/israel-tour-01.png",
      "./images/tours/israel-tour-02.png",
      "./images/tours/israel-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 2,
    name: "U.S.A",
    price: 1000,
    smallRelativeImagePath: "./images/tours/usa-small.png",
    largeRelativeImagePath: "./images/tours/usa-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/usa-tour-01.png",
      "./images/tours/usa-tour-02.png",
      "./images/tours/usa-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 3,
    name: "Australia",
    price: 1800,
    smallRelativeImagePath: "./images/tours/aus-small.png",
    largeRelativeImagePath: "./images/tours/aus-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/aus-tour-01.png",
      "./images/tours/aus-tour-02.png",
      "./images/tours/aus-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 4,
    name: "New Zealand",
    price: 1200,
    smallRelativeImagePath: "./images/tours/nz-small.png",
    largeRelativeImagePath: "./images/tours/nz-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/nz-tour-01.png",
      "./images/tours/nz-tour-02.png",
      "./images/tours/nz-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 5,
    name: "France",
    price: 2500,
    smallRelativeImagePath: "./images/tours/france-small.png",
    largeRelativeImagePath: "./images/tours/france-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/france-tour-01.png",
      "./images/tours/france-tour-02.png",
      "./images/tours/france-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 6,
    name: "Egypt",
    price: 900,
    smallRelativeImagePath: "./images/tours/egypt-small.png",
    largeRelativeImagePath: "./images/tours/egypt-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/egypt-tour-01.png",
      "./images/tours/egypt-tour-02.png",
      "./images/tours/egypt-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 7,
    name: "Japan",
    price: 1300,
    smallRelativeImagePath: "./images/tours/japan-small.png",
    largeRelativeImagePath: "./images/tours/japan-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/japan-tour-01.png",
      "./images/tours/japan-tour-02.png",
      "./images/tours/japan-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 8,
    name: "Canada",
    price: 2000,
    smallRelativeImagePath: "./images/tours/canada-small.png",
    largeRelativeImagePath: "./images/tours/canada-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/canada-tour-01.png",
      "./images/tours/canada-tour-02.png",
      "./images/tours/canada-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
  {
    id: 9,
    name: "U.A.E.",
    price: 3000,
    smallRelativeImagePath: "./images/tours/uae-small.png",
    largeRelativeImagePath: "./images/tours/uae-large.png",
    highlightRelativeImagePaths: [
      "./images/tours/uae-tour-01.png",
      "./images/tours/uae-tour-02.png",
      "./images/tours/uae-tour-03.png",
    ],
    plan: [
      {
        day: 1,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 2,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
      {
        day: 3,
        content: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
      },
    ],
  },
];
