import AllProducts from "../utils/allProducts";
import { useState,useEffect } from "react";

export default function FormInputProduct() {
  
  const [image, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    fetch("http://localhost:3000/api/v1/upload/image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setImage(res.data);
        console.log(res);
      }
      )
      .catch((err) => console.log(err));
  }

  const clearData = () => {
    setNameProduct("");
    setPrice("");
    setImage("");
    setDescription("");
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    const dataProduct = {
      product_name: nameProduct,
      product_price: price,
      product_img: image,
      product_desc: description,
    };
    fetch("http://localhost:3000/api/v1/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:(dataProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        clearData();
      }
      )
      .catch((err) => console.log(err));

  }


  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="section-title">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form onSubmit={handleAddProduct}>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
            />
            <div className="clearfix" />
            {/* <a
              href="#"
              className="btn btn-primary mt-3 follow-btn"
              data-follow-action="alert('follow clicked');"
              data-unfollow-action="alert('unfollow clicked');"
            >
              
            </a> */}
            <input type="file" onChange={handleUploadImage} id="product" />
          </div>
          <div className="author-box-details">
            <div className="author-box-name">
              <div className="form-group">
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label>Nama Produk</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Nama Produk"
                      value={nameProduct}
                      onChange={(e) => setNameProduct(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Harga</label>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Rp</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Rupiah"
                        placeholder="Harga"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Deskripsi</label>
                    <textarea class="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="isi deskripsi product"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
              {/* <a
                href="#"
                className="btn btn-primary mt-3 follow-btn"
                data-follow-action="alert('follow clicked');"
                data-unfollow-action="alert('unfollow clicked');"
              >
                <i className="fas fa-plus " /> Tambah Produk
              </a> */}
              <div className="row float-right">
            <button className="btn btn-success"><i className="fas fa-plus fa-fw"></i> Tambah</button>
          </div>
            </div>
          </div>
            </form>
        </div>
      </div>
      <div className="container">
        <AllProducts />
      </div>
    </>
  );
}
