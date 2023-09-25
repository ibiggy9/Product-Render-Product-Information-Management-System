import React from 'react'
import Navbar from '../pageComponents/Navbar'
import Buttons from '../pageComponents/Buttons'

export default function ExAddProduct() {
  return (
    <div>
    <Navbar className="absolute"/>
    <div className='h-screen flex flex-col items-center justify-start bg-gradient-to-b from-slate-800 to-slate-300 '>
      
     <form className=' flex  flex-col  w-1/2 mt-8 p-20 shadow-2xl border border-slate-800 bg-gradient-to-b from-blue-700 to-amber-600 rounded-2xl'>
      <div>
       <h1 className='text-3xl font-extrabold text-gray-100'>Add New Product</h1>
      </div>
       <div className='mt-6'>
       <div className='pb-12'>
         <label for="countries" className="block mb-2 text-sm font-medium text-gray-100">1. Select a brand with which to pair this product:</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 placeholder:text-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
            <option className='text-gray-900' selected>Select an Existing Brand</option>
            <option>Pepsi</option>
            <option>Lays</option>
            <option>Doritos</option>
            <option>7up</option>
            </select>
         </div>
         <div className='pb-12'>
         <label for="countries" className="block mb-2 text-sm font-medium text-gray-100">2. Select a sub-brand if applicable:</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 placeholder:text-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
            <option className='text-gray-900' selected>Select an Existing Sub Brand</option>
            <option>Pepsi</option>
            <option>Lays</option>
            <option>Doritos</option>
            <option>7up</option>
            </select>
         </div>
         
         <div>
         <label for="Text" className="block mb-2 text-sm font-medium text-gray-100 ">3. Enter UPCs for this Sub-brand (Optional):</label>
         <textarea id="Text" rows="4" className="bg-gray-50 border border-gray-300 placeholder:text-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter All UPC Codes For This Brand" />
         <p id="helper-text-explanation" className="mt-2 text-sm text-gray-100 ">Separate each with a new line. You can always add more later.  </p>

         </div>
         <div className='mt-3'>
           <Buttons command="Submit" />
         </div>
       </div>
       
     </form>
   
 </div>
</div>
  )
}
