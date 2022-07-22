import React, { Fragment, useState } from 'react';
import Popup from '../components/Popup';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Fragment>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Letizia Fregolo</h1>
            <p className="hero-description">A name that says everything</p>
            <button
              className="btn btn--full margin-right-sm"
              onClick={() => setShowPopup(true)}
            >
              Wish her happy birthday!
            </button>
            {/* <a
              href="#"
              className="btn btn--full margin-right-sm"
              onClick={() => setShowPopup(true)}
            >
              Tell her how much you love her
            </a> */}
            <a href="#section-how" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="/img/cats/cat1.png" alt="customer-photo" />
                <img src="/img/cats/cat2.png" alt="customer-photo" />
                <img src="/img/cats/cat3.png" alt="customer-photo" />
                <img src="/img/cats/cat6.png" alt="customer-photo" />
                <img src="/img/cats/cat5.png" alt="customer-photo" />
                <img src="/img/cats/cat4.png" alt="customer-photo" />
              </div>
              <p className="delivered-text">
                <span>25,000+</span> cats petted last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              className="hero-img"
              src="/img/hero-fregolo.svg"
              alt="Woman enjoying food, meals in storage and food bowls on a table"
            />
          </div>
        </div>
      </section>

      {showPopup && <Popup setShowPopup={setShowPopup} />}

      <section id="section-how" className="section-how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Your daily doese of fregolo in 3 simple steps
          </h2>
        </div>
        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">Take her to do some sport!</h3>
            <p className="step-description">
              She's very versatile! Surfing, cycling, squash, kayaking,
              bouldering, running, basically everything. Pro tip: the more
              balance needed, the better. Somebody says she's also very good and
              dangerous at wrestling. At your own risk!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="/img/surf.jpeg"
              className="step-img"
              alt="iPhone app preferences"
            />
          </div>

          <div className="step-img-box">
            <img
              src="/img/pizza.png"
              className="step-img"
              alt="MEAL APPROVING PLAN"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">Get the foooood</h3>
            <p className="step-description">
              Yes, lately she's dabbling into Hello Fresh kind of stuff. But
              don't get fooled... Your safe bet is still some high-carbs item in
              the menu. Play it simple and easy: pizza, pasta (fregola) or
              cheese. Of course sweets works like a charm too! Ah and don't
              forget the drink. Alcoholic.
            </p>
          </div>

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">Sit back and enjoy!!!</h3>
            <p className="step-description">
              Watch her consuming sugars, carbs and fats in her typical
              irresistible lovely fashion. It will fill you with joy. In some
              instances a spoon can magically appear on her nose and hang for an
              indefinite amount of time (see below). And no, that's not a Dutch
              tradition!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="img/spoon.jpg"
              className="step-img"
              alt="iPhone app preferences"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section class="section-testimonials">
        <div class="testimonials-container">
          <span class="subheading">Testimonials</span>
          <h2 class="heading-secondary">Impossible not to like her</h2>

          <div class="testimonials">
            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src="img/me-love.jpeg"
              />
              <blockquote class="testimonial-text">I love her.</blockquote>
              <p class="testimonial-name">&mdash; Me</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Ben Hadley"
                src="img/donaldT.png"
              />
              <blockquote class="testimonial-text">
                She is a yuuuuge success for the human kind. Tremendous girl,
                she's not from China.
              </blockquote>
              <p class="testimonial-name">&mdash; Donald J. Trump</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Steve Miller"
                src="img/honey-badger.png"
              />
              <blockquote class="testimonial-text">
                She's the only one more badass than me.
              </blockquote>
              <p className="testimonial-name">
                &mdash; The (nastyass) honey badger
              </p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Steve Miller"
                src="img/dicaprio.png"
              />
              <blockquote class="testimonial-text">
                Before meeting her my life was miserable.
              </blockquote>
              <p className="testimonial-name">&mdash; Leonardo DiCaprio</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src="img/antoneo.png"
              />
              <blockquote className="testimonial-text">
                The source of inspiration for all my songs.
              </blockquote>
              <p className="testimonial-name">&mdash; Antonello Venditti</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src="img/llama.jpg"
              />
              <blockquote className="testimonial-text">
                Please come back!!! miss u xx
              </blockquote>
              <p className="testimonial-name">&mdash; Peruvian llama</p>
            </figure>
          </div>
        </div>

        <div className="gallery">
          <figure className="gallery-item">
            <img
              src="img/love.jpeg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/sleepy.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/tongue.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/duck.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gatto2.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/puppy.jpeg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gatto1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/lenglegs.jpeg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/fragola.jpeg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/happybday.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/sexy.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/patagonia.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;
