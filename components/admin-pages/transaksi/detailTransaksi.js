import React from "react";
import Link from "next/link";
export default function DetailTransaksi() {
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="text-center text-dark ">
              <h2>Detail Transaksi</h2>
              <hr className="mx-auto rounded custom-hr"></hr>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Nama Member</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"Nama Aku"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <label className="form-group col-12 text-primary m-0">
              Product & Treatment
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
              <div className="form-group">
                <label>Kantor</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"Kantor Songgon"}
                />
              </div>
            </div>
            <div className="form-group col-6">
              <label>Tanggal</label>
              <input type="date" className="form-control" disabled />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Anamnesia</label>
                <textarea
                  className="form-control"
                  disabled
                  value={"mengalami kerutan wajah"}
                />
              </div>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea
                  className="form-control"
                  disabled
                  value={"ada tuma"}
                />
              </div>
              <div className="form-group">
                <label>Total Pesanan : Rp. 500.000</label>
              </div>
              <div className="form-group">
                <Link href="/admin/transaksipages" className="btn btn-danger">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
