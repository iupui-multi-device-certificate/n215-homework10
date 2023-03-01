/* 

  using JS file b/c cann't directly import json w/ ES6 modules yet AND do not want to deal with fetch/async stuff
  https://stackoverflow.com/questions/60140331/dynamic-or-static-import-of-json-in-browser-with-esm
*/

//due to time constraints, using flat data model structure to avoid object and array nesting stuff
export const tours = [
  {
    id: 1,
    name: "Israel",
    price: 1000,
    imagePath: "./images/tours/",
    imageSmall: "israel-small.png",
    imageLarge: "israel-large.png",
    image01: "israel-tour-01.png",
    image02: "israel-tour-02.png",
    image03: "israel-tour-03.png",
    day01: `<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque
ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo.
</p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 2,
    name: "U.S.A",
    price: 1000,
    imagePath: "./images/tours/",
    imageSmall: "usa-small.png",
    imageLarge: "usa-large.png",
    image01: "usa-tour-01.png",
    image02: "usa-tour-02.png",
    image03: "usa-tour-03.png",
    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 3,
    name: "Australia",
    price: 1800,
    imagePath: "./images/tours/",
    imageSmall: "aus-small.png",
    imageLarge: "aus-large.png",
    imageHighlights: ["aus-tour-01.png", "aus-tour-02.png", "aus-tour-03.png"],

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },

  {
    id: 4,
    name: "New Zealand",
    price: 1200,
    imagePath: "./images/tours/",
    imageSmall: "nz-small.png",
    imageLarge: "nz-large.png",
    image01: "nz-tour-01.png",
    image02: "nz-tour-02.png",
    image03: "nz-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 5,
    name: "France",
    price: 2500,
    imagePath: "./images/tours/",
    imageSmall: "france-small.png",
    imageLarge: "france-large.png",
    image01: "france-tour-01.png",
    image02: "france-tour-02.png",
    image03: "france-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 6,
    name: "Egypt",
    price: 900,
    imagePath: "./images/tours/",
    imageSmall: "egypt-small.png",
    imageLarge: "egypt-large.png",
    image01: "egypt-tour-01.png",
    image02: "egypt-tour-02.png",
    image03: "egypt-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 7,
    name: "Japan",
    price: 1300,
    imagePath: "./images/tours/",
    imageSmall: "japan-small.png",
    imageLarge: "japan-large.png",
    image01: "japan-tour-01.png",
    image02: "japan-tour-02.png",
    image03: "japan-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 8,
    name: "Canada",
    price: 2000,
    imagePath: "./images/tours/",
    imageSmall: "canada-small.png",
    imageLarge: "canada-large.png",
    image01: "canada-tour-01.png",
    image02: "canada-tour-02.png",
    image03: "canada-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
  {
    id: 9,
    name: "U.A.E.",
    price: 3000,
    imagePath: "./images/tours/",
    imageSmall: "uae-small.png",
    imageLarge: "uae-large.png",
    image01: "uae-tour-01.png",
    image02: "uae-tour-02.png",
    image03: "uae-tour-03.png",

    day01: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day02: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,

    day03: `<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque
    ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </p>`,
  },
];
