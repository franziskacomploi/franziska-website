import Link from 'next/link'
import React, { useContext } from 'react'
import MenuContext from '../../../util/context/MenuContext'

const MenuLayout = () => {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  return (
    <>
      <nav className="flex flex-row items-center justify-evenly font-bold text-xl my-4">
        <Link href="/">
          <a className="underline-gradient">About Fran</a>
        </Link>
        <Link href="/contact">
          <a className="underline-gradient">Contact Me</a>
        </Link>
      </nav>
    </>
  )
}

export default MenuLayout
