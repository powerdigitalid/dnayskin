import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Link from "next/link";

export default function NewProduct() {
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
        console.log(res);
        setDataProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section className="trending-product section" style={{ marginTop: 12 }} id="newProduct">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Produk Terbaru</h2>
              <p>
                Berikut adalah beberapa produk terbaru yang kami, silahkan klik link dibawah ini untuk melihat semua produk kami.
              </p>
              <Link href="/allproduk#allproduk" className="btn btn-primary btn-hover-light">Semua Produk</Link>
            </div>
          </div>
        </div>
        <div className="row">
        {dataProduct.slice(0, 4).map((product, i) => (
          <div className="col-lg-3 col-md-6 col-12" key={i}>
            {/* Start Single Product */}
            <div className="single-product" style={{height: "450px"}}>
              <div className="product-image">
                <Image src={`https://powerdigital.id/rumahatha-backend${product.product_img}`} className=""  alt="#" width={40} height={160}/>
              </div>
              <div className="product-info">
                <h4 className="title">
                  <a href="product-grids.html">{product.product_name}</a>
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
