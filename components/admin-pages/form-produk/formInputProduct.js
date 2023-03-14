import AllProducts from "../utils/allProducts";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FormInputProduct() {
  const [image, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

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
        if (res.data) {
          setImage(res.data);
          alert(res.message);
        } else {
          alert(res.message);
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const clearData = () => {
    setNameProduct("");
    setPrice("");
    setImage("");
    setDescription("");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const dataProduct = {
      product_name: nameProduct,
      product_price: parseInt(price),
      product_img: image,
      product_desc: description,
    };
    fetch("http://localhost:3000/api/v1/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.message);
        router.push("/admin/formprodukpages");
        clearData();
      })
      .catch((err) => console.log(err));
  };

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
                // src={`http://localhost:3000${product.product_img}`}
                value={image}
                className="rounded author-box-picture"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-75 h-50 m-1">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleUploadImage}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
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
                      <textarea
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="isi deskripsi product"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success">
                    <i className="fas fa-plus fa-fw "></i> Tambah
                  </button>
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
