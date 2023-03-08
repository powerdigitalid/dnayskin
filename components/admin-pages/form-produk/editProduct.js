
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export default function EditProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [_nameProduct, setNameProduct] = useState("");
  const [_price, setPrice] = useState("");
  const [_description, setDescription] = useState("");
  const [_image, setImage] = useState("");

  const router = useRouter();
  const {nameProduct, price, description, image} = router.query;

  useEffect(() => {
    if(typeof nameProduct === "string"){
      setNameProduct(nameProduct);
    }
    if(typeof price === "string"){
      setPrice(price);
    }
    if(typeof description === "string"){
      setDescription(description);
    }
    if(typeof image === "string"){
      setImage(image);
    }
  }, [nameProduct, price, description, image]);

  const submitUpdate = async (e) => {
    e.preventDefault();
    const data = {
      product_name: _nameProduct,
      product_price: parseInt(_price),
      product_desc: _description,
      product_img: _image,
    };
    const res = await fetch("http://localhost:3000/api/v1/product/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
    alert("Data berhasil diupdate");
    router.push("/admin");
  }

  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Edit Product</h2>
              </div>
            </div>
          </div>
          <form onSubmit={submitUpdate}>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
            />
            <div className="clearfix" />
            <a
              href="#"
              className="btn btn-primary mt-3 follow-btn"
              data-follow-action="alert('follow clicked');"
              data-unfollow-action="alert('unfollow clicked');"
            >
              Upload Gambar
            </a>
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
                      value={_nameProduct}
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
                        value={_price}
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
                    <textarea className="form-control" value={_description} onChange={(e)=> setDescription(e.target.value)} />
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
                <i className="fas fa-edit" /> Edit Product
              </a> */}
              <button className="btn btn-success" type="submit" ><i className="fas fa-plus fa-fw"></i> Tambah</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
