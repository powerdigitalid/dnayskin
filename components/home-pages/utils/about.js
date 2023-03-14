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
              <Image src={slider1} className="h-50" alt="#" />
            </div>
          </div>
          <div className="col">
            <div className="text-justify ">
              <h2 className="text-primary">Rumah Athan</h2>
              <p>
                Rumah Athan adalah rumah skincare dan Treatment untuk ibu - ibu
                atau mama- mama muda yang ingin melakukan perawatan untuk
                kulitnya. Kami menyediakan produk - produk skincare yang
                berkualitas dan aman untuk kulit. Kami juga menyediakan
                treatment untuk kulit yang sudah rusak atau mengalami masalah
                kulit. Kami juga menyediakan produk - produk untuk bayi dan anak
                - anak. Buruan mama mama kepoin produk kami dan jangan lupa
                untuk melakukan treatment untuk kulit mama - mama muda.
              </p>

              <div className="tombol">
                <div className="btn-group text-left">
                  <div className="row">
                    <a href="product-grids.html" className="btn">
                      <button type="button" className="btn btn-primary">
                        Our Products
                      </button>
                    </a>
                    <a href="product-grids.html" className="btn">
                      <button type="button" className="btn btn-primary">
                        Our Treatments
                      </button>
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
