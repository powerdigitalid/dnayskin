import Head from "next/head";
import EditCustomer from "../../../components/admin-pages/form-customer/editCustomer";
import Layout from "../../../components/admin-pages/utils/layout";

export default function Edit(){
  return(
    <>
    <Layout>
      <Head>
        <title>Edit Customer</title>
      </Head>
      <EditCustomer />
    </Layout>
    </>
  )
}