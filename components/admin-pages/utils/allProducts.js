import Link from "next/link";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export default function AllProducts() {
  const [dataProduct, setDataProduct] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const getDataProduct = async () => {
      const res = await fetch("http://localhost:3000/api/v1/product/all");
      const data = await res.json();
      setDataProduct(data.data);
    }

    getDataProduct();
  }, []);
  
  // useEffect(() => {
  //   async function getImage() {
  //     const data = await Promise.all(dataProduct.map(async (product) => {
  //       const res = await fetch(`http://localhost:3000${product.product_img}`);
  //       const imageData = await res.blob(); // ubah format respon ke dalam Blob
  //       const imageURL = URL.createObjectURL(imageData); // buat URL objek untuk gambar
  //       return{
  //         ...product,
  //         image: imageURL
  //       }
  //     }))
  //     setDataProduct(data);
  //   }
  //   getImage();
  // }, [dataProduct])

  async function deleteProduct (id){
    try{
      const res = await fetch(`http://localhost:3000/api/v1/product/delete/${id}`, {
        method: "DELETE",
      })
      const data = await res.json();
      console.log(data);
      alert("Data berhasil dihapus");
    }
    catch(err){
      console.log(err);
      alert("Data gagal dihapus");
    }
    router.push("/admin");

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
          {dataProduct.map((i, product) => (
            <div key={i} className="col-lg-3 col-md-6 col-12">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src={`http://localhost:3000${product.product_img}`} className="" height={150} width={50} alt="#" />
                  <div className="row">
                    <div className="col text-white">
                      <div >
                        <button type="button" className="btn btn-success">
                          <i className="fas fa-edit" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="col text-white">
                      <div>
                        <button className="btn btn-danger" onClick={() => deleteProduct( product.id)}><i className="fas fa-trash" /> Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="title">
                    <a href="product-grids.html">{product.product_name}</a>
                  </h4>
                  <p className="title">
                    <a href="product-grids.html">{product.product_desc}</a>
                  </p>
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

