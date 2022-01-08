import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Menu from './menu/Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Franziska Pendzialek</title>
        <meta
          name="description"
          content="Tech and Coding Portfolio of Franziska Pendzialek"
        />
      </Head>
      <Menu />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
