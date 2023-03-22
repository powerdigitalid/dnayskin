import { useRouter } from "next/router";
import { useEffect } from "react";
import AllProduct from "../../../components/admin-pages/form-produk/allProduct";
import FormInputProduk from "../../../components/admin-pages/form-produk/formInputProduct";
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
      <FormInputProduk/>
      <AllProduct/>
    </Layout>
    </>
  )
}