import Head from "next/head";
import CerateProduct from "../../../components/admin-pages/form-produk/formInputProduct";
import Layout from "../../../components/admin-pages/utils/layout";

export default function CreateProductPages() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Product</title>
        </Head>
        <CerateProduct/>
      </Layout>
    </>
  );
}