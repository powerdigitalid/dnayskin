import Head from "next/head";
import DetailTransaksi from "../../../components/admin-pages/transaksi/detailtransaksi";
import Layout from "../../../components/admin-pages/utils/layout";

export default function Index(){
  return(
    <>
    <Layout>
      <Head>
        <title>Detail Transaksi</title>
      </Head>
      <DetailTransaksi />
    </Layout>
    </>
  )
}