import React, {useState} from 'react'
import SideBarMaster from '../pageComponents/SideBarMaster'
import {BsSearch} from 'react-icons/bs'
import ProductCard from '../pageComponents/ProductCard'
import {motion} from 'framer-motion'


export default function Catalog() {
  const [checkedAll, setCheckedAll] = useState(false)

  const brandTest = [
    {brandName: "Pepsi"},
    {brandName: "Coke"},
    {brandName: "Sprite"},
    {brandName: "Bear Paws"},

  ]
  return (
    <div id="parent" className='h-screen overflow-hidden scrollbar-hide  bg-gradient-to-b from-slate-800 to-slate-400'>
      <div id="containerApp" className='flex flex-row justify-start overflow-hidden' >
      <div id='SideBar' className=''>
        <SideBarMaster brands={brandTest} />
      </div>
        
      <div id="AppSpace" className='flex flex-col flex-1 m-3 max-w-4xl min-w-md  font-bold text-gray-300'>
      
            <div id="TopArea" className='flex justify-between'>
                <h1 className='m-2 ml-5 text-3xl text-slate-200'>Catalog</h1>
                <div className='flex flex-row px-2 h-10 m-1 bg-white border-2 border-black rounded-lg '>
                  <BsSearch className=' mt-3 mx-2 text-black' fontSize={15} />
                  <input className='outline-none placeholder-slate-500 placeholder text-black font-normal' type="text"  placeholder='Search' />
                </div>
                
            </div>
            <div className='flex justify-start mt-5 '>
            <button onClick={() => setCheckedAll(!checkedAll)} className=" hover:scale-105 disabled:hover:scale-100 disabled:bg-slate-700 disabled:text-gray-400 text-white bg-blue-700 hover:bg-black ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center mr-5">Select All Products</button>
            <button disabled className=" hover:scale-105 disabled:hover:scale-100 disabled:bg-slate-700 disabled:text-gray-400 text-white bg-blue-700 hover:bg-black ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Edit All Selected Products</button>
            <button disabled className=" ml-4 hover:scale-105 disabled:hover:scale-100 disabled:bg-slate-700 disabled:text-gray-400 text-white bg-blue-700 hover:bg-black ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">View All Selected Products</button>
              
              </div>    
      <motion.div animate={{scale:1, opacity: 1}} initial={{opacity:0, scale:0.5}} className='mt-4 overflow-y-scroll h-screen pb-48 mb-32 scrollbar-hide'>
          {checkedAll && checkedAll === true ?
          <>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"} checked={checkedAll}/>
          
          </>
          :
          <>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          <ProductCard className="" title="hi" description="gooddayda" command={"no"}/>
          <ProductCard className="" title="hi" description="goodday" command={"no"}/>
          </>

      }
       
          
      </motion.div>
      

    </div>
      </div>
    </div>
  )
}
