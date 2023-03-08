import React from 'react'

export default function InputTransaksi() {
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="row">
            <div className="form-group col-6">
              <label>Select</label>
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="form-group col-4">
              <label>Select</label>
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
          <div className='row'>
            <div className='form-group col-12 overflow-auto w-auto' style={{ height: "100px" }}>
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
              <label>1. Produk Nomor 1</label><br />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Select</label>
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="form-group col-6">
              <label>Select</label>
              <select className="form-control">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Textarea</label>
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
  )
}
