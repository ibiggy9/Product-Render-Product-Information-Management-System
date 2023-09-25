import React from 'react'
import Navbar from '../pageComponents/Navbar'
import Buttons from '../pageComponents/Buttons'

export default function ExSubBrand() {
  return (
    <div>
    <Navbar className="absolute"/>
    <div className='h-screen flex flex-col items-center justify-start bg-gradient-to-b from-slate-800 to-slate-500'>
     
     <form className='flex  flex-col  w-1/2 mt-8 p-20 shadow-2xl border border-slate-800 bg-gradient-to-b from-blue-800 to-amber-600 rounded-2xl'>
      <div>
       <h1 className='text-3xl font-extrabold text-gray-100'>Add New Sub-Brand</h1>
      </div>
       <div className='mt-6'>
       <div className='pb-8'>
         <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">1. Select the Parent Brand for This Sub-brand:</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
            <option className='text-gray-900' selected>Select an Existing Brand</option>
            <option>Pepsi</option>
            <option>Lays</option>
            <option>Doritos</option>
            <option>7up</option>
            </select>
         </div>
         <div className='pb-8'>
         <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">2. New Sub-Brand Name:</label>
         <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="For Example: Zero for Pepsi Zero" required />
         <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-300">Example: Pepsi Zero would only require Zero in this field. </p>
         </div>
         <div>
         <label for="Text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">3. Enter UPCs for this Sub-brand (Optional):</label>
         <textarea id="Text" rows="4" className="bg-gray-50 placeholder:text-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter All UPC Codes For This Brand" />
         <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-100">Separate each with a new line. You can always add more later.  </p>

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


