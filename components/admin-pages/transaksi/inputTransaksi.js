import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SelectName({ className, options = [] }) {
  return (
    <select className={className}>
      <option>Pilih ...</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.cust_name}
        </option>
      ))}
    </select>
  )
}

function SelectProduct({ className, options = [] }) {
  return (
    <select className={className}>
      <option>Pilih ...</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.product_name}
        </option>
      ))}
    </select>
  )
}

export default function InputTransaksi() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const handleFetchCustomers = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.data) {
          setProducts([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleFetchCustomers();
    handleFetchProducts();
    console.log(customers)
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
              <SelectName className="form-control" options={customers} />
            </div>
            <div className="form-group col-4">
              <label>Product</label>
              <SelectProduct className="form-control" options={products}/>
            </div>
            <div className="form-group col-2 my-auto">
              <button className="btn btn-primary btn-block">Tambah</button>
            </div>
          </div>
          <div className="row">
            <label className="form-group col-12 text-primary m-0">
              Product Added
            </label>
            <div
              className="form-group col-12 overflow-auto w-auto"
              style={{ height: "100px" }}
            >
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
              <label>1. Produk Nomor 1</label>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Kantor</label>
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="form-group col-6">
              <label>Tanggal</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Anamnesia</label>
                <textarea className="form-control" />
              </div>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea className="form-control" />
              </div>
              <div className="form-group">
                <label>Total Pesanan : Rp. 500.000</label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary ">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
