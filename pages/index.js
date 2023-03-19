
import Layout from '../components/home-pages/utils/layout'
import Hero from '../components/home-pages/utils/hero'
import About from '../components/home-pages/utils/about'
import NewProduct from '../components/home-pages/utils/newProduct'
import NewTreatment from '../components/home-pages/utils/newTreatment'
import Scipts from '../components/home-pages/utils/scripts'


export default function Home() {
  return (
    <>
      <Layout>
      <Hero />
      <About />
      <NewProduct />
      <NewTreatment />
      <Scipts />
      </Layout>
    </>
  )
}
