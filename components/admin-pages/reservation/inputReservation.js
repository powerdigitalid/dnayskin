import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCookie } from "../../../utils/cookie.util";
import { useRouter } from "next/router";

export default function InputReservation() {
  const router = useRouter();
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
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
  const handleCreateReservation = (e) => {
    e.preventDefault();
    const data = {
      customerName: customerName,
      customerId: customerId,
      userId: getCookie("id"),
      officeId: officeId,
      reservation_date: date,
      reservation_time: "-",
      reservation_note: description,
      reservation_status: "pending",
    };
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}reservation/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          Swal.fire("Info", "Berhasil membuat reservasi", "success");
          router.push("/admin/reservationpages");
          handleClearForm();
        } else {
          Swal.fire("Info", "Gagal membuat reservasi", "error");
          console.log(data);
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleClearForm = () => {
    setCustomerId("");
    setOfficeId("");
    setDate("");
    setDescription("");
  };
  useEffect(() => {
    handleFetchCustomers();
  }, []);
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <label>Pilih Member</label>
            <select onChange={(e) => {setCustomerId(e.target.value.split(";")[0]);setCustomerName(e.target.value.split(";")[1])}} className="form-control">
              <option>Pilih ...</option>
              {customers.length > 0 ? customers.map((customer, i) => (
                <option key={i} value={`${customer.id};${customer.cust_name}`}>{customer.cust_name}</option>
              )) : (<option></option>)}
            </select>
          </div>
          <div className="form-group col-6">
            <label>Pilih Kantor</label>
            <select onChange={(e) => setOfficeId(e.target.value)} className="form-control">
              <option value={''} disabled>Pilih Kantor...</option>
              <option value={'Kantor_Songgon'}>Kantor Songgon</option>
              <option value={'Kantor_Rogojampi'}>Kantor Rogojampi</option>
              <option value={'Kantor_Melaya'}>Kantor Melaya Bali</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label>Tanggal</label>
            <input type="datetime-local" className="form-control" onChange={(e) => setDate(e.target.value)} />
          </div>
          {/* <div className="form-group col-sm-6">
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
          </div> */}
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
            <button onClick={handleCreateReservation} className="btn btn-primary">Simpan</button>
          </div>
        </div>
      </form>
    </div>
  );
}
