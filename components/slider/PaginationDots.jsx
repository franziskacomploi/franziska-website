import React from 'react'

const PaginationDots = ({ sliderItems, currentIndex, handleClick }) => {
  return (
    <div className="mt-10 flex flex-row gap-2">
      {sliderItems.map((_, i) => {
        return (
          <button
            type="button"
            key={i}
            className={`rounded-full w-4 h-4 ${
              i === currentIndex ? 'bg-mint' : 'bg-dark'
            }`}
            onClick={() => {
              handleClick(i)
            }}
          />
        )
      })}
    </div>
  )
}

export default PaginationDots
