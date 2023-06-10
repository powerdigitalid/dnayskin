import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "../../../utils/cookie.util";
import { useRouter } from "next/router";
export default function TabelTransaksiCustomer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const searched = orders.filter((order) => order.customerName !== null ? order.customerName.toLowerCase().includes(search.toLowerCase()) : []);
  const router = useRouter();
  const handleFetchOrders = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}order/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setOrders(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleFetchOrders();
  }, []);

  async function deleteOrder(id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DEV}order/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Token": getCookie("token"),
          },
        }
      );
      const data = await res.json();
      console.log(data);
      alert("Data History berhasil dihapus");
    } catch (err) {
      console.log(err);
      alert("Data History gagal dihapus");
    }
    router.push("/admin/transaksipages");
  }
  return (
    <div>
      <div>
        <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col">
              <div className="row">
                <div className="col-12">
                  <div className="card author-box card-primary">
                    <div className="col-12">
                      <div className="section-title">
                        <h2>History Transaksi Customer</h2>
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
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
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
                                      aria-label="#: activate to sort column descending"
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
                                      style={{ width: "30px" }}
                                    >
                                      Kantor
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Members"
                                      style={{ width: "100px" }}
                                    >
                                      Anamnesia
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Members"
                                      style={{ width: "30px" }}
                                    >
                                      Diagnosis
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="product & treatment"
                                      style={{ width: "px" }}
                                    >
                                      Product & Treatment
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Keterangan"
                                      style={{ width: "px" }}
                                    >
                                      Keterangan
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Due Date: activate to sort column ascending"
                                      style={{ width: "px" }}
                                    >
                                      Due Date
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="table-1"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Total"
                                      style={{ width: "px" }}
                                    >
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {searched.length > 0 ? (
                                    searched.map((order, i) => (
                                      <tr
                                        key={i + 1}
                                        role="row"
                                        className={
                                          (i + 1) % 2 == 0 ? "even" : "odd"
                                        }
                                      >
                                        <td className="sorting_1">{i + 1}</td>
                                        <td>{order.customerName}</td>
                                        <td>{order.officeId}</td>
                                        <td>{order.anamnesa}</td>
                                        <td>{order.diagnosa}</td>
                                        <td>pelembab <br />
                                          lulur<br />
                                        </td>
                                        <td>contoh keterangan</td>
                                        <td>
                                          {new Date(
                                            order.order_date
                                          ).toLocaleDateString()}
                                        </td> 
                                        <td>
                                          Rp. 30.0000
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td
                                        colSpan={7}
                                        className="text-center text-warning"
                                      >
                                        Data Order Kosong!
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
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
