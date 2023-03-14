import EditBanner from "../../../components/admin-pages/editbanner/editBanner";
import TabelBanner from "../../../components/admin-pages/editbanner/tabelBanner";
import Layout from "../../../components/admin-pages/utils/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <EditBanner />
        <TabelBanner />
      </Layout>
    </>
  );
}
