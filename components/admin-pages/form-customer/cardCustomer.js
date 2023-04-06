import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../utils/cookie.util';

export default function CardCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const [ customerData, setCustomerData ] = useState({})
  const handleFetchCustomerData = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_DEV}customer/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": getCookie("token"),
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.data){
        setCustomerData(data.data)
      }
    })
    .catch(err => console.log(err))
  };
  useEffect(() => {
    if(id){
      handleFetchCustomerData(id)
    }
  }, []);
  return (
    <>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="text-center text-dark ">
              <h2>Detail Member</h2><hr className='mx-auto rounded custom-hr'></hr>
            </div>
          </div>
          <div className="author-box-left">
            <img
              alt="image"
              // src={customerData.cust_image ? customerData.cust_image : '/dist/img/avatar.webp'}
              src={customerData.cust_img ? `http://localhost:3000${customerData.cust_img}` : '/dist/img/avatar.webp'}
              // src={`http://localhost:3000${customerData.cust_image}`}
              className="rounded author-box-picture "
            /> 
            <div className="clearfix" />
          </div>
          <div className="author-box-details">
            <div className="author-box-name">
              <div className="form-group">
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <label>Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={customerData.cust_name}
                      disabled
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Nomer Handphone</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-secondary">
                        <span className="form-control-sm">+62</span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        aria-label="Nomer HP"
                        value={customerData.cust_phone}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <label>Alamat</label>
                    <textarea className="form-control" value={customerData.cust_address} disabled></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/admin/formcustomerpages">
            <button className="btn btn-primary btn-sm">Kembali</button>
          </Link>
        </div>
      </div>
    </>
  )
}
