import { createContext } from 'react'

const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
})

export default MenuContext
