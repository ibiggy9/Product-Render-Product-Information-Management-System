import React, {useState} from 'react'
import metro from '../../assets/metro.png'
import Buttons from './Buttons'
import { AiFillCloseCircle } from 'react-icons/ai'


export default function ProductCard({title, description, command, checked}) {
  const [checkedBox, setChecked] = useState(false)
  const [view, setView] = useState(false)
  
  return (
  <div id="card" className="flex justify-between items-center hover:bg-gradient-to-r from-blue-700 to-red-700 ease-in-out duration-300 text-start  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className='flex justify-between m-4'>
  <input checked={checked}  onChange={(e) => setChecked(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="mr-5 w-4 text-blue-600 bg-gray-100 rounded border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
  <img src={metro} className="mt-1" style={{maxHeight: "80px", maxWidth:"80px"}} alt="" />
  <div className='ml-5 text-white text-left text-sm font-light'>
    
    <div>Bear Paws Chocolate Chip</div>
    <div>UPC: 092304933</div>
    <div>Brand: Bear Paws</div>
    <div>Sub Brand: Bear Paws</div>
    <div>Weight: 250g</div>
    
  </div>
  </div>
   
    <div className='flex flex-col mr-7 text-white '>
      <div onClick={() => setView(true)}  className='mt-2'>
      <Buttons command={"View This Product"}/>
      </div>
      <div className='mt-2'>
      <Buttons command={"Edit This Product"} link="/EditProduct"/>
      </div>
      <div className='mt-2 mb-2'>
      <Buttons command={"Update This UPC"} link="/updateUpc"/>
      </div>
    </div>
    {view &&
      <div className='absolute top-0 left-0 h-screen w-screen bg-black opacity-90'>
      </div>
    }

    {view && 
    <>
    <div className='absolute top-0 left-0 h-screen w-screen overflow-hidden'>
    <div className='flex justify-end'>
    <AiFillCloseCircle onClick={()=> setView(false)} fontSize={30} className=' mt-5 mr-5 text-white cursor-pointer opacity-100' />
    </div>
    <div className='flex justify-center overflow-hidden w-screen '>
      <div id="bg" className='flex flex-col rounded-xl justify-center bg-gradient-to-br from-blue-700 to-amber-800 p-8  ' style={{width:"600px"}}>
        <div className="font-bold">Product Title:</div>
        <div className="font-normal text-sm">Bear Paws Chocolate Chip</div>
        <div className='mt-3'>Images:</div>
        <div className='grid grid-cols-3'>
        <img src={metro} className="rounded-lg mt-2" style={{maxHeight: "100px", maxWidth:"100px"}} alt="" />
        <img src={metro} className="rounded-lg mt-2" style={{maxHeight: "100px", maxWidth:"100px"}} alt="" />
        <img src={metro} className="rounded-lg mt-2" style={{maxHeight: "100px", maxWidth:"100px"}} alt="" />
        <img src={metro} className="rounded-lg mt-2" style={{maxHeight: "100px", maxWidth:"100px"}} alt="" />
        </div>
        <div className='mt-4'>Product description:</div>
        <div className="font-normal text-sm">New to the HD 500 series product line is the HD 559, a headphone for those seeking exceptional value. Powered by Sennheiser proprietary transducer technology and featuring the “Ergonomic Acoustic Refinement” (E.A.R) design, the HD 559 provides the first step into the world of audiophile sound reproduction. This open back, around ear headphone delivers a natural tonal balance with outstanding spatial performance. Exceptional wearing comfort is provided by large ear cups fitted with plush velour ear cushions. The HD 559 is the ideal choice for listeners wanting performance beyond price.</div>
        <div className='mt-4'>Bullet Points</div>
        <ul className='list-disc'>
          <li className='ml-4 font-normal text-sm'>Open back, around ear design</li>
          <li className='ml-4 font-normal text-sm'>Powered by proprietary sennheiser 38mm, 50-ohm transducers</li>
          <li className='ml-4 font-normal text-sm'>Soft, replaceable ear pads for enhanced comfort</li>
          <li className='ml-4 font-normal text-sm'>Robust 3m detachable cable and 6.3mm jack</li>
        </ul>
        <div className='mt-4'>Key Words</div>
        <div className='font-normal text-sm'>Loud, bass, treble, headphones, cool</div>
        <div className='mt-2 flex justify-end'>
      <Buttons command={"Edit This Product"} link="/EditProduct"/>
      </div>

      
      </div> 
    </div>
    </div>
    </>
    
    }
    </div>
  )
}

