
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Swal from "sweetalert2";
 
export default function EditProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [_nameProduct, setNameProduct] = useState("");
  const [_price, setPrice] = useState("");
  const [_description, setDescription] = useState("");
  const [_image, setImage] = useState("");

  const router = useRouter();
  const { id, nameProduct, price, description, image } = router.query;

  useEffect(() => {
    if (typeof nameProduct === "string") {
      setNameProduct(nameProduct);
    }
    if (typeof price === "string") {
      setPrice(price);
    }
    if (typeof description === "string") {
      setDescription(description);
    }
    if (typeof image === "string") {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DEV}product/update/`+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
    Swal.fire('Update', 'Data berhasil diupdate', 'success');
    router.push("/admin/formprodukpages");
  }

  const handleUpdateImage = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}upload/image`, {
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
                src={`https://powerdigital.id/rumahatha-backend${_image}`}
                className="rounded author-box-picture"
              />
              <div className="clearfix" />
              <div className="custom-file w-75 h-50 m-1">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleUpdateImage}
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
                        value={_nameProduct}
                        onChange={(e) => setNameProduct(e.target.value)}

                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm">Rp</span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          value={_price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="form-control form-control-sm">.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <label>Deskripsi</label>
                      <textarea className="form-control" value={_description} onChange={(e) => setDescription(e.target.value)} />
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
                <button className="btn btn-success" type="submit" ><i className="fas fa-plus fa-fw"></i> Edit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
