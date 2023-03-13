import React from 'react'
import CardCustomer from '../../../components/admin-pages/form-customer/cardCustomer'
import InputTransaksi from '../../../components/admin-pages/transaksi/inputTransaksi'
import Layout from '../../../components/admin-pages/utils/layout'

export default function index() {
  return (
    <>
    <Layout>
      <CardCustomer/>
      <InputTransaksi/>
    </Layout>
    </>
  )
}
