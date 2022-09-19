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
        <div className="p-2 text-white border-2">
          <a href="https://www.linkedin.com/in/franziska-pendzialek/">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
