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
            Silahkan Pilih Kantor Yang Akan Dihubungi..
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-primary">
                  Kantor 1
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary">
                  Kantor 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
