import FormInputCustomer from "../../../components/admin-pages/form-customer/formInputCustomer"
import TableCustomer from "../../../components/admin-pages/form-customer/tableCustomer";
import CardCustomer from "../../../components/admin-pages/form-customer/cardCustomer";
import Layout from "../../../components/admin-pages/utils/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "../../../utils/cookie.util";

export default function Index(){
  const router = useRouter();
  useEffect(()=>{
    getCookie("token").length > 0 ? "" : router.push("/login");
  });
  return(
    <>
    <Layout>
      <FormInputCustomer />
      <TableCustomer />
    </Layout>
    </>
  )
}