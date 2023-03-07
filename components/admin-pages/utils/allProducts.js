import Product from "../../../public/dist/img/products/product-1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function AllProducts() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const getDataProduct = async () => {
      const res = await fetch("http://localhost:3000/api/v1/product/all");
      const data = await res.json();
      setDataProduct(data.data);
    }

    getDataProduct();
  }, []);
  
  useEffect(() => {
    async function getImage() {
      const data = await Promise.all(dataProduct.map(async (product) => {
        const res = await fetch(`http://localhost:3000${product.product_img}`);
        const imageData = await res.blob(); // ubah format respon ke dalam Blob
        const imageURL = URL.createObjectURL(imageData); // buat URL objek untuk gambar
        return{
          ...product,
          image: imageURL
        }
      }))
      setDataProduct(data);
    }
    getImage();
  }, [dataProduct])

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
          {dataProduct.map((product) => (
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  {/* tempat memanggil getImage yang telah useEffect */}
                  <Image src={product.image} className="" height={150} width={50} alt="#" />
                  {/* <Image src={product.product_img} className="h-50 w-auto" alt="#"  /> */}
                  <div className="row">
                    <div className="col text-white">
                      <div className="btn btn-success" >
                        <a href="product-details.html" className="text-dark">
                          <i className="fas fa-edit" /> Edit
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="btn btn-danger">
                        <a href="product-details.html" className="text-dark">
                          <i className="fas fa-edit" /> Hapus
                        </a>
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


  // return (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-12">
  //           <div className="section-title">
  //             <h2>All Product</h2>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="card author-box card-primary"></div>
  //         <div className="col-lg-3 col-md-6 col-12">
  //           {/* Start Single Product */}
  //           <div className="single-product">
  //             <div className="product-image">
  //               <Image src={Product} className="h-50" alt="#" />
  //               <div className="row">
  //                 <div className="col text-white">
  //                   <div className="btn btn-success" >
  //                     <a href="product-details.html" className="text-dark">
  //                       <i className="fas fa-edit" /> Edit
  //                     </a>
  //                   </div>
  //                 </div>
  //                 <div className="col">
  //                   <div className="btn btn-danger">
  //                     <a href="product-details.html" className="text-dark">
  //                       <i className="fas fa-edit" /> Hapus
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="product-info">
  //               <h4 className="title">
  //                 <a href="product-grids.html">Xiaomi Mi Band 5</a>
  //               </h4>
  //               <div className="price">
  //                 <span>Rp 199.00</span>
  //               </div>
  //               <span className="category mt-1">
  //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //                 Cupiditate, consequatur ducimus dolorem error amet doloremque
  //                 officiis unde nisi asperiores quos!
  //               </span>
  //             </div>
  //           </div>
  //           {/* End Single Product */}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
// }
