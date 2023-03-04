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
        </div>
      </div>
    </>
  )
}
