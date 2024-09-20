import { useState, useEffect } from 'react'
import Login from './pages/public/Login'
import NavBar from './pages/private/Navbar'
import Button from './components/Button'
import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import Topics from './pages/private/Topics';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from './components/Container';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className='max-w-7xl mx-auto p-2'>

      <div className="flex justify-center items-center p-8 my-1 h-[calc(100vh-30vh)] md:h-[calc(100vh-220px)] bg-[url('./assets/no-data.jpg')]" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <p className='text-2xl md:text-6xl text-gray-400'>“Every program depends on algorithms and data structures, but few programs depend on the invention of brand new ones.”</p>
      </div>
    </div >

  )
}

export default App
