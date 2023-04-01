import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EditBanner from "../../../components/admin-pages/editbanner/editBanner";
import TabelBanner from "../../../components/admin-pages/editbanner/tabelBanner";
import Layout from "../../../components/admin-pages/utils/layout";
import { getCookie } from "../../../utils/cookie.util";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    getCookie("token").length > 0 ? "" : router.push("/login");
  });
  return (
    <>
      <Layout>
        <Head>
          <title>Edit Banner</title>
        </Head>
        <EditBanner />
        {/* <TabelBanner /> */}
      </Layout>
    </>
  );
}
