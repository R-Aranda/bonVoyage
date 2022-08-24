import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { featuredCountries } from "./FeaturedCountries";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

const LandingHeader = () => {
  const [current, setCurrent] = useState(0);
  const length = featuredCountries.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(featuredCountries) || featuredCountries.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
      <button className="carousel-button next"></button>
      {featuredCountries.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div
                className="landing-page-hero"
                style={{
                  background: "url(" + `${slide.photo}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="landing-page-hero-content">
                  <h1>{slide.name}</h1>
                  <p className="subheader">{slide.body}</p>
                  <a href={slide.link} className="round button">
                    learn more
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LandingHeader;
