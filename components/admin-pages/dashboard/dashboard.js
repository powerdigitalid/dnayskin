import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/cookie.util";

export default function Dashboard() {
  const router = useRouter();
  const [reservations, setReservations] = useState(0);
  const [customers, setCusomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [treatments, setTreatments] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleCounter = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}dashboard/counter/all`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data){
          setReservations(data.data.currentReservations);
          setCusomers(data.data.customerCount);
          setProducts(data.data.productCount);
          setTreatments(data.data.treatmentCount);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCookie("token").length > 0 ? handleCounter() : router.push("/login");
  }, [reservations, customers, products, treatments]);
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-danger">
            <i className="fas fa-info-circle" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Current Reservations</h4>
            </div>
            <div className="card-body">
              {reservations}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-primary">
            <i className="far fa-user" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Customers</h4>
            </div>
            <div className="card-body">
              {customers}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-success">
            <i className="fas fa-box" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Products</h4>
            </div>
            <div className="card-body">
              {products}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-warning">
            <i className="fas fa-cubes" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Treatments</h4>
            </div>
            <div className="card-body">
              {treatments}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}