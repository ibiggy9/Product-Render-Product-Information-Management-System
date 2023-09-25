import React from 'react'
import SideBarMaster from '../pageComponents/SideBarMaster'
import Buttons from '../pageComponents/Buttons'

export default function UpdateUpc() {
  return (
    <div className='absolute h-screen w-screen top-0 left-0 bg-slate-600'>
    <div id='MasterFlex' className='flex justify-start'>
      
      <SideBarMaster />
      <div className='flex justify-center w-4/5 '>
      
      <form className='flex  flex-col  mb-80 w-1/2 mt-8 p-20 shadow-2xl border border-slate-800 bg-gradient-to-b from-blue-800 to-amber-600 rounded-2xl'>
      <div>
       <h1 className='text-3xl font-extrabold text-gray-200'>Update UPC For: Product Title</h1>
      </div>
       <div className='mt-6'>
       <div className='pb-4'>
         <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">1. Current UPC: 09238409238</label>
         <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter New UPC" required />
         </div>
        
         <div className=''>
           <Buttons command="Submit" />
         </div>
       </div>
       
     </form>
      </div>
    </div>
    </div>
    
  )
}
