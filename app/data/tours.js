/* 

  using JS file b/c cann't directly import json w/ ES6 modules yet AND do not want to deal with fetch/async stuff
  https://stackoverflow.com/questions/60140331/dynamic-or-static-import-of-json-in-browser-with-esm
*/

export const tours = [
  {
    id: 1,
    name: "Israel",
    price: 1000,
    imagePath: "./images/tours/",
    imageSmall: "israel-small.png",
    imageLarge: "israel-large.png",
    imageHighlights: [
      "israel-tour-01.png",
      "israel-tour-02.png",
      "israel-tour-03.png",
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
    imagePath: "./images/tours/",
    imageSmall: "usa-small.png",
    imageLarge: "usa-large.png",
    imageHighlights: ["usa-tour-01.png", "usa-tour-02.png", "usa-tour-03.png"],
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
    imagePath: "./images/tours/",
    imageSmall: "aus-small.png",
    imageLarge: "aus-large.png",
    imageHighlights: ["aus-tour-01.png", "aus-tour-02.png", "aus-tour-03.png"],
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
    imagePath: "./images/tours/",
    imageSmall: "nz-small.png",
    imageLarge: "nz-large.png",
    imageHighlights: ["nz-tour-01.png", "nz-tour-02.png", "nz-tour-03.png"],
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
    imagePath: "./images/tours/",
    imageSmall: "france-small.png",
    imageLarge: "france-large.png",
    imageHighlights: [
      "france-tour-01.png",
      "france-tour-02.png",
      "france-tour-03.png",
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
    imagePath: "./images/tours/",
    imageSmall: "egypt-small.png",
    imageLarge: "egypt-large.png",
    imageHighlights: [
      "egypt-tour-01.png",
      "egypt-tour-02.png",
      "egypt-tour-03.png",
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
    imagePath: "./images/tours/",
    imageSmall: "japan-small.png",
    imageLarge: "japan-large.png",
    imageHighlights: [
      "japan-tour-01.png",
      "japan-tour-02.png",
      "japan-tour-03.png",
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
    imagePath: "./images/tours/",
    imageSmall: "canada-small.png",
    imageLarge: "canada-large.png",
    imageHighlights: [
      "canada-tour-01.png",
      "canada-tour-02.png",
      "canada-tour-03.png",
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
    imagePath: "./images/tours/",
    imageSmall: "uae-small.png",
    imageLarge: "uae-large.png",
    imageHighlights: ["uae-tour-01.png", "uae-tour-02.png", "uae-tour-03.png"],
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
