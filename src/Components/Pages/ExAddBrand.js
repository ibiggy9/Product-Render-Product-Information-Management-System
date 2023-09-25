import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../pageComponents/Navbar'
import Buttons from '../pageComponents/Buttons'
import { useSupplierData } from '../Context/SupplierContext'
import {GoAlert} from 'react-icons/go'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function ExAddBrand() {
  const brandRef = useRef()
  const categoryRef= useRef()
  const UpcRef = useRef()
  const {addNewBrand, upcError, setUpcError} = useSupplierData()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [submitted])


  function handleSubmission(){

    if(!brandRef.current.value || !categoryRef.current.value){
      setError(true)
    } else {
      setError(false)
    if(!UpcRef.current.value){
    addNewBrand({brand: brandRef.current.value, category: categoryRef.current.value, upcs: UpcRef.current.value})
    console.log("Complete")
    } else if(!upcError) {
      addNewBrand({brand: brandRef.current.value, category: categoryRef.current.value, upcs: UpcRef.current.value})
      setSubmitted(true)
    } 
    }
  }

  return (
    <div>
       
       {!submitted ?
       <div className='h-screen w-screen overflow-y-scroll flex flex-col items-center justify-start bg-gradient-to-b from-slate-800 to-slate-300'>
        <form className=' flex flex-col w-1/2 mt-6 p-20 bg-gradient-to-b from-blue-700 to-amber-600 rounded-2xl border border-slate-700'>
         <div className=''>
          <h1 className='text-3xl font-extrabold text-gray-100'>Add New Brand</h1>
          {error && <div className='bg-red-700 flex rounded-lg p-3 mt-2'><GoAlert className='mt-1 mr-1 ml-1'/>Please fill out brand and category. UPCs are optional.</div>}
          {upcError && <div className='bg-yellow-600 flex rounded-lg p-3 mt-2'><GoAlert fontSize={40} className=' mr-1 ml-1'/>One or more of the UPCs you've submitted are not 12 digits, please check the list and try again.</div>}
         </div>
          <div className='mt-6'>
            <div className='pb-8'>
            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">1. New Brand Name:</label>
            <input type="text" ref={brandRef} id="email" className="bg-gray-50 border placeholder:text-slate-400 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="For Example: Pepsi" required />
            </div>
            <div className=' flex flex-col pb-8'>
            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">2. Add New Product Category:</label>
            <input type="text" ref={categoryRef} id="email" className="bg-gray-50 border border-gray-300 placeholder:text-slate-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="For Example: Stuff" required />
            </div>
            <div>
            <label for="Text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">3. Enter UPCs for this Brand:</label>
            <textarea id="Text" onChange={()=> setUpcError(false)} ref={UpcRef} rows="4" className="block p-2.5 w-full text-sm text-gray-900 placeholder:text-slate-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
            placeholder={"123456789123\n987654321987\n123456789123"}
           />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-100">Separate each with a new line. You can always add more later.  </p>
            </div>
            <button className='mt-3' onClick={handleSubmission}   >
              <Buttons command="Submit" />
            </button>
          </div>
        </form>
    </div>
    :
    <div className='h-screen w-screen overflow-y-scroll flex flex-col items-center justify-start bg-gradient-to-b from-slate-800 to-slate-300'>
      <div className='bg-green-500 flex p-3 mt-3 rounded-lg'>
        <AiOutlineCheckCircle className='mr-2' fontSize={25} />Success! Your new brand has been added to your catalog!
        </div>
    </div>
    
    }
  </div>
  )
}
