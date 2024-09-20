import React from 'react'
import Container from '../../components/Container'

export default function NotFound() {
  return (
    <Container>
      <div className='bg-gradient-to-r from-gray-50 to-gray-200 h-full w-full flex justify-center items-center flex-col'>
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-2">Looks like this page took a vacation!</p>
        <p className="text-lg">We can't seem to find the page you're looking for. Maybe it's off exploring the web?</p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to the homepage</a>
      </div>
    </Container>


  )
}
