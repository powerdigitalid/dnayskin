export default function Modal() {
  return (
    <div
      className="modal fade"
      id="pesanKantor"
      tabIndex={-1}
      aria-labelledby="pesanKantorLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="pesanKantorLabel">
              Pesan
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Silahkan Pilih Kantor Yang Akan Anda Hubungi..
          </div>
          <div className="modal-footer">
            <div className="row text-center">
              <div className="col">
                <a href="https://wa.me/+6285784678830?text=saya%20ingin%20bertanya%20atau%20membeli%20produk%20dan%20treatment%20RumahAthan" type="button" className="btn btn-primary">
                  Rogojampi
                </a>
              </div>
              <div className="col">
                <a href="https://wa.me/+6285880956067?text=saya%20ingin%20bertanya%20atau%20membeli%20produk%20dan%20treatment%20RumahAthan" type="button" className="btn btn-primary">
                  Songgon
                </a>
              </div>
              <div className="col">
                <a href="https://wa.me/+6281944605887?text=saya%20ingin%20bertanya%20atau%20membeli%20produk%20dan%20treatment%20RumahAthan" type="button" className="btn btn-primary">
                  Melaya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
