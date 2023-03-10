import React from "react";

export default function InputTransaksi() {
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
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="form-group col-4">
              <label>Product</label>
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
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
                <label>Deskripsi</label>
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
