import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCookie } from "../../../utils/cookie.util";

export default function TabelReservation() {
  const [reservations, setReservations] = useState([]);
  const handleFetchReservations = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}reservation/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setReservations([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleConfirmReservation = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah anda yakin ingin mengkonfirmasi reservasi ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.NEXT_PUBLIC_API_DEV}reservation/confirm/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Token": getCookie("token"),
          },
          body: JSON.stringify({ reservation_status: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.data) {
              Swal.fire("Info", "Berhasil Konfirmasi", "success");
              setReservations([]);
              handleFetchReservations();
            } else {
              Swal.fire("Info", "Gagal Konfirmasi", "error");
            }
          })
          .catch((err) => console.log(err));
      }
    })
  };
  useEffect(() => {
    handleFetchReservations();
  }, []);
  return (
    <div>
      <div>
        <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary">
                    <div className="col-12">
                      <div className="section-title">
                        <h2>Tabel Reservation</h2>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          id="table-1_wrapper"
                          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="table-1_length"
                              >
                                <label>
                                  Show{" "}
                                  <select
                                    name="table-1_length"
                                    aria-controls="table-1"
                                    className="form-control form-control-sm"
                                  >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="table-1_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder
                                    aria-controls="table-1"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table table-striped dataTable no-footer"
                                id="table-1"
                                role="grid"
                                aria-describedby="table-1_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="text-center sorting_asc"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-sort="ascending"
                                      aria-label="#activate to sort column descending"
                                      style={{ width: "24.4375px" }}
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "149.078px" }}
                                    >
                                      Nama Member
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Progress"
                                      style={{ width: "78.7344px" }}
                                    >
                                      Kantor
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Due Date: activate to sort column ascending"
                                      style={{ width: "89.0938px" }}
                                    >
                                      Tanggal
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Action: activate to sort column ascending"
                                      style={{ width: "73.1875px" }}
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="overflow-auto">
                                  {reservations.length < 1 ? (<tr role="row" className="odd"></tr>) : (reservations.map((reservation, i) => (
                                    <tr key={i} role="row" className={ (i+1) % 2 == 0 ? "even":"odd"}>
                                    <td className="sorting_1">{i+1}</td>
                                    <td>{reservation.customerName}</td>
                                    <td>{reservation.officeId.charAt(0).toUpperCase() + reservation.officeId.slice(1)}</td>
                                    <td>{new Date(reservation.reservation_date).toLocaleDateString()}</td>
                                    <td>
                                      <button onClick={(e) => handleConfirmReservation(e, reservation.id)} className={`btn ${reservation.reservation_status == "confirmed" ? "btn-success" : "btn-primary"}`} disabled={reservation.reservation_status == "confirmed" ? true : false}>
                                        {reservation.reservation_status == "confirmed" ? "Terkonfirmasi" : "Konfirmasi"}
                                      </button>
                                    </td>
                                  </tr>
                                  )))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="table-1_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 1 of 1 entries (filtered from 4
                                total entries)
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="table-1_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="table-1_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx={0}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx={1}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="table-1_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx={2}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
