import AllProducts from "../utils/allProducts";

export default function FormInputProduct() {
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="section-title">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <div className="author-box-left">
            <img
              alt="image"
              src="/dist/img/products/product-1.jpg"
              className="rounded author-box-picture"
            />
            <div className="clearfix" />
            <a
              href="#"
              className="btn btn-primary mt-3 follow-btn"
              data-follow-action="alert('follow clicked');"
              data-unfollow-action="alert('unfollow clicked');"
            >
              Upload Gambar
            </a>
          </div>
          <div className="author-box-details">
            <div className="author-box-name">
              <div className="form-group">
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label>Nama Produk</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Harga</label>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Rp</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Rupiah"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Deskripsi</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 mt-3">
              <a
                href="#"
                className="btn btn-primary mt-3 follow-btn"
                data-follow-action="alert('follow clicked');"
                data-unfollow-action="alert('unfollow clicked');"
              >
                <i className="fas fa-plus" /> Tambah Produk
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <AllProducts />
      </div>
    </>
  );
}
