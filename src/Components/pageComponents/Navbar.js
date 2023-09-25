import React, {useState} from 'react'
import {IoMdNotifications} from 'react-icons/io'
import {IoSettingsSharp} from 'react-icons/io5'
import {motion } from 'framer-motion'
import {FaRegSmileWink} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import SideBar from '../pageComponents/SideBar'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useAuth } from '../Context/AuthContext'

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false)  
  const {logout} = useAuth()

  return (

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 scrollbar-hide">
  <div className="container flex flex-wrap justify-between items-center mx-auto h-14">
    {!toggleSidebar &&
    <motion.div animate={{opacity:1}} initial={{opacity:0}} >
    <Link to="/" className="flex items-center ">
        <motion.div
          animate={ {scale:[1,1.2,0.8,1,0,1] }}
          transition={{duration: 2}}
          
        ><FaRegSmileWink fontSize={30} className='text-white mr-3 hover:animate-spin '/></motion.div>
       <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} > <span className="self-center text-xl mt-3 font-semibold whitespace-nowrap dark:text-white">SupplierRender</span></motion.div>
    </Link>
    </motion.div>
    }
    {!toggleSidebar &&
    <button onClick={()=> setToggleSidebar(!toggleSidebar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button> 
    }
    {toggleSidebar &&
  <>
  <div className='fixed top-2 right-3 h-screen'>
   <button onClick={()=> setToggleSidebar(!toggleSidebar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    </div>
    
    <motion.div animate={{x:0, y:0}} initial={{x:100, y:0}} transition={{ type: "spring", stiffness: 200, }} className= "md:hidden fixed right-0 top-0 w-80 text-white bg-blue-900 h-full" > 
  
          <div className='fixed right-0 top-3'>
            <AiFillCloseCircle fontSize={30} className='text-white cursor-pointer' onClick={()=> setToggleSidebar(false)} />
          </div>
          
          <SideBar options={true} />
            
      </motion.div>
      
   </>
    }
    

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
        <li>
        <NavLink to="/help"><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-600 md:p-0 dark:text-white  hover:text-fuchsia-500 " >Help</motion.div></NavLink>
        </li>
        <li>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} animate={{y:[0,-25,0]}} ><div className="block py-2 pr-4 pl-3 hover:text-red-600 ease-in-out duration-200 text-gray-700 rounded  md:border-0 md:p-0 dark:text-gray-400 "><IoMdNotifications fontSize={25} /></div></motion.div>
        </li>
        <li>
        <NavLink to="/settings"><motion.div whileHover={{ scale: 1.2, rotate: 360}} animate={{ x:[0, 50, 0]}}  whileTap={{ scale: 0.8 }} className="block py-2 pr-4 pl-3 hover:text-red-600  text-gray-700 rounded  md:border-0 md:p-0 dark:text-gray-400"><IoSettingsSharp  fontSize={25}/></motion.div></NavLink>
        </li>
        <li>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><div onClick={logout} className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-600 md:p-0 dark:text-white  hover:text-fuchsia-500 ease-in-out duration-200" aria-current="page">Sign out</div></motion.div>
        </li>
      </ul>
    </div>
  </div>
</nav>


      )
}
