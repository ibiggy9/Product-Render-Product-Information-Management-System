import React from 'react'
import { NavLink, } from 'react-router-dom'
import Navbar from '../pageComponents/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import UploadImagesButton from '../pageComponents/UploadImagesButton'


export default function EditProduct({title, description, bullets, keywords }) {
  
  

  return (
    <div className='h-screen overflow-y-scroll scrollbar-hide bg-gradient-to-b from-slate-900 to bg-slate-300'>
        <Navbar />
        <div className='flex flex-row mt-2 mb-16 justify-center text-white'>
            <div className='mt-96'><AiOutlineArrowLeft className='hover:scale-125 ease-in-out duration-200' fontSize={50} /></div>
            <div className='flex flex-col items-center bg-gradient-to-b from-blue-800 to bg-red-700 rounded-2xl  max-w-3xl '>
            <form className=' flex  flex-col justify-center rounded-lg w-max my-2 mx-20'>
            <div>
            <h1 className='text-3xl font-extrabold text-gray-200 mt-10'>Update Product Content </h1>
            </div>
            <div className='flex flex-col mt-3 scrollbar-hide'>
               
                <div className='mt-1'>
                <label for="text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">1. Product Title:</label>
                <input type="text" id="email" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Title' required />
                </div>
               
                <div className='mt-3'>
                <label for="Text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">2. Product Description:</label>
                <textarea id="Text" rows="4" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Description' required />
                </div>
                <div className=''>
                <div className='mt-3'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Bullet Point 1:</label>
                <input id="Text" rows="4" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Bullet Point' required />
                
                </div>

                <div className='mt-2'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Bullet Point 2:</label>
                <input id="Text" rows="4" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Bullet Point' required />
                
                </div>
                <div className='mt-2'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Bullet Point 3:</label>
                <input id="Text" rows="4" className="h-10 p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Bullet Point' required />
                
                </div>
                <div className='mt-2'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Bullet Point 4:</label>
                <input id="Text" rows="4" className="h-10 p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Bullet Point' required />
                
                </div>
                <div className='mt-2 mb-3'>
               <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Bullet Point 5:</label>
                <input id="Text" rows="4" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Bullet Point' required />
                
                </div>
                </div>
               
                <div className='mt-2'>
                <label for="Text" className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">8. Keywords:</label>
                <textarea id="Text" rows="4" className=" p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-900  focus:ring-black focus:border-black placeholder-black" placeholder='Current Keywords' required  />
                <p className='text-sm font-light text-gray-200'>Separate each keyword with a comma</p>
                </div> 

                <label for="Text" className=" mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">4. Existing Brand And Sub-Brand Images:</label>
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


                <label for="Text" className=" mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">5. Images:</label>
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


                <div className='flex justify-end mt-3 mr-2 mb-16'>
                  <NavLink to="/retailSelect"><button  className="text-white bg-black hover:scale-110 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Select Retailers</button></NavLink>
                  
                </div>
            </div>
          
        </form>
            </div>
            <div className='mt-96'><AiOutlineArrowRight className='hover:scale-125 ease-in-out duration-200' fontSize={50} /></div>
            
        </div>
    </div>
  )
}
