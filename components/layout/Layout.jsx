import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Menu from './menu/Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>About Fran</title>
        <meta name="description" content="A CV website." />
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
