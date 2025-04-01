import React from "react";

function HeroSection() {
  return (
    <>
      <main className="container hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttons">
            <button>Shop Now</button>
            <button>Category</button>
          </div>

          <div className="available-platforms">
            <p>Also Available On</p>
            <div className="platforms-images">
              <img src="../images/flipkart.png" alt="flipkart image" />
              <img src="../images/amazon.png" alt="amazon image" />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="../images/shoe_image.png" alt="hero image" />
        </div>
      </main>
    </>
  );
}

export default HeroSection;
