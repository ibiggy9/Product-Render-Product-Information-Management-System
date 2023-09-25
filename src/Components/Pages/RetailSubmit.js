import React, { useState } from 'react'
import Navbar from '../pageComponents/Navbar'
import RetailCard from '../pageComponents/RetailCard'
import { AiFillCloseCircle } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function RetailSubmit() {
    const [showModal, setShowModal] = useState(false)
    const [checkedAll, setCheckedAll] = useState(false)

    function handleSubmit(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowModal(true)
    }
    
    const retailers = [
        {name: "Walmart"},
        {name: "Best Buy"},
        {name: "Amazon"},
        {name: "Pc Express"},
        {name: "Metro"},
        {name: "Sobeys"},
        {name: "doggy"},
        {name: "Roots"},
    ]
  return (
    
    <div className='absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-slate-700 to-slate-400 overflow-y-hidden'>
        <Navbar />
        <div id="Master-Flex" className='flex flex-col justify-between items-center'>
        <div id="title-holder" className='flex items-baseline justify-between w-2/4 mt-2'>
        <div className='text-3xl font-bold text-slate-200'>Retailer Select</div>
        <div className='flex'>
        <motion.div whileTap={{scale:0.9}} whileHover={{scale:1.1}} className='text-xl mx-2 text-white font-bold mb-3  bg-blue-800 rounded-xl p-3' onClick={() => setCheckedAll(!checkedAll)}>Select All</motion.div>
        <motion.div whileTap={{scale:0.9}} whileHover={{scale:1.1}} className='text-xl text-white font-bold mb-3  bg-black rounded-xl p-3' onClick={()=> handleSubmit()} >Submit</motion.div>
        </div>
        </div>
        
        <div id="card-container" className='flex flex-col justify-between w-2/4 h-screen scrollbar-hide overflow-scroll pb-80'>
        {checkedAll && checkedAll === true ? 
        <>
        {retailers && retailers.map((items) => 
        <RetailCard retailer={items.name} checked={checkedAll}/>
        
        )}
        </>
        :
        <>
        {retailers && retailers.map((items) => 
        <RetailCard retailer={items.name} />
        
        )}
        </>
    }
        </div>
       
        </div>
        
        {showModal &&
                    <div className='absolute top-0 left-0 overflow-y-scroll h-full w-screen bg-black opacity-70'>
                    </div>
                  
                  }
                  
                  
                  {showModal &&
                    <div className='absolute top-0 left-0 h-screen  w-screen'>
                      <div onClick={() => setShowModal(false)} className='flex justify-end'> 
                        <AiFillCloseCircle  fontSize={30} className=' mt-5 mr-10 text-white cursor-pointer opacity-100' /> 
                        </div>
                        <div className='flex justify-center items-center'>
                          
                            <div className='flex flex-col mt-44 justify-center p-20 items-center bg-gradient-to-b from-blue-600 to-amber-600 rounded-xl' style={{width: "500px"}}>
                              <div className='mt-5 font-bold text-xl text-center'>
                                  Are you sure you are ready to submit this content?
                              </div>
                              <div className='flex items-center'>
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='m-4 px-5 bg-sky-500 rounded-xl p-3' onClick={() => setShowModal(false)}>Cancel</motion.div>
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className='bg-red-700 m-4 px-5  rounded-xl p-3'><NavLink to='/catalog'>Confirm </NavLink></motion.div>
                                </div>
                            </div>
                            
                      </div>
                    </div>
                  }
        
    </div>
    
  )
}
