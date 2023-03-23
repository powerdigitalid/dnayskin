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
  const [officeId, setOfficeId] = useState("");
  const [date, setDate] = useState("");
  const [anamnesia, setAnamnesia] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [total, setTotal] = useState(0);
  // end of transaction data
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
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
  const handleAddProduct = (e) => {
    e.preventDefault();
    setAddedProducts([...addedProducts, selectedProduct]);
    setTotal(total + parseInt(selectedProduct.price));
    setSelectedProduct({});
  };
  const handleClearProduct = (e) => {
    e.preventDefault();
    setAddedProducts([]);
    setTotal(0);
  };
  const handleCreateTransaction = (e) => {
    e.preventDefault();
    const data = {
      customerId: customerId,
      customerName: customerName,
      userId: getCookie("id"),
      officeId: officeId,
      order_detail: addedProducts,
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
  useEffect(() => {
    handleFetchCustomers();
    handleFetchProducts();
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
              <select onChange={(e) => {setCustomerId(e.target.value.split(';')[0]); setCustomerName(e.target.value.split(';')[1])}} className="form-control">
                <option>Pilih ...</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={`${customer.id};${customer.cust_name}`}>
                    {customer.cust_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-4">
              <label>Product</label>
              <select onChange={(e) => {
                setSelectedProduct({
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
            <div className="form-group col-2 my-auto">
              <button onClick={handleAddProduct} className="btn btn-primary btn-block">Tambah</button>
            </div>
          </div>
          <div className="row">
            <label className="form-group col-12 text-primary m-0">
              Product Added
              <button className="btn btn-sm btn-danger float-right" onClick={handleClearProduct}>Bersihkan</button>
            </label>
            <div
              className="form-group col-12 overflow-auto w-auto"
              style={{ height: "100px" }}
            >
              <table className="table table-sm table-hover" >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th className="text-center">Harga (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {addedProducts.length > 0 ? (addedProducts.map((product, i) => (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{product.product_name}</td>
                      <td className="text-right">{product.price}</td>
                    </tr>
                  ))) : (<tr><td className="text-center text-warning" colSpan={3}>Belum ada produk yang ditambahkan</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Kantor</label>
              <select onChange={(e) => setOfficeId(e.target.value)} className="form-control">
                <option value={'kantorA'}>Kantor A</option>
                <option value={'kantorB'}>Kantor B</option>
                <option value={'kantorC'}>Kantor C</option>
              </select>
            </div>
            <div className="form-group col-6">
              <label>Tanggal</label>
              <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Anamnesia</label>
                <textarea className="form-control" onChange={(e) => setAnamnesia(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea className="form-control" onChange={(e) => setDiagnosis(e.target.value)}/>
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
