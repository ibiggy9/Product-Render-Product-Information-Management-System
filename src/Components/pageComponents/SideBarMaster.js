import React, {useState} from 'react'
import SideBar from '../pageComponents/SideBar'
import {HiMenu} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'

export default function SideBarMaster({brands}) {
  const [toggleSidebar, setToggleSidebar] = useState(false)  

  return (
     <div> 
      <div className="hidden md:flex overflow-hidden">
        <motion.div >
          <SideBar brands={brands} />
        </motion.div>
      </div>
      {!toggleSidebar &&
      <motion.div animate={{scale:1, opacity: 1}} initial={{opacity:0, scale:0.5}}>
      <div className="flex md:hidden flex-row ml-5">
        <div className="p-2 w-full flex flex-row justify-between items-center">
          <HiMenu fontSize={40} className="cursor-pointer text-white" onClick={() => setToggleSidebar(true)} />
        </div>
        </div>
        </motion.div>
      }    
        {toggleSidebar &&
        <motion.div animate={{scale:1, opacity: 1}} initial={{opacity:0, scale:0.5}}  >
        <div className='fixed md:hidden w-3/5 h-screen overflow-y-auto shadow-md z-10'>
          
          <div className='absolute w-full flex justify-end items-center  '>
            <AiFillCloseCircle fontSize={30} className='text-white cursor-pointer' onClick={()=> setToggleSidebar(false)} />
          </div>
          
          <SideBar  />
          
          </div>
          
          </motion.div>
        }
       
    </div>
    
  )
}
