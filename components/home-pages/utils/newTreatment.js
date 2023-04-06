import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NewTreatment() {
  const [dataTreatment, setDataTreatment] = useState([]);
  const router = useRouter();

  const fetchTreatment = async () => {
    fetch("https://powerdigital.id/rumahatha-backend/api/v1/treatment/landingg", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
  return (
    <section className="trending-product section" id="newTreatment">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Treatment Terbaru</h2>
              <p>
                Berikut adalah beberapa treatment terbaru yang kami, silahkan
                klik link dibawah ini untuk melihat semua treatment kami.
              </p>
              <Link
                href="/alltreatment#alltreatments"
                className="btn btn-primary btn-hover-light"
              >
                Semua Treatment
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {dataTreatment.slice(0, 2).map((treatment, i) => (
            <div className="col-lg-6 col-md-12 col-sm-12" key={i}>
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="product-image">
                      <img
                        src={`https://powerdigital.id/rumahatha-backend${treatment.treatment_img}`}
                        className=""
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="product-info">
                      <h4 className="title">{treatment.treatment_name}</h4>
                      <span
                        className="category overflow-auto"
                      >
                        {treatment.treatment_desc}
                      </span>
                      <div className="price">
                        <span>Rp. {treatment.treatment_price}</span>
                      </div>
                      <div className="button">
                        <button
                          type="button"
                          href="#"
                          className="btn btn-primary btn-hover-light"
                          data-bs-toggle="modal"
                          data-bs-target="#pesanKantor"
                        >
                          <i className="lni lni-cart" /> Pesan Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
