import slider1 from "../../../public/dist/img/hero/slider-bg1.jpg";

export default function About() {
  return (
    <>
      <div className="container text-center mt-4">
        <div className="section-title text-center ">
            <h2>About Us</h2>
            </div>
        <div className="row">
          <div className="col">
            <div className="hero-slider">
              <div
                className="single-slider"
                style={{
                  backgroundImage: `url(${slider1.src})`,
                }}
              >
                <div className="content">
                  <h2>
                    <span>No restocking fee ($35 savings)</span>
                    M75 Sport Watch
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <h3>
                    <span>Now Only</span> $320.99
                  </h3>
                  <div className="button">
                    <a href="product-grids.html" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col">
            <div className="content">
              <h2>
                <span>Big Sale Offer</span>
                Get the Best Deal on CCTV Camera
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>
                <span>Combo Only:</span> $590.00
              </h3>
              <div className="button">
                <a href="product-grids.html" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
