import React from 'react'
import TabelReservation from '../../components/admin-pages/reservation/tabelReservation'
import Layout from '../../components/admin-pages/utils/layout'

export default function index() {
  return (
    <div>
      <Layout>
        <TabelReservation/>
      </Layout>
    </div>
  )
}
