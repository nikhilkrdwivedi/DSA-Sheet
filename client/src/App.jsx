import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className='max-w-7xl mx-auto p-2'>
      <div className="flex justify-center items-center flex-col p-8 my-1 h-[calc(100vh-30vh)] md:h-[calc(100vh-220px)] bg-[url('./assets/no-data.jpg')]" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <p className='text-2xl md:text-6xl text-gray-400'>“Every program depends on algorithms and data structures, but few programs depend on the invention of brand new ones.”</p>
        <p className='text-xl md:text-2xl text-gray-400 text-right w-full'> - Kernighan & Pike.</p>
      </div>
    </div >

  )
}

export default App
