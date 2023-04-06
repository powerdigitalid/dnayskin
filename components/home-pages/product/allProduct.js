import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";

export default function AllProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  // const router = useRouter();

  const fetchProduct = async () => {
    fetch("https://powerdigital.id/rumahatha-backend/api/v1/product/landing", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        
        setDataProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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
        {dataProduct.map((product, i) => (
          <div className="col-lg-3 col-md-6 col-12" key={i}>
            {/* Start Single Product */}
            <div className="single-product">
              <div className="product-image">
                <img src={`https://powerdigital.id/rumahatha-backend${product.product_img}`} className=""  alt="#"/>
              </div>
              <div className="product-info">
                <h4 className="title">
                  <a href="#">{product.product_name}</a>
                </h4>
                <span className="category overflow-auto" style={{ height: "110px" }}>{product.product_desc}</span>
                <div className="price">
                  <span>Rp {product.product_price}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
