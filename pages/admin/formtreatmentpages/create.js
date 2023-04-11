import Head from "next/head";
import CerateTreatment from "../../../components/admin-pages/form-treatment/inputTreatment";
import Layout from "../../../components/admin-pages/utils/layout";

export default function CreateTreatmentPages() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Treatment</title>
        </Head> 
        <CerateTreatment/>
      </Layout>
    </>
  );
}