
import Layout from '../components/home-pages/utils/layout'
import Hero from '../components/home-pages/utils/hero'
import About from '../components/home-pages/utils/about'
import NewProduct from '../components/home-pages/utils/newProduct'



export default function Home() {
  return (
    <>
      <Layout>
      <Hero />
      <About />
      <NewProduct />
      </Layout>
    </>
  )
}
