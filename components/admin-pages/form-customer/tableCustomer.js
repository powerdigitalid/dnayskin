import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Swal from "sweetalert2";

export default function TableCustomer(props) {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [search, setSearch] = useState('');
  const searched = dataCustomer.filter((customer) => customer.cust_name !== null ? customer.cust_name.toLowerCase().includes(search.toLowerCase()) : []);
  const router = useRouter();
  const fetchCustomer = async () => {
    setDataCustomer([]);
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setDataCustomer(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchCustomer();
  }, [props.onTriggered]);

  async function deleteCustomer(id) {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "X-Access-Token": getCookie("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            Swal.fire('Deleted!', 'Data berhasil dihapus', 'success');
            fetchCustomer();
          } else {
            Swal.fire('Failed!', 'Data gagal dihapus', 'error');
          }
        })
        .catch((err) => console.log(err));
      }
    })
    router.push("/admin/formcustomerpages");
  }

  return (
    <div>
      <div className="row flex-lg-nowrap">
        <div className="col">
          <div className="row">
            <div className="col-12">
              <div className="card author-box card-primary">
                <div className="col-12">
                  <div className="section-title">
                    <h2>Tabel Customer</h2>
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
                                  className="text-center sorting_asc col-1"
                                  tabIndex={0}
                                  aria-controls="table-1"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-sort="ascending"
                                  aria-label="#activate to sort column descending"
                                  style={{ width: "px" }}
                                >
                                  Nomer
                                </th>
                                <th
                                  className="sorting col-2"
                                  tabIndex={0}
                                  aria-controls="table-1"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "30px" }}
                                >
                                  Nama Member
                                </th>
                                <th
                                  className="sorting col-3"
                                  tabIndex={0}
                                  aria-controls="table-1"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Due Date: activate to sort column ascending"
                                  style={{ width: "px" }}
                                >
                                  Alamat
                                </th>
                                <th
                                  className="sorting col-6"
                                  tabIndex={0}
                                  aria-controls="table-1"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Action: activate to sort column ascending"
                                  style={{ width: "px" }}
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="overflow-auto">
                              {searched.map((customer, i) => (
                                <tr key={i} role="row" className="odd">
                                  <td className="sorting_1">{i + 1}</td>
                                  <td>{customer.cust_name}</td>
                                  <td>{customer.cust_address}</td>
                                  <td>
                                    <Link
                                      href={`/admin/reservationpages/inputreservation?customer=${customer.id}`}
                                      className="btn btn-sm btn-primary ml-2"
                                    >
                                      <i className="fas fa-calendar-check fa-fw" />Reservations
                                    </Link>
                                    <Link
                                      href={`/admin/transaksipages/inputtransaksi?customer=${customer.id}`}
                                      className="btn btn-sm btn-warning ml-2"
                                    >
                                      <i className="fas fa-shopping-basket fa-fw"></i> Input Transaksi
                                    </Link>
                                    <Link
                                      href={`/admin/formcustomerpages/edit?id=${customer.id}&nameCustomer=${customer.cust_name}&phone=${customer.cust_phone}&address=${customer.cust_address}&image=${customer.cust_img}`}
                                      type="button"
                                      className="btn btn-sm btn-success ml-2"
                                    >
                                      <i className="fas fa-edit fa-fw" /> Edit
                                    </Link>
                                    <a type="button"
                                      className="btn btn-sm btn-danger ml-2"
                                      onClick={() =>
                                        deleteCustomer(customer.id)
                                      }
                                    >
                                      <i className="fas fa-trash fa-fw" /> Hapus
                                    </a>
                                    <Link
                                      href={`/admin/formcustomerpages/details?id=${customer.id}`}
                                      type="button"
                                      className="btn btn-sm btn-info ml-2"
                                    >
                                      <i className="fas fa-info-circle fa-fw" /> Details
                                    </Link>
                                  </td>
                                </tr>
                              ))}
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
  );
}
