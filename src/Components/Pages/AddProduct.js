
import SideBarMaster from '../pageComponents/SideBarMaster'
import {motion} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Buttons from '../pageComponents/Buttons'
import { useSupplierData } from '../Context/SupplierContext'
import {GoAlert} from 'react-icons/go'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useUpcValidation } from '../Context/VerifiyUpcContext'
import { AiFillWarning} from 'react-icons/ai'
import {BiError} from 'react-icons/bi'
import {BsFillGearFill} from 'react-icons/bs'

export default function AddProduct() {
  const brandRef = useRef()
  const categoryRef= useRef()
  const UpcRef = useRef()
  const {addNewProduct, found, notFound, parserIsLoading} = useSupplierData()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const {apiError, setApiError} = useUpcValidation()
  
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [submitted])


  function handleSubmission(){
  
      addNewProduct({upcs: UpcRef.current.value})
      setSubmitted(true)
    
    
  }

  function changes(){
  
    setSubmitted(false)
    setApiError(false)
  }

  return (
    <div className="absolute h-screen w-screen scrollbar-hide overflow-hidden bg-gradient-to-b from-slate-800 to-slate-500">
      
    <div className='flex flex-row w-screen'>
      <SideBarMaster /> 
       <div id='cards' className='flex flex-grow flex-col  items-center justify-center pr-20 overflow-y-scroll'>
        <motion.div className='mr-10' animate={{scale:1, opacity: 1}} initial={{opacity:0, scale:0.5}} >
        {!submitted && 
        <form className=' flex flex-col  w-full mt-6 p-20 bg-gradient-to-b from-blue-700 to-amber-600 rounded-2xl border border-slate-700'>
         <div>
          <h1 className='text-3xl font-extrabold text-gray-100'>Add Products to Catalog</h1>
          
         </div>
          <div className='mt-6'>
           
            <div>
            <label for="Text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Enter UPCs for this Brand:</label>
            <textarea id="Text" onChange={changes} ref={UpcRef}  cols="12" rows="10" className="block p-2.5 w-full text-sm text-gray-900 placeholder:text-slate-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
            placeholder={"123456789123\n987654321987\n123456789123"}
           />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-100">Separate each with a new line. You can always add more later.  </p>
            </div>
            <button className='mt-3' onClick={handleSubmission}   >
              <Buttons command="Submit" />
            </button>
          </div>
        </form>
        }
       
       {parserIsLoading &&
       <div className='inline-flex bg-gradient-to-b from-red-200 to-red-800 rounded-lg p-12'>
          <div className='mt-3 mr-3 font-bold text-xl'>Checking UPCs:</div>
          <BsFillGearFill fontSize={50} className="animate-spin"  /> 
       </div>
       
       }

        {!parserIsLoading && submitted && notFound.length == 0 && found.length != 0 &&
        <div>
          <div className='bg-green-500 flex p-12 rounded-xl text-2xl font-bold'>
            <AiOutlineCheckCircle className='mr-2' fontSize={25} />Success! Your new brand has been added to your catalog!
          </div>
        </div>
        }

        { !parserIsLoading && submitted && notFound.length != 0 && found.length != 0 &&
          <div>
            <div className='flex bg-yellow-600 rounded-xl p-12 text-xl font-bold'>
              <BiError  fontSize={40} className="mr-2"/>
              <div>
                  Success with warnings. The following UPCs were not found:
              <ul>
                {notFound.map((item)=>
                <li>{item}</li>
                
                )
                }
                
              </ul>
              </div>
            </div>
          </div>
        }


   {!parserIsLoading && submitted && notFound.length != 0 && found.length == 0 && 
          <div>
            <div className='flex bg-red-600 rounded-xl p-12 text-xl font-bold'>
              <AiFillWarning  fontSize={40} className="mr-2"/>
              <div>
              No Products Added. None of your submitted UPCs were found:
              <ul>
                {notFound.map((item)=>
                <li>{item}</li>
                
                )
                }
                
              </ul>
              </div>
            </div>
          </div>
        }
         </motion.div>
         
       </div>
       
    </div>
    </div>
  )
}
