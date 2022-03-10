import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import MediaQuery from 'react-responsive'
import MenuContext from '../../../util/context/MenuContext'
import { mdQuery } from '../../../util/helpers'
import hamburgerIcon from '../../../public/assets/hamburger.svg'
import ArrowLeft from '../../../public/assets/arrow-left.svg'
import ArrowButton from '../ArrowButton'

const MenuLayout = () => {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <MediaQuery maxWidth={mdQuery}>
        <nav className="ml-6 mt-6">
          {isMenuOpen ? (
            <ArrowButton
              active={isMenuOpen}
              handleClick={handleClick}
              icon={ArrowLeft}
              alt="hamburger-menu"
              size={20}
            />
          ) : (
            <button onClick={handleClick}>
              <Image
                width={40}
                height={40}
                src={hamburgerIcon}
                alt="hamburger-menu"
              />
            </button>
          )}
        </nav>

        {isMenuOpen && (
          <div className="bg-white flex flex-col items-center">
            <Link href="/">
              <a className="underline-gradient my-2">About Fran</a>
            </Link>
            <Link href="/contact">
              <a className="underline-gradient my-2">Contact Me</a>
            </Link>
          </div>
        )}
      </MediaQuery>
      <MediaQuery minWidth={mdQuery}>
        <nav className="flex flex-row items-center justify-evenly font-bold text-xl my-4">
          <Link href="/">
            <a className="underline-gradient">About Fran</a>
          </Link>
          <Link href="/contact">
            <a className="underline-gradient">Contact Me</a>
          </Link>
        </nav>
      </MediaQuery>
    </>
  )
}

export default MenuLayout
