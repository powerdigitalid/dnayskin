import slider1 from "../../../public/dist/img/products/produkss.jpeg";
import slider2 from "../../../public/dist/img/products/produkss1.jpeg";
import slider from "../../../public/dist/img/products/ibuibu.jpeg";

export default function Hero() {
  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 custom-padding-right">
            <div className="slider-head">
              {/* Start Hero Slider */}
              <div className="hero-slider">
                {/* Start Single Slider */}
                <div
                  className="single-slider"
                  style={{
                    backgroundImage: `url(${slider1.src})`,
                  }}
                >
                  <div className="content text-dark">
                    <h2>Judul Content 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="button">
                      <a href="#about" className="btn">
                        Telusuri
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Slider */}
                {/* Start Single Slider */}
                <div
                  className="single-slider"
                  style={{
                    backgroundImage: `url(${slider2.src})`,
                  }}
                >
                  <div className="content text-dark">
                    <h2>Judul Content 2</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="button">
                      <a href="#about" className="btn">
                        Telusuri
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Slider */}
              </div>
              {/* End Hero Slider */}
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                {/* Start Small Banner */}
                <div
                  className="hero-small-banner"
                  style={{
                    backgroundImage: `url(${slider.src})`,
                  }}
                ></div>
                {/* End Small Banner */}
              </div>
              <div className="col-lg-12 col-md-6 col-12">
                {/* Start Small Banner */}
                <div
                  className="hero-small-banner style2 text-dark"
                  style={{
                    backgroundImage: `url(/dist/img/banner/maps.PNG)`,
                  }}
                >
                  <div className="content">
                    <h4 className="text-dark fs-1">Google Maps</h4>
                    <p className="text-dark">Telusuri Kami Di Google Maps</p>
                    <div className="button">
                      <a className="btn btn-hover" href="#">
                        Telusuri
                      </a>
                    </div>
                  </div>
                </div>
                {/* Start Small Banner */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
