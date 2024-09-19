import { useState } from 'react'
import Login from './pages/public/Login'
import NavBar from './pages/private/Navbar'
import Button from './components/Button'
import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import Topics from './pages/private/Topics';
function App() {
  console.log("Hi")
  const [count, setCount] = useState(0)
  const [topics, setTopics] = useState([
    'Array',
    'Linked List',
    'Stack',
    'Queue',
    'Tree',
    'Recursion',
    'Heap',
    'Graph',
    'Hash',
  ])
  return (
    <>
      {/* <div className='bg-gradient-to-r from-gray-100 to-gray-300 h-screen w-screen flex justify-center items-center'> */}
      {/* <!-- component --> */}
      {/* <NavBar /> */}
      <Topics topics={topics}/>
    </>
  )
}

export default App
