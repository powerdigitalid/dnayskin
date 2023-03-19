import { useRouter } from "next/router";
import { useEffect } from "react";
import TableTransaksi from "../../../components/admin-pages/transaksi/tabelTransaksi";
import Layout from "../../../components/admin-pages/utils/layout";
import { getCookie } from "../../../utils/cookie.util";

export default function Index(){
  const router = useRouter();
  useEffect(()=>{
    getCookie("token").length > 0 ? "" : router.push("/login");
  });
  return(
    <>
    <Layout>
      <TableTransaksi />
    </Layout>
    </>
  )
}