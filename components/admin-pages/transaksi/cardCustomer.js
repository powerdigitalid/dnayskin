import React from 'react'

export default function CardCustomer() {
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="text-center text-dark ">
              <h2>Order</h2><hr className='mx-auto rounded custom-hr'></hr>
            </div>
          </div>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
            />
            <div className="clearfix" />
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
                      disabled
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Nomer Handphone</label>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend">
                        <span className="input-group-text">+62</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Nomer HP"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Alamat</label>
                    <textarea className="form-control" disabled></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
