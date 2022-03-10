import Image from 'next/image'
import React from 'react'

const ArrowButton = ({ handleClick, icon, alt, size, className, active }) => {
  return (
    <>
      {active && (
        <button onClick={handleClick} className={className}>
          <Image width={size} height={size} src={icon} alt={alt} />
        </button>
      )}
    </>
  )
}

export default ArrowButton
