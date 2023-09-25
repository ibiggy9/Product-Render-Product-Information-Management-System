import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Card({title, description, route, command}) {
  return (

<div id="card" className="flex flex-row mt-3 h-3/4 p-6 m-10 hover:bg-gradient-to-b from-blue-800 to-red-700 ease-in-out duration-300 items-center text-start max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div id="inner-card" className=''>
    
        <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    
 <NavLink to={route}> <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className=" mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 dark:focus:hover:ring-black">
        {command}
        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </motion.div>
    </NavLink>
    </div>
</div>

  )
}
