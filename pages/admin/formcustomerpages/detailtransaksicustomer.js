import Head from "next/head";
import Layout from "../../../components/admin-pages/utils/layout";
import DetailTransaksiCustomer from "../../../components/admin-pages/form-customer/detailTransaksiCustomer"

export default function TabelTransaksiCustomerPages(){
  return(
    <>
    <Layout>
      <Head>
        <title>Details Transaksi Customer</title>
      </Head>
      <DetailTransaksiCustomer/>
    </Layout>
    </>
  )
}