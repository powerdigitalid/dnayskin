import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from '../../../utils/cookie.util';
import Swal from "sweetalert2";
 
export default function InputTreatment() {
  const [image, setImage] = useState("");
  const [nameTreatment, setNameTreatment] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const clearData = () => {
    setNameTreatment("");
    setPrice("");
    setImage("");
    setDescription("");
  };

  const handleUploadImage = (e) => {
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
        
      })
      .catch((err) => console.log(err));
  };

  const handleAddTreatment =(e)=>{
    e.preventDefault();
    const dataTreatment ={
      treatment_name: nameTreatment,
        treatment_price: parseInt(price),
        treatment_img: image,
        treatment_desc: description,
    };
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}treatment/create`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
      body: JSON.stringify(dataTreatment),
    })
    .then((res) => res.json())
      .then((res) => {
        
        Swal.fire('Create', 'Data berhasil diupdate', 'success');
        router.push("/admin/formtreatmentpages");
        clearData();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="section-title row">
              <h2 className='col-12'>Tambahkan Treatment</h2>
            </div>
          </div>
          <form onSubmit={handleAddTreatment} >
            <div className="author-box-left">
              <div
                // alt="image"
                // className="rounded author-box-picture"
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
                      <label>Nama Treatment</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={nameTreatment}
                        onChange={(e)=>setNameTreatment(e.target.value)}
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
                          value={price}
                          onChange={(e)=> setPrice(e.target.value)}
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
                      <textarea
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
      
  )
}
