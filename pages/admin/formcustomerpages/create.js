import FormInputCustomer from "../../../components/admin-pages/form-customer/formInputCustomer"
// import TableCustomer from "../../../components/admin-pages/form-customer/tableCustomer";
import Layout from "../../../components/admin-pages/utils/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/cookie.util";
import Head from "next/head";

export default function Create(){
  const router = useRouter();
  const [trigger, setTrigger] = useState(false);
  function refreshPage() {
    setTrigger(!trigger);
  }
  useEffect(()=>{
    getCookie("token").length > 0 ? "" : router.push("/login");
    console.log(trigger);
  });
  return(
    <>
    <Layout>
      <Head>
        <title>Customer</title>
      </Head>
      <FormInputCustomer onTriggered={refreshPage}/>
    </Layout>
    </>
  )
}