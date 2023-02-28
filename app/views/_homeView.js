export const homeView = (tourPromos) => `

  <section class="content-width hero">
  <!-- semantic note: should be in h1, but having issues w/ styling -->
  <h1 class="font-size-60 title">travel-fly</h1>
  <p class="hero-cta gill-sans-italic-light">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
    aliquid minus nemo sed est.
  </p>
  <button class="btn btn--small hero-button">Read More</button>
  </section>

  ${tourPromos}

  <section class="content-width booking">
    <h1 class="font-size-60">Booking form</h1>
    <div class="wrapper-booking">
      <form class="booking-form">
        <div class="name-email">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name..."
            class="form-element"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email..."
            class="form-element form-element-large"
          />
        </div>
        <div class="country-hotel">
          <input
            type="text"
            id="country"
            name="country"
            placeholder="country..."
            class="form-element"
          />
          <input
            type="text"
            id="hotel"
            name="hotel"
            placeholder="hotel..."
            class="form-element form-element-large"
          />
        </div>
        <!-- TODO: custom date picker icon, need to work in FF as well -->
        <div class="check-in">
          <label for="check-in">Check-in</label>
          <input
            type="date"
            id="check-in"
            name="check-in"
            class="form-element form-element-x-large"
          />
        </div>
        <div class="check-out">
          <label for="check-out">Check-out</label>
          <input
            type="date"
            id="check-out"
            name="check-out"
            class="form-element form-element-x-large"
          />
        </div>
        <div class="selections">
          <label for="adult">Adult</label>
          <div class="select-wrapper">
            <select
              name="adult"
              id="adult"
              form="booking-form"
              class="form-element form-element-small"
            >
              <optgroup>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </optgroup>
            </select>
          </div>
          <label for="children">Children</label>
          <div class="select-wrapper">
            <select
              name="children"
              id="children"
              form="booking-form"
              class="form-element form-element-small"
            >
              <optgroup>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </optgroup>
            </select>
          </div>

          <label for="rooms">Room</label>
          <div class="select-wrapper">
            <select
              name="rooms"
              id="rooms"
              form="booking-form"
              class="form-element form-element-small"
            >
              <optgroup>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </optgroup>
            </select>
          </div>
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="message..."
          class="form-element message"
        ></textarea>

        <input
          type="submit"
          value="Submit"
          class="btn btn--round btn--wide"
        />
      </form>
    </div>
  </section>

`;
