import React, { useState } from 'react'
import MenuContext from '../../../util/context/MenuContext'
import MenuLayout from './MenuLayout'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <MenuLayout />
    </MenuContext.Provider>
  )
}

export default Menu
