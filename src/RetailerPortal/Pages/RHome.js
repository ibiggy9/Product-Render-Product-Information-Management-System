import React from 'react'
import RNavbar from '../PageComponents/RNavbar'
import {motion} from 'framer-motion'
import Card from '../../Components/pageComponents/Card'
import Footer from '../../Components/pageComponents/Footer'

export default function RHome() {
  return (
    <div className=' scrollbar-hide overflow-y-hidden'>
    <div >
      <RNavbar />
     </div>
     <div className='flex flex-col scrollbar-hide bg-gradient-to-b from-slate-700 to-slate-500 overflow-y-hidden'>
     <div className='flex flex-row min-[320px]:flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center  '>
      <motion.div whileHover={{scale:1.05}} className=' h-screen m-2 mt-5 min-w-fit'>
        <Card className='p-5  '  
        title="Check Logs" 
        description="Review product content submissions from your suppliers. " 
        route="/retailer/logs" 
        command="Launch"/>
    </motion.div>

    <motion.div whileHover={{scale:1.05}} className='h-screen m-2 min-w-max'>
        <Card 
        className='p-5 ' 
        title="Configure Webhooks" 
        description="Set the URL of where you would like us to send incoming product data submissions" 
        route="/retailer/webhooks" 
        command="Launch" />
    </motion.div>

    
    </div>
    
     </div>
     <div>
        <Footer />
    </div>
     </div>
  )
}
