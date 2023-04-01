import Head from "next/head";
import LoginComponent from "../components/admin-pages/logincomponent";

export default function Login() {
  return (
    <>
      <Head>
        <title>Dashboard Login</title>
      </Head>
      <LoginComponent />
    </>
  )
}