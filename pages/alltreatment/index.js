import Layout from "../../components/home-pages/utils/layout";
import Scipts from "../../components/home-pages/utils/scripts";
import Modal from "../../components/home-pages/utils/modalNewProduct";
import AllTreatment from "../../components/home-pages/treatment/allTreatment";
import Hero from "../../components/home-pages/utils/hero";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AllTreatment />
        <Modal />
        <Scipts />
      </Layout>
    </>
  );
}
