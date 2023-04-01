import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import InputTreatment from '../../../components/admin-pages/form-treatment/inputTreatment'
import TabelReservation from '../../../components/admin-pages/reservation/tabelReservation'
import Layout from '../../../components/admin-pages/utils/layout'
import { getCookie } from '../../../utils/cookie.util';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    getCookie("token").length > 0 ? "" : router.push("/login");
  });
  return (
    <div>
      <Layout>
        <Head>
          <title>Reservation</title>
        </Head>
        <TabelReservation/>
      </Layout>
    </div>
  )
}
