import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Swal from "sweetalert2";
export default function EditCustomer() {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [_nameCustomer, setNameCustomer] = useState("");
  const [_phone, setPhone] = useState("");
  const [_address, setAddress] = useState("");
  const [_image, setImage] = useState("");

  const router = useRouter();
  const { id, nameCustomer, phone, address, image } = router.query;

  useEffect(() => {
    if (typeof nameCustomer === "string") {
      setNameCustomer(nameCustomer);
    }
    if (typeof phone === "string") {
      setPhone(phone);
    }
    if (typeof address === "string") {
      setAddress(address);
    }
    if (typeof image === "string") {
      setImage(image);
    }
  }, [nameCustomer, phone, address, image]);

  const submitUpdate = async (e) => {
    e.preventDefault();
    const data = {
      cust_name: _nameCustomer,
      cust_phone: _phone,
      cust_address: _address,
      cust_img: _image,
    };
    const res = await fetch("http://localhost:3000/api/v1/customer/update/"+id, {
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
    router.push("/admin/formcustomerpages");
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
          <div className="col-12">
            <div className="section-title">
              <h2>Edit Customer</h2>
            </div>
          </div>
          <form onSubmit={submitUpdate}>
          <div className="author-box-left">
            <img
              alt="image"
              src={`http://localhost:3000${_image}`}
              className="rounded author-box-picture"
              style={{ width: "100px", height: "100px" }}
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
                      value={_nameCustomer}
                      onChange={(e)=> setNameCustomer(e.target.value)}
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
                        value={_phone}
                        onChange={(e)=> setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Alamat</label>
                    <textarea className="form-control"
                    value={_address}
                    onChange={(e)=> setAddress(e.target.value)} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success" type="submit">
                    <i className="fas fa-plus fa-fw"></i> Edit
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
