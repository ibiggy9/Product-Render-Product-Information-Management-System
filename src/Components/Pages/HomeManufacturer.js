import React from 'react'
import Navbar from '../pageComponents/Navbar'
import Card from '../pageComponents/Card'
import {motion} from 'framer-motion'
import Footer from '../pageComponents/Footer'

export default function HomeManufacturer() {
  

  return (
    <div className=''>
    <div className=' '>
      <Navbar />
     </div>
     <div className='flex flex-row min-[320px]:flex-wrap md:flex-nowrap lg:flex-nowrap overflow-hidden scrollbar-hide justify-evenly items-center bg-gradient-to-b from-slate-700 to-slate-500'>
      <motion.div whileHover={{scale:1.05}} className=' h-screen m-2 mt-5 min-w-fit'><Card className='p-5 overflow-hidden scrollbar-hide '  title="Add new products" description="Add new products to your catalog in minutes with a simple workflow." route="/addProduct" command="Launch"/></motion.div>
      <motion.div whileHover={{scale:1.05}} className='  h-screen m-2 min-w-max'><Card className='p-5 overflow-hidden scrollbar-hide ' title="View Catalog" description="View your catalog to update product content and submit these changes to dozens of supported retailers." route="/catalog" command="Launch" /></motion.div>
     </div>
     <Footer />
     </div>
  )
}
