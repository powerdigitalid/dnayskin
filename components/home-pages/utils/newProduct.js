import Product from "../../../public/dist/img/products/product-1.jpg"
import Image from "next/image";

export default function NewProduct() {
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Product</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Watches</span>
                <h4 className="title">
                  <a href="product-grids.html">Xiaomi Mi Band 5</a>
                </h4>
                <ul className="review">
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
                </ul>
                <div className="price">
                  <span>$199.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <span className="sale-tag">-25%</span>
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Speaker</span>
                <h4 className="title">
                  <a href="product-grids.html">Big Power Sound Speaker</a>
                </h4>
                <ul className="review">
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
                    <i className="lni lni-star-filled" />
                  </li>
                  <li>
                    <span>5.0 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$275.00</span>
                  <span className="discount-price">$300.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Camera</span>
                <h4 className="title">
                  <a href="product-grids.html">WiFi Security Camera</a>
                </h4>
                <ul className="review">
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
                    <i className="lni lni-star-filled" />
                  </li>
                  <li>
                    <span>5.0 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$399.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <span className="new-tag">New</span>
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Phones</span>
                <h4 className="title">
                  <a href="product-grids.html">iphone 6x plus</a>
                </h4>
                <ul className="review">
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
                    <i className="lni lni-star-filled" />
                  </li>
                  <li>
                    <span>5.0 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$400.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Headphones</span>
                <h4 className="title">
                  <a href="product-grids.html">Wireless Headphones</a>
                </h4>
                <ul className="review">
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
                    <i className="lni lni-star-filled" />
                  </li>
                  <li>
                    <span>5.0 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$350.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Speaker</span>
                <h4 className="title">
                  <a href="product-grids.html">Mini Bluetooth Speaker</a>
                </h4>
                <ul className="review">
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
                </ul>
                <div className="price">
                  <span>$70.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <span className="sale-tag">-50%</span>
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Headphones</span>
                <h4 className="title">
                  <a href="product-grids.html">PX7 Wireless Headphones</a>
                </h4>
                <ul className="review">
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
                </ul>
                <div className="price">
                  <span>$100.00</span>
                  <span className="discount-price">$200.00</span>
                </div>
              </div>
            </div>
            {/* End Single Product */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <Image src={Product} className="h-50"  alt="#" />
                <div className="button">
                  <a href="product-details.html" className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="product-info">
                <span className="category">Laptop</span>
                <h4 className="title">
                  <a href="product-grids.html">Apple MacBook Air</a>
                </h4>
                <ul className="review">
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
                    <i className="lni lni-star-filled" />
                  </li>
                  <li>
                    <span>5.0 Review(s)</span>
                  </li>
                </ul>
                <div className="price">
                  <span>$899.00</span>
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
