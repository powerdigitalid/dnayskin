import Link from "next/link";
export default function TableCustomer() {
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
                              <tr role="row" className="odd">
                                <td className="sorting_1">1</td>
                                <td>Dian Ahmad</td>
                                <td>
                                  Desa Sragi Kecamatan Songgon Kabupaten
                                  Banyuwangi{" "}
                                </td>
                                <td>
                                  <Link
                                    href="/admin/reservationpages/inputreservation"
                                    className="btn btn-primary m-2"
                                  >
                                    Reservations
                                  </Link>
                                  <Link
                                    href="/admin/transaksipages/inputtransaksi"
                                    className="btn btn-warning m-2"
                                  >
                                    Input Transaksi
                                  </Link>
                                  <Link
                                    href="/admin/formcustomerpages/edit"
                                    className="btn btn-info m-2"
                                  >
                                    Edit
                                  </Link>
                                  <a href="#" className="btn btn-danger m-2">
                                    Hapus
                                  </a>
                                </td>
                              </tr>
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
                            Showing 1 to 1 of 1 entries (filtered from 4 total
                            entries)
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
  );
}
