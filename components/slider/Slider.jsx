import React from 'react'
import ArrowButton from '../layout/ArrowButton'
import ArrowLeft from '../../public/assets/arrow-left.svg'
import ArrowRight from '../../public/assets/arrow-right.svg'

const Slider = ({ children, currentIndex, setCurrentIndex, dataLength }) => {
  const handleClickLeft = () => {
    setCurrentIndex(currentIndex - 1)
  }
  const handleClickRight = () => {
    setCurrentIndex(currentIndex + 1)
  }
  return (
    <>
      <div className="w-20">
        <ArrowButton
          active={currentIndex > 0}
          handleClick={handleClickLeft}
          icon={ArrowLeft}
          alt="slider-arrow-left"
          size={30}
        />
      </div>
      {children}
      <div className="w-20">
        <ArrowButton
          active={currentIndex < dataLength - 1}
          handleClick={handleClickRight}
          icon={ArrowRight}
          alt="slider-arrow-right"
          size={30}
        />
      </div>
    </>
  )
}

export default Slider
