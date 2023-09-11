import React from "react";
import HeroCardItem from "./HeroCardItem";

const HeroCardItems = () => {
  return (
    <>
      <section className="hero-card cpy-6"  >
        <div className="container">
          <div className="hero-card-items row">
          <HeroCardItem/>
          </div>
          <div className="hero-card-footer-text mt-5 text-center">
            <span>Sole ownership of the digital rights to your chosen location will then be yours!</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCardItems;
