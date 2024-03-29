import Layout from "../../components/admin-pages/utils/layout";
import Dashboard from "../../components/admin-pages/dashboard/dashboard";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div>
          <div className="section-header">
            <h1>Dashboard</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Home</a></div>
              <div className="breadcrumb-item"><a href="#">Dashboard</a></div>
            </div>
          </div>
          <div className="section-body">
            <Dashboard/>
          </div>
        </div>
      </Layout>
    </>
  )
}
