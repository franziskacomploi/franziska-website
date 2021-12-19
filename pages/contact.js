import React from 'react'
import Hero from '../components/Hero'
import { Widget } from '@typeform/embed-react'

const Contact = () => {
  const widgetContainerStyle = {
    width: 500,
    height: 600,
  }
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center py-28 gradient">
        <Widget
          id="UehmCZMU"
          style={widgetContainerStyle}
          className="contact-form"
        />
      </div>
    </div>
  )
}

export default Contact
