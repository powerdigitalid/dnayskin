import slider1 from "../../../public/dist/img/products/produkss.jpeg";
import slider2 from "../../../public/dist/img/products/produkss1.jpeg";
import slider from "../../../public/dist/img/products/ibuibu.jpeg";
import { useState, useEffect } from "react";

export default function Hero() {
  const [dataBanner, setDataBanner] = useState([]);
  const fetchBanner = async () => {
    fetch("http://localhost:3000/api/v1/banner/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataBanner(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchBanner();
    setTimeout(() => {
      import("tiny-slider").then(tns => {
        tns.tns({
          container: ".hero-slider",
          slideBy: "page",
          autoplay: true,
          autoplayButtonOutput: false,
          mouseDrag: true,
          gutter: 0,
          items: 1,
          nav: false,
          controls: true,
          controlsText: [
            '<i class="lni lni-chevron-left"></i>',
            '<i class="lni lni-chevron-right"></i>',
          ],
        });
      });
    }, 500);
  }, []);
  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 custom-padding-right">
            <div className="slider-head">
              {/* Start Hero Slider */}
              <div className="hero-slider">
                {dataBanner.length > 0 ? (dataBanner.map((banner, i) => (
                  <div
                    key={i}
                    className="single-slider"
                    style={{
                      backgroundImage: `url("http://localhost:3000${banner.image_path}")`,
                    }}
                  >
                    <div className="content text-dark">
                      <h2>{banner.text_header}</h2>
                      <p>{banner.text_desc} </p>
                      <div className="button">
                        <a href="#about" className="btn">
                          Telusuri
                        </a>
                      </div>
                    </div>
                  </div>
                ))) : (<>Loading...</>)}
                {/* Start Single Slider */}
                {/* <div
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
                </div> */}
                {/* End Single Slider */}
                {/* Start Single Slider */}
                {/* <div
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
                </div> */}
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
