import Head from "next/head";
import EditTreatmentComponent from "../../../components/admin-pages/form-treatment/editTreatment";
import Layout from "../../../components/admin-pages/utils/layout";

export default function EditTreatmentPages() {
  return (
    <>
      <Layout>
        <Head>
          <title>Edit Treatment</title>
        </Head>
        <EditTreatmentComponent/>
      </Layout>
    </>
  );
}