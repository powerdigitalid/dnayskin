import Head from "next/head";
import React from "react";
import Favicon from "../../../public/dist/img/logo/logo.svg";
import Footer from "./footer";
import Navbar from "./navbar";
//coba next-seo wkwkqk
import {NextSeo} from 'next-seo';


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Rumah Athan | Beauty Center</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/dist/img/logo/logos.png" />
        <NextSeo
      title="Rumah Athan"
      description="Beauty Center Banyuwangi"
      canonical="https://rumahathan.com/"
    />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
