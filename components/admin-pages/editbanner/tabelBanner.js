import React from "react";
import { useState, useEffect } from "react";

export default function TabelBanner() {
  const [dataBanner, setDataBanner] = useState([]);


  const fetchBanner = async () => {
    fetch("http://localhost:3000/api/v1/banner/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataBanner(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="col-12">
              <div className="section-title">
                <h2>Banner Content</h2>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div
                  id="table-1_wrapper"
                  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                >
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
                              Image
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="table-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Judul Content"
                              style={{ width: "149.078px" }}
                            >
                              Text Header
                            </th>
                            <th
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Deskripsi"
                              style={{ width: "149.078px" }}
                            >
                              Deskripsi
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
                        {/* {dataBanner.map(banner => ( */}
                          <tr role="row" className="odd">
                            <td>
                              <img
                                // src={`http://localhost:3000${image_path}`}
                                alt="SourceImage"
                              />
                            </td>
                            <td>Judul Content</td>
                            <td>Deskripsi Content</td>
                            <td>
                              <a href="#" className="btn btn-danger">
                                Hapus
                              </a>
                            </td>
                          </tr>
                          {/* ))} */}
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
  );
}
