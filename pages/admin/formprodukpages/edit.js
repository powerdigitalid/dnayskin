import Head from "next/head";
import EditProduct from "../../../components/admin-pages/form-produk/editProduct";
import Layout from "../../../components/admin-pages/utils/layout";

export default function EditProductPages() {
  return (
    <>
      <Layout>
        <Head>
          <title>Edit Product</title>
        </Head>
        <EditProduct/>
      </Layout>
    </>
  );
}