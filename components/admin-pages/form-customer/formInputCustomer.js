import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Swal from "sweetalert2";

export default function FormInputCustomer() {
  const [image, setImage] = useState("");
  const [nameCustomer, setNameCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const clearData=()=>{
    setNameCustomer("");
    setPhone("");
    setImage("");
    setAddress("");
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const dataCustomer = {
      cust_name: nameCustomer,
      cust_phone: phone,
      cust_address: address,
      cust_img: image,
    };
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
      body: JSON.stringify(dataCustomer),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Swal.fire('Create', 'Data berhasil dibuat', 'success');
        router.push("/admin/formcustomerpages");
        clearData();
      })
      .catch((err) => console.log(err));
  };


  const handleUploadImageCust = (e) => {
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
          <div className="col-12">
            <div className="section-title">
              <h2>Tambahkan Customer</h2>
            </div>
          </div>
          <form onSubmit={handleAddCustomer}>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/avatar.webp"
              className="rounded author-box-picture"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="clearfix" />
            <div className="custom-file w-75 h-50 m-1">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={handleUploadImageCust}
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
                  <div className="form-group col-sm-6">
                    <label>Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={nameCustomer}
                      onChange={(e) => setNameCustomer(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Nomer Handphone</label>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend">
                        <span className="form-control form-control-sm">+62</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Nomer HP"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Alamat</label>
                    <textarea className="form-control" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success">
                    <i className="fas fa-plus fa-fw"></i> Tambah Customer
                  </button>
                </div>
              </div>
          </div>
            </form>
        </div>
      </div>
    </>
  );
}
