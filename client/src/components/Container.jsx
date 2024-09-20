import React from 'react'

export default function Container({ children }) {
  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300 h-[calc(100vh-60px)] md:h-[calc(100vh-68px)] w-screen flex justify-center items-center'>
      {children}
    </div>
  )
}
