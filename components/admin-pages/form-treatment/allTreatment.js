import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";

export default function AllTreatment() {
  const [dataTreatment, setDataTreatment] = useState([]);
  const router = useRouter();

  const fetchTreatment = async () => {
    fetch("http://localhost:3000/api/v1/treatment/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataTreatment(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTreatment();
  }, []);

  async function deleteTreatment(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/treatment/delete/${id}`,
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
      alert("Data berhasil dihapus");
    } catch (err) {
      console.log(err);
      alert("Data gagal dihapus");
    }
    router.push("/admin/formtreatmentpages");
  }
  return (
    <section className="trending-treatment section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>All Treatment</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {dataTreatment.map((treatment, i) => (
          <div key={i} className="col">
            {/* Start Single treatment */}
            <div className="single-treatment">
              <div className="row">
                <div className="col">
                  <div className="treatment-image">
                    <img src={`http://localhost:3000${treatment.treatment_img}`} height={150}
                    width={200}/>
                  </div>
                </div>
                <div className="col">
                  <div className="treatment-info">
                    <h4 className="title">
                      <a href="treatment-grids.html">{treatment.treatment_name}</a>
                    </h4>
                    <span className="category">
                      {treatment.treatment_desc}
                    </span>
                    <div className="price">
                      <span>Rp {treatment.treatment_price}</span>
                    </div>
                    <div className="row">
                      <div>
                        {/* <button type="button" className="btn btn-success m-2"> */}
                        <Link href={`/admin/formtreatmentpages/edit?id=${treatment.id}&nametreatment=${treatment.treatment_name}&price=${treatment.treatment_price}&description=${treatment.treatment_desc}&image=${treatment.treatment_img}`} type="button" className="btn btn-success">
                          <i className="fas fa-edit" /> Edit
                        </Link>
                        {/* </button> */}
                      </div>
                      <div>
                        <button className="btn btn-danger p-1" onClick={()=> deleteTreatment(treatment.id)}>
                          <i className="fas fa-trash" /> Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single treatment */}
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
