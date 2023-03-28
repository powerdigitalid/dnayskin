import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCookie } from "../../../utils/cookie.util";

export default function InputTransaksi() {
  const router = useRouter();
  // transaction data
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [addedProducts, setAddedProducts] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState({});
  const [addedTreatment, setAddedTreatment] = useState([]);
  const [officeId, setOfficeId] = useState("");
  const [date, setDate] = useState("");
  const [anamnesia, setAnamnesia] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [total, setTotal] = useState(0);
  // end of transaction data
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [treatments, setTreatments] = useState([]);

  // fetch data
  const handleFetchCustomers = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCustomers([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleFetchProducts = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}product/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setProducts([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleFetchTreatment = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}treatment/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setTreatments([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  // end of fetch data

  // handle add product event
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (selectedProduct.productId !== undefined) {
      if (!selectedProduct.productId.substring(0, 6).includes("Pilih")) {
        setAddedProducts([...addedProducts, selectedProduct]);
        setTotal(total + parseInt(selectedProduct.price));
      }
    }
    setSelectedProduct({});
  };
  const handleClearProduct = (e) => {
    e.preventDefault();
    setAddedProducts([]);
    setTotal(0);
  };
  // end of handle add product event

  // handle add treatment event
  const handleAddTreatment = (e) => {
    e.preventDefault();
    if (selectedTreatment.treatmentId !== undefined) {
      if (!selectedTreatment.treatmentId.substring(0, 6).includes("Pilih")) {
        setAddedTreatment([...addedTreatment, selectedTreatment]);
        setTotal(total + parseInt(selectedTreatment.price));
      }
    }
    setSelectedTreatment({});
  };
  const handleClearTreatment = (e) => {
    e.preventDefault();
    setAddedTreatment([]);
    setTotal(0);
  };
  // end of handle add treatment event
  // handle create transaction
  const handleCreateTransaction = (e) => {
    e.preventDefault();
    const data = {
      customerId: customerId,
      customerName: customerName,
      userId: getCookie("id"),
      officeId: officeId,
      order_detail: [...addedProducts, ...addedTreatment],
      order_date: date,
      order_desc: "-",
      order_total: total,
      order_payment: "-",
      anamnesa: anamnesia,
      diagnosa: diagnosis,
      terapi: "-"
    };
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          Swal.fire("Info", data.message, "success");
          router.push("/admin/transaksipages");
        } else {
          Swal.fire("Error", "Transaksi gagal dibuat!", "error");
          console.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  // end of handle create transaction
  useEffect(() => {
    handleFetchCustomers();
    handleFetchProducts();
    handleFetchTreatment();
  }, []);

  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="text-center text-dark ">
              <h2>Input Transaksi</h2>
              <hr className="mx-auto rounded custom-hr"></hr>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Nama Member</label>
              <select onChange={(e) => { setCustomerId(e.target.value.split(';')[0]); setCustomerName(e.target.value.split(';')[1]) }} className="form-control">
                <option>Pilih ...</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={`${customer.id};${customer.cust_name}`}>
                    {customer.cust_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-2">
              <label>Product</label>
              <select onChange={(e) => {
                if (e.target.value !== '') setSelectedProduct({
                  productId: e.target.value.split(";")[0],
                  product_name: e.target.value.split(";")[1],
                  quantity: 1,
                  price: parseInt(e.target.value.split(";")[2]),
                })
              }}
                className="form-control">
                <option>Pilih ...</option>
                {products.map((product) => (
                  <option key={product.id} value={`${product.id};${product.product_name};${parseInt(product.product_price)}`}>
                    {product.product_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-2">
              <label>Treatment</label>
              <select onChange={(e) => {
                if (e.target.value !== '') setSelectedTreatment({
                  treatmentId: e.target.value.split(";")[0],
                  treatment_name: e.target.value.split(";")[1],
                  quantity: 1,
                  price: parseInt(e.target.value.split(";")[2]),
                })
              }}
                className="form-control">
                <option>Pilih ...</option>
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={`${treatment.id};${treatment.treatment_name};${parseInt(treatment.treatment_price)}`}>
                    {treatment.treatment_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-2 my-auto">
              <button onClick={(e) => { handleAddProduct(e); handleAddTreatment(e); }} className="btn btn-primary btn-block">Tambah</button>
            </div>
          </div>
          <div className="row">
            <label className="form-group col-12 text-primary m-0">
              Product Added
              <button className="btn btn-sm btn-danger float-right" onClick={handleClearProduct} >Bersihkan</button>
            </label>
            <div
              className="form-group col-12 overflow-auto w-auto"
              style={{ height: "100px" }}
            >
              <table className="table table-sm table-hover" >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Products</th>
                    <th className="text-center">Harga (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {addedProducts.length > 0 ? (addedProducts.map((product, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{product.product_name}</td>
                      <td className="text-right">{product.price}</td>
                    </tr>
                  ))) : (<tr><td className="text-center text-warning" colSpan={3}>Belum ada product yang ditambahkan</td></tr>)}
                </tbody>
              </table>
            </div>
            <label className="form-group col-12 text-primary m-0">
              Treatment Added
              <button className="btn btn-sm btn-danger float-right" onClick={handleClearTreatment} >Bersihkan</button>
            </label>
            <div
              className="form-group col-12 overflow-auto w-auto"
              style={{ height: "100px" }}
            >
              <table className="table table-sm table-hover" >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Treatments</th>
                    <th className="text-center">Harga (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {addedTreatment.length > 0 ? (addedTreatment.map((treatment, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{treatment.treatment_name}</td>
                      <td className="text-right">{treatment.price}</td>
                    </tr>
                  ))) : (<tr><td className="text-center text-warning" colSpan={3}>Belum ada treatment yang ditambahkan</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Kantor</label>
              <select onChange={(e) => setOfficeId(e.target.value)} className="form-control">
                <option>Pilih ...</option>
                <option value={'kantor_Rogojampi'}>Kantor Rogojampi</option>
                <option value={'kantor_Songgon'}>Kantor Songgon</option>
                {/* <option value={'kantorC'}>Kantor C</option> */}
              </select>
            </div>
            <div className="form-group col-6">
              <label>Tanggal</label>
              <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Anamnesia</label>
                <textarea className="form-control" onChange={(e) => setAnamnesia(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea className="form-control" onChange={(e) => setDiagnosis(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Total Pesanan</label>
                <div className="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Rp</span>
                  </div>
                  <input className="form-control text-right" type="number" value={total} disabled />
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button onClick={handleCreateTransaction} className="btn btn-primary ">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
