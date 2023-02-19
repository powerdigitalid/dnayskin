import { Html, Head, Main, NextScript } from 'next/document'
import HomeScripts from '../components/home-pages/utils/scripts'
import AdminScript from '../components/admin-pages/utils/scripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <HomeScripts/>
        <AdminScript/>
      </body>
    </Html>
  )
}
