import React from 'react'

export default function NotFound() {
  return (
     <div className='bg-gradient-to-r from-yellow-100 to-green-300 h-screen w-screen flex justify-center items-center flex-col'>
    <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-2">Looks like this page took a vacation!</p>
      <p className="text-lg">We can't seem to find the page you're looking for. Maybe it's off exploring the web?</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to the homepage</a>
    </div>

  )
}
