export const contactView = `        
  <section class="content-width contact">
    <h1 class="font-size-60 upper title underline">Contact Us:</h1>
    <div class="wrapper-contact">
      <div class="location">
        <img src="./images/map.png" class="map" alt="" />
        <!-- Semantic HTML: 
        use address tag https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address 
        https://html.spec.whatwg.org/multipage/sections.html#the-address-element
        https://stackoverflow.com/questions/28054636/dont-use-address-for-address
        Ideally, use a microformat for populating from a database or CMS.
      -->
        <address>
          travel-fly Inc.<br />
          8901 Marmora Road, Glasgow, D04 89GR. <br />
          Freephone:+1 800 559 6580<br />
          Telephone:+1 800 603 6035<br />
          FAX:+1 800 889 9898<br />
          E-mail: mail@travelfly.org
        </address>
      </div>

      <form class="contact-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name..."
          aria-label="name"
          class="form-element"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address..."
          aria-label="email"
          class="form-element"
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company..."
          aria-label="company"
          class="form-element"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message..."
          class="form-element message"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          class="btn btn--medium"
        />
      </form>
    </div>
  </section>
`;
