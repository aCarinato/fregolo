import React, { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Letizia Fregolo</h1>
            <p className="hero-description">A name that says everything</p>
            <a href="#" className="btn btn--full margin-right-sm">
              Tell her how much you love her
            </a>
            <a href="#" className="btn btn--outline">
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

      <section className="section-how">
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
              She's very versatile! Surfing, cycling, kayaking, bouldering,
              running, basically everything. Can you believe it? Pro tip: the
              more balance needed, the better. Somebody says she's also very
              good and dangerous at wrestling. At your own risk!
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
              It's time to ripe the benefits. Watch her consuming sugars, carbs
              and fats in her typical irresistible lovely fashion. It will fill
              you with joy. In some instances a spoon can magically appear on
              her nose and hang for an indefinite amount of time (see visual
              proof on the right). And no, that's not a Dutch tradition!
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
    </Fragment>
  );
}

export default HomePage;
