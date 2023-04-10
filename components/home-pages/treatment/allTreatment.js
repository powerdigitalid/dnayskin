import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AllTreatment() {
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
    <section className="trending-product section" id="alltreatments">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Semua Treatment</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        {dataTreatment.map((treatment, i) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
            {/* Start Single Product */}
            <div className="single-product" style={{ height: "350px" }}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="product-image">
                    <img src={`https://powerdigital.id/rumahatha-backend${treatment.treatment_img}`} className="" alt="#" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="product-info">
                    <h4 className="title">{treatment.treatment_name}
                    </h4>
                    <span className="category overflow-auto">
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
