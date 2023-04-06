import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getCookie } from "../../../utils/cookie.util";

export default function TabelBanner() {
  const [dataBanner, setDataBanner] = useState([]);
  const fetchBanner = async () => {
    fetch("https://powerdigital.id/rumahatha-backend/api/v1/banner/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataBanner(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteBanner = (e, id, banner_header) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: `Data banner "${banner_header}" akan dihapus. Data yang dihapus tidak dapat dikembalikan!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://powerdigital.id/rumahatha-backend/api/v1/banner/delete/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Access-Token": getCookie("token"),
            },
          })
            .then((res) => res.json())
            .then((res) => {
              Swal.fire(
                'Terhapus!',
                res.message,
                'success'
              );
              fetchBanner();
            })
            .catch((err) => console.log(err));
        }
      })
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
                          {dataBanner.map((banner, i) => (
                            <tr key={i} role="row" className="odd">
                              <td>
                                <img
                                  src={`https://powerdigital.id/rumahatha-backend${banner.image_path}`}
                                  alt="SourceImage"
                                />
                              </td>
                              <td>{banner.text_header}</td>
                              <td>{banner.text_desc}</td>
                              <td>
                                {/* <button onClick={e => handleDeleteBanner(e, banner.id, banner.text_header)} className="btn btn-danger">
                                  Hapus
                                </button> */}
                                {/* <button  className="btn btn-success"> */}
                                <Link href={`/admin/editbannerpages/editbanner?id=${banner.id}&textheader=${banner.text_header}&description=${banner.text_desc}&image=${banner.image_path}`} type="button" className="btn btn-success">
                          <i className="fas fa-edit" /> Edit
                        </Link>
                                {/* </button> */}
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
  );
}
