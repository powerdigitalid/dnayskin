import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";

export default function AllTreatment() {
  return (
    <section className="trending-product section" id="alltreatments">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Semua Treatment</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* Start Single Product */}
            <div className="single-product">
              <div className="row">
                <div className="col">
                  <div className="product-image">
                    <Image src={Product} className="h-50" alt="#" />
                  </div>
                </div>
                <div className="col">
                  <div className="product-info">
                    <h4 className="title">Glowing Peeling
                    </h4>
                    <span className="category">
                      Wajah kamu kusam dan kasar? Yuk, angkat sel kulit matimu
                      dalam waktu singkat. Bahan aktifnya membuat wajahmu cerah
                      bersinar. Ga perlu nunggu lama. Wajahmu kembali glowing!
                    </span>
                    <div className="price">
                      <span>$199.00</span>
                    </div>
                    <div className="button">
                      <button
                        type="button"
                        href="#"
                        className="btn btn-primary btn-hover-light"
                        data-bs-toggle="modal"
                        data-bs-target="#pesanKantor"
                      >
                        <i className="lni lni-cart" /> Pesan Sekarang
                      </button>
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
