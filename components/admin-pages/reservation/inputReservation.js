import React from "react";

export default function InputReservation() {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <label>Pilih Member</label>
            <select className="form-control">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="form-group col-6">
            <label>Pilih Kantor</label>
            <select className="form-control">
              <option>Kantor Songgon</option>
              <option>Kantor Rogojampi</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label>Tanggal</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <div className="form-group">
              <label className="d-block">Pilih Jasa</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Jasa 1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Jasa 1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Jasa 1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Jasa 1
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-12">
            <label>Deskripsi</label>
            <textarea
              className="form-control"
              placeholder="Masukkan deskripsi"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-12 col-md-7">
            <button className="btn btn-primary">Simpan</button>
          </div>
        </div>
      </form>
    </div>
  );
}
