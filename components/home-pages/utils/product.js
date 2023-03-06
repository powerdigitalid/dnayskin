// import Product from "../../../public/dist/img/products/product-1.jpg"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

// integrasi backend express dengan next js yang memasukkan data dari backend express ke dalam card product yang sudah dibuat sebelumnya dengan menggunakan fetch data dari backend express yang sudah dibuat dengan port 3000/api/v1/product/all untuk menampilkan data text dan image data yang di fecth adalah product_name,product_price,product_img,product_desc yang nantinya akan di map ke dalam card product


// export default function Product() {
//   // fecth data dari backend express yang sudah dibuat dengan port 3000/api/v1/product/all untuk menampilkan data text dan image data yang di fecth adalah product_name,product_price,product_img,product_desc yang nantinya akan di map ke dalam card product
//   const [product, setProduct] = useState([]);

//   // return (
//   //   <section className="trending-product section" style={{ marginTop: 12 }}>
//   //     <div className="container">
//   //       <div className="row">
//   //         <div className="col-12">
//   //           <div className="section-title">
//   //             <h2>Trending Product</h2>
//   //             <p>
//   //               There are many variations of passages of Lorem Ipsum available,
//   //               but the majority have suffered alteration in some form.
//   //             </p>
//   //           </div>
//   //         </div>
//   //       </div>
//   //       <div className="row">
//   //         <div className="col-lg-3 col-md-6 col-12">
//   //           {/* Start Single Product */}
//   //           <div className="single-product">
//   //             <div className="product-image">
//   //               <Image src={Product} className="h-50"  alt="#" />
//   //               <div className="button">
//   //                 <a href="product-details.html" className="btn">
//   //                   <i className="lni lni-cart" /> Add to Cart
//   //                 </a>
//   //               </div>
//   //             </div>
//   //             <div className="product-info">
//   //               <span className="category">Watches</span>
//   //               <h4 className="title">
//   //                 <a href="product-grids.html">Xiaomi Mi Band 5</a>
//   //               </h4>
//   //               <ul className="review">
//   //                 <li>
//   //                   <i className="lni lni-star-filled" />
//   //                 </li>
//   //                 <li>
//   //                   <i className="lni lni-star-filled" />
//   //                 </li>
//   //                 <li>
//   //                   <i className="lni lni-star-filled" />
//   //                 </li>
//   //                 <li>
//   //                   <i className="lni lni-star-filled" />
//   //                 </li>
//   //                 <li>
//   //                   <i className="lni lni-star" />
//   //                 </li>
//   //                 <li>
//   //                   <span>4.0 Review(s)</span>
//   //                 </li>
//   //               </ul>
//   //               <div className="price">
//   //                 <span>$199.00</span>
//   //               </div>
//   //             </div>
//   //           </div>
//   //           {/* End Single Product */}
//   //         </div>
//   //         </div>
//   //       </div>
//   //   </section>
//   // );
// }
