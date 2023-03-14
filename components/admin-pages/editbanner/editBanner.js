export default function EditBanner() {
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="section-title">
              <h2>Edit Banner</h2>
            </div>
          </div>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="clearfix" />
            <div className="custom-file w-75 h-50 m-1">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
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
                  <div className="form-group col-12">
                    <label>Text Header</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Deskripsi</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
              <div className="row float-right">
                <button className="btn btn-success">
                  <i className="fas fa-plus fa-fw"></i> Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}