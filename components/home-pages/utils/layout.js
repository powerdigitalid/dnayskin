import Head from 'next/head'
import React from 'react'
import Favicon from '../../../public/dist/img/logo/logo-3.png'
import Footer from './footer'
import Navbar from './navbar'


export default function Layout({children}) {
  return (
    <div>
        <Head>
        <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>D`Nayskin</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
        </Head>
        <Navbar />
        {children}
        <Footer />
        
    </div>
  )
}
