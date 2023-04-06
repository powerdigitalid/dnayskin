import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookie.util";
import Image from "next/image";
 
export default function AllTreatment() {
  const [dataTreatment, setDataTreatment] = useState([]);
  const router = useRouter();

  const fetchTreatment = async () => {
    fetch("https://powerdigital.id/rumahatha-backend/api/v1/treatment/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        
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
        `https://powerdigital.id/rumahatha-backend/api/v1/treatment/delete/${id}`,
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
          <div key={i} className="col-lg-6 col-md-12 col-sm-12">
            {/* Start Single treatment */}
            <div className="single-product">
              <div className="row">
                <div className="col">
                  <div className="treatment-image">
                    <img src={`https://powerdigital.id/rumahatha-backend${treatment.treatment_img}`} alt={""} />
                  </div>
                </div> 
                <div className="col">
                  <div className="product-info">
                    <h4 className="title">
                      <a href="#">{treatment.treatment_name}</a>
                    </h4>
                    <span className="category overflow-auto">
                      {treatment.treatment_desc}
                    </span>
                    <div className="price">
                      <span>Rp {treatment.treatment_price}</span>
                    </div>
                    <div className="row">
                      <div>
                        {/* <button type="button" className="btn btn-success m-2"> */}
                        <Link href={`/admin/formtreatmentpages/edit?id=${treatment.id}&nameTreatment=${treatment.treatment_name}&price=${treatment.treatment_price}&description=${treatment.treatment_desc}&image=${treatment.treatment_img}`} type="button" className="btn btn-success m-2">
                          <i className="fas fa-edit" /> Edit
                        </Link>
                        {/* </button> */}
                      </div>
                      <div>
                        <button className="btn btn-danger p-1 m-2" onClick={()=> deleteTreatment(treatment.id)}>
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
