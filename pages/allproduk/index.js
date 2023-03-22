import Layout from "../../components/home-pages/utils/layout";
import Scipts from "../../components/home-pages/utils/scripts";
import Modal from "../../components/home-pages/utils/modalNewProduct";
import AllProduct from "../../components/home-pages/product/allProduct";
import Hero from "../../components/home-pages/utils/hero";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AllProduct />
        <Modal />
        <Scipts />
      </Layout>
    </>
  );
}
