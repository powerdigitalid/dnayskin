import Head from 'next/head'
import React from 'react'
import InputReserv from '../../../components/admin-pages/reservation/inputReservation'
import Layout from '../../../components/admin-pages/utils/layout'


export default function InputReservation() {
  return (
    <div>
     <Layout>
      <Head>
        <title>Input Reservation</title>
      </Head>
      <InputReserv/>
     </Layout>
    </div>
  )
}
