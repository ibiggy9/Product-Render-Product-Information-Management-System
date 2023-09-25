import React from 'react'
import Navbar from '../pageComponents/Navbar'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import UploadImagesButton from '../pageComponents/UploadImagesButton'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function BrandPage() {
    
  return (
    <div className='h-screen overflow-y-scroll scrollbar-hide bg-gradient-to-b from-slate-900 to bg-slate-300'>
        <Navbar />
        <div className='flex flex-row mt-2 mb-16 justify-center text-white'>
            <div className='mt-96'><AiOutlineArrowLeft className='hover:scale-125 ease-in-out duration-200' fontSize={50} /></div>
            <div className='flex flex-col items-center bg-gradient-to-b from-blue-800 to bg-red-700 rounded-2xl  max-w-3xl '>
            <form className=' flex  flex-col justify-center rounded-lg w-max my-2 mx-20 mb-16'>
            <div>
            <h1 className='text-3xl font-extrabold text-gray-200'>Update (Insert Brand Name)</h1>
            </div>
            <div className='flex flex-col h-4/5 mt-5 scrollbar-hide'>
               
                <div className='mt-1'>
                <label for="text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">1. Product Title Brand Section:</label>
                <input type="text" id="email" className=" p-2.5 w-full text-sm text-gray-50 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-white" placeholder="Current Title" required />
                </div>
               
                <div className='mt-3'>
                <label for="Text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">2. Product Description Brand Section:</label>
                <textarea id="Text" rows="4" className=" p-2.5 w-full text-sm text-gray-50 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-white" placeholder="Current description" />
                </div>
                <div className='mt-2'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">3. Bullet Points Brand Only:</label>
                <textarea id="Text" rows="4" className=" p-2.5 w-full text-sm text-gray-50 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-white" placeholder="Current bullet points" />
                </div>
               
                <div className='mt-2'>
                <label for="Text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">4. Keywords Brand Only:</label>
                <textarea id="Text" rows="4" className=" p-2.5 w-full text-sm text-gring-gray-400 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg border border-gray-900 focus:ring-black focus:border-black placeholder-white" placeholder="Current keywords" />
                <p className='text-sm font-medium text-gray-200'>Separate each keyword with a comma</p>
                </div>

                <label for="Text" className=" mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">4. Images Brand Only:</label>
                <div className='grid grid-cols-4 mt-2'>
                
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                <div className='m-2'><UploadImagesButton /></div>
                </div>


                <div className='flex justify-between mt-3 mr-2 mb-16'>
                  <NavLink to="/retailSelect"><button  className="text-white bg-black hover:scale-110 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Save & Don't Publish</button></NavLink>
                  <NavLink to="/subBrandPage"><button  className="text-white bg-black hover:scale-110 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Edit A Sub-Brand </button></NavLink>
                  <NavLink to="/retailSelect"><button  className="text-white bg-black hover:scale-110 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Publish to Retailers</button></NavLink>
                  
                </div>
                
            </div>
          
        </form>
            </div>
            <div className='mt-96'><AiOutlineArrowRight className='hover:scale-125 ease-in-out duration-200' fontSize={50} /></div>
            
        </div>
    </div>
  )
}
