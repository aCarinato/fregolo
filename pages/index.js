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
                <span>25,000+</span> cats hugged last year!
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
    </Fragment>
  );
}

export default HomePage;
