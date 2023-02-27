import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";

export default function NewTreatment() {
  return (
    <section className="trending-product section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Treatment</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="row">
                <div className="col">
                  <div className="product-image">
                    <Image src={Product} className="h-50" alt="#" />
                    <div className="button">
                      <a href="product-details.html" className="btn">
                        <i className="lni lni-cart" /> Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product-info">
                    
                    <h4 className="title">
                      <a href="product-grids.html">Glowing Peeling</a>

                    </h4>
                    <span className="category">Wajah kamu kusam dan kasar? Yuk, angkat sel kulit matimu dalam waktu singkat. Bahan aktifnya membuat wajahmu cerah bersinar. Ga perlu nunggu lama. Wajahmu kembali glowing!</span>
                    {/* <ul className="review">
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star" />
                      </li>
                      <li>
                        <span>4.0 Review(s)</span>
                      </li>
                    </ul> */}
                    <div className="price">
                      <span>$199.00</span>
                    </div>
                    <div className="button">
                      <a href="product-details.html" className="btn">
                        <i className="lni lni-cart" /> Pesan Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className=" col">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="row">
                <div className="col">
                  <div className="product-image">
                    <Image src={Product} className="h-50" alt="#" />
                    <div className="button">
                      <a href="product-details.html" className="btn">
                        <i className="lni lni-cart" /> Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product-info">
                    
                    <h4 className="title">
                      <a href="product-grids.html">Glowing Peeling</a>

                    </h4>
                    <span className="category">Wajah kamu kusam dan kasar? Yuk, angkat sel kulit matimu dalam waktu singkat. Bahan aktifnya membuat wajahmu cerah bersinar. Ga perlu nunggu lama. Wajahmu kembali glowing!</span>
                    {/* <ul className="review">
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star-filled" />
                      </li>
                      <li>
                        <i className="lni lni-star" />
                      </li>
                      <li>
                        <span>4.0 Review(s)</span>
                      </li>
                    </ul> */}
                    <div className="price">
                      <span>$199.00</span>
                    </div>
                    <div className="button">
                      <a href="product-details.html" className="btn">
                        <i className="lni lni-cart" /> Pesan Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
