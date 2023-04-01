import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AllTreatment from "../../../components/admin-pages/form-treatment/allTreatment";
import InputTreatment from "../../../components/admin-pages/form-treatment/inputTreatment";
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
      <Head>
        <title>Treatment</title>
      </Head>
      <InputTreatment/>
      <AllTreatment/>
    </Layout>
    </>
  )
}