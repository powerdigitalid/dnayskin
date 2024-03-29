import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Swal from "sweetalert2";

export default function AllProducts() {
  const [dataProduct, setDataProduct] = useState([]);
  const router = useRouter();

  const fetchProduct = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}product/all`, {
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

  async function deleteProduct(id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DEV}product/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Token": getCookie("token"),
          },
        }
      );
      const data = await res.json();
      console.log(data);
      Swal.fire("Hapus", "Data Berhasil dihapus!", "error");
      router.push("/admin/formprodukpages");
    } catch (err) {
      console.log(err);
      alert("Data gagal dihapus");
    }
    
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>All Product</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card author-box card-primary"></div>
          {dataProduct.map((product, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img
                    src={`https://powerdigital.id/rumahatha-backend${product.product_img}`}
                    className=""
                    alt="#"
                  /> 
                  <div className="row">
                    <div className="col text-white">
                      <div>
                        <Link href={`/admin/formprodukpages/edit?id=${product.id}&nameProduct=${product.product_name}&price=${product.product_price}&description=${product.product_desc}&image=${product.product_img}`} type="button" className="btn btn-success">
                          <i className="fas fa-edit" /> Edit
                        </Link>
                      </div>
                    </div>
                    <div className="col text-white">
                      <div>
                        <a type="button"
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <i className="fas fa-trash" /> Hapus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="title">
                    {product.product_name}
                  </h4>
                  <span className="category overflow-auto" style={{ height: "150px" }}>{product.product_desc}</span>
                  <div className="price">
                    <span>Rp {product.product_price}</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
