import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EditBanner() {
  const [image, setImage] = useState("");

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

  const handleAddBanner =(e)=>{
    e.preventDefault();
    const dataTreatment ={
      image_path: image,
    };
    fetch("http://localhost:3000/api/v1/banner/create",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTreatment),
    })
    .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.message);
        router.push("/admin/formtreatmentpages");
        clearData();
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="section-title">
              <h2>Edit Banner</h2>
            </div>
          </div>
          <form onSubmit={handleAddBanner}>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="clearfix" />
            <div className="custom-file w-75 h-50 m-1">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={handleUploadImage}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Upload
              </label>
            </div>
          </div>
          <div className="author-box-details">
            <div className="author-box-name">
              <div className="form-group">
                <div className="form-row">
                  <div className="form-group col-12">
                    <label>Text Header</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Deskripsi</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
              <div className="row float-right">
                <button className="btn btn-success">
                  <i className="fas fa-plus fa-fw"></i> Tambah
                </button>
              </div>
            </div>
          </div>
            </form>
        </div>
      </div>
    </>
  )
}