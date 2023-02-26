import slider1 from "../../../public/dist/img/hero/slider-bg1.jpg";
import Image from "next/image";

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
            <Image src={slider1} className="h-50"  alt="#" />
            </div>
          </div>
          <div className="col">
            <div className="text-start ">
              <h2 className="text-primary">
                <span>Big Sale Offer</span>
                Get the Best Deal on CCTV Camera
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="tombol">
                <div className="btn-group">
                  <div className = "col">
                  <a href="product-grids.html" className="btn">
                  <button type="button" className="btn btn-primary">Our Produks</button>
                </a>
                </div>
                  <div className = "col">
                  <a href="product-grids.html" className="btn">
                  <button type="button" className="btn btn-primary">Our Treatment</button>
                </a>
                </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
