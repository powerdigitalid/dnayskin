import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";

export default function AllTreatment() {
  return (
    <section className="trending-product section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>All Treatment</h2>
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
                  </div>
                </div>
                <div className="col">
                  <div className="product-info">
                    <h4 className="title">
                      <a href="product-grids.html">Glowing Peeling</a>
                    </h4>
                    <span className="category">
                      Wajah kamu kusam dan kasar? Yuk, angkat sel kulit matimu
                      dalam waktu singkat. Bahan aktifnya membuat wajahmu cerah
                      bersinar. Ga perlu nunggu lama. Wajahmu kembali glowing!
                    </span>
                    <div className="price">
                      <span>$199.00</span>
                    </div>
                    <div className="row">
                      <div>
                        <button type="button" className="btn btn-success m-2">
                          <i className="fas fa-edit" /> Edit
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-danger m-2">
                          <i className="fas fa-trash" /> Hapus
                        </button>
                      </div>
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
                  </div>
                </div>
                <div className="col">
                  <div className="product-info">
                    <h4 className="title">
                      <a href="product-grids.html">Glowing Peeling</a>
                    </h4>
                    <span className="category">
                      Wajah kamu kusam dan kasar? Yuk, angkat sel kulit matimu
                      dalam waktu singkat. Bahan aktifnya membuat wajahmu cerah
                      bersinar. Ga perlu nunggu lama. Wajahmu kembali glowing!
                    </span>
                    <div className="price">
                      <span>$199.00</span>
                    </div>
                    <div className="row">
                      <div>
                        <button type="button" className="btn btn-success m-2">
                          <i className="fas fa-edit" /> Edit
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-danger m-2">
                          <i className="fas fa-trash" /> Hapus
                        </button>
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
