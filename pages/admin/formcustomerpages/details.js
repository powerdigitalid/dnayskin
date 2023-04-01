import Head from "next/head";
import CardCustomer from "../../../components/admin-pages/form-customer/cardCustomer";
import Layout from "../../../components/admin-pages/utils/layout";

export default function Details(){
  return(
    <>
    <Layout>
      <Head>
        <title>Details Customer</title>
      </Head>
      <CardCustomer/>
    </Layout>
    </>
  )
}