import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">
        🌍 World Destinations Carousel
      </h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <Carousel
            showArrows={true}
            showThumbs={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={true}
            stopOnHover={true}
            dynamicHeight={false}
          >
            {/* Hong Kong */}
            <div>
              <img src="Hong Kong.jpg" alt="Hong Kong" />
              <p className="legend">Hong Kong</p>
            </div>

            {/* Macao */}
            <div>
              <img src="Macao.webp" alt="Macao" />
              <p className="legend">Macao</p>
            </div>

            {/* Japan */}
            <div>
              <img src="Japan.webp" alt="Japan" />
              <p className="legend">Japan</p>
            </div>

            {/* Las Vegas */}
            <div>
              <img src="Las Vegas.webp" alt="Las Vegas" />
              <p className="legend">Las Vegas</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
