import Product from "../../../public/dist/img/products/product-1.jpg";
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
                    data-toggle="modal"
                    data-target="#pesanKantor"
                  >
                    <i className="lni lni-cart" /> Pesan
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="pesanKantor"
                    tabIndex={-1}
                    aria-labelledby="pesanKantorLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="pesanKantorLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-success"
                    data-toggle="modal"
                    data-target="#detailData"
                  >
                    <i className="fas fa-info"></i>
                  </button>
                  <div
                    className="modal fade"
                    id="detailData"
                    tabIndex={-1}
                    aria-labelledby="detailData"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Detail Data</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <span> tes</span>
                        </div>
                      </div>
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
