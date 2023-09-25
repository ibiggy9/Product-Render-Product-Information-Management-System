import React from 'react'
import Buttons from '../../Components/pageComponents/Buttons'
import RNavbar from '../PageComponents/RNavbar'

export default function WebhookPage() {
  return (
    <div className=' absolute h-screen w-screen  top-0 left-0 bg-gradient-to-b from-slate-700 to-slate-400'>
        <RNavbar />
        <div className='flex items-center justify-center'>
        <form className=' flex flex-col w-1/2 mt-6 p-20 bg-gradient-to-b from-blue-700 to-amber-600 rounded-2xl border border-slate-700'>
         <div className=''>
          <h1 className='text-3xl font-extrabold text-gray-100'>Configure Webhook</h1>
         </div>
         <p className='text-white mt-3'>We'll send a POST request to the URL below with product details from each supplier submission. Data is sent in JSON data format. More information can be found in our developer documentation.</p>
          <div className='mt-6'>
            
            <div className='pb-8'>
                
            <label for="text" className="block mb-2 text-sm font-medium text-slate-100">1. Payload URL</label>
            <input type="text" id="email" className="bg-gray-50 border placeholder:text-slate-400 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="https://example.com/postreceive" required />
            <label className='text-xs text-white font-bold'> All data is sent in JSON format.</label>
            </div>
            
            <div>
              <Buttons command="Submit" />
            </div>
          </div>
          
        </form>
        </div>
    </div>
  )
}
