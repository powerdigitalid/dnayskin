import React, { useEffect, useState } from "react";
import { getCookie } from "../../../utils/cookie.util";

export default function InputReservation() {
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [officeId, setOfficeId] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const handleFetchCustomers = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCustomers([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleCreateReservation = (e) => {};
  useEffect(() => {
    handleFetchCustomers();
  }, []);
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <label>Pilih Member</label>
            <select className="form-control">
              <option>Pilih ...</option>
              {customers.length > 0 ? customers.map((customer, i) => (
                <option key={i} value={customer.id}>{customer.cust_name}</option>
              )):(<option></option>)}
            </select>
          </div>
          <div className="form-group col-6">
            <label>Pilih Kantor</label>
            <select onChange={(e) => setOfficeId(e.target.value)} className="form-control">
              <option value={'kantorSonggon'}>Kantor Songgon</option>
              <option value={'kantorRogojampi'}>Kantor Rogojampi</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label>Tanggal</label>
            <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)}/>
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
              onChange={(e) => setDescription(e.target.value)}
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
