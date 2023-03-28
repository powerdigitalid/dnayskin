import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "../../../utils/cookie.util";
import { useRouter } from "next/router";
export default function DetailTransaksi() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState({});
  const handleFetchOrder = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token")
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.data){
          setOrder(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleFetchOrder();
  }, []);
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="text-center text-dark ">
              <h2>Detail Transaksi</h2>
              <hr className="mx-auto rounded custom-hr"></hr>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Nama Member</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={order.customerName ? order.customerName : ""}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <label className="form-group col-12 text-primary m-0">
              Products & Treatments
            </label>
            <div
              className="form-group col-12 overflow-auto w-auto"
              style={{ height: "100px" }}
            >
              <table className="table table-sm table-hover" >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Products & Treatments</th>
                    <th className="text-center">Harga (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {order.order_detail ? (order.order_detail.map((product, i) => (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{product.product_name ? product.product_name : product.treatment_name}</td>
                      <td className="text-right">{product.price}</td>
                    </tr>
                  ))) : (<tr><td className="text-center text-warning" colSpan={3}>Belum ada produk yang ditambahkan</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <div className="form-group">
                <label>Kantor</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={order.officeId ? order.officeId : ""}
                />
              </div>
            </div>
            <div className="form-group col-6">
              <label>Tanggal</label>
              <input type="text" className="form-control" value={order.order_date ? new Date(order.order_date).toLocaleString() : ""} disabled />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="form-group">
                <label>Anamnesia</label>
                <textarea
                  className="form-control"
                  disabled
                  value={order.anamnesa ? order.anamnesa : ""}
                />
              </div>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea
                  className="form-control"
                  disabled
                  value={order.diagnosa ? order.diagnosa : ""}
                />
              </div>
              <div className="form-group">
                <label>Total Pesanan : Rp. {order.order_total ? order.order_total : "0"}</label>
              </div>
              <div className="form-group">
                <Link href="/admin/transaksipages" className="btn btn-danger">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
