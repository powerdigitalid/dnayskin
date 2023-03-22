import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";

export default function AllProduct() {
  return (
    <section className="trending-product section" style={{ marginTop: 12 }} id="allproduk">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Semua Produk</h2>
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
                <Image src={Product} className="h-50" alt="#" />
              </div>
              <div className="product-info">
                <h4 className="title">
                  <a href="product-grids.html">Skincare Wajah</a>
                </h4>
                <span className="category">Deskripsinya</span>
                <div className="price">
                  <span>Rp 50.000</span>
                </div>
                <div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#pesanKantor"
                  >
                    <i className="lni lni-cart" /> Pesan
                  </button>
                  {/* Modal */}
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
