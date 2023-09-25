import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaRegSmileWink} from 'react-icons/fa'
import {motion} from 'framer-motion'


export default function RSideBar({brands, options}) {
    const keyActions = [ 
        {action: "View catalog & Update Content", link:"/catalog"},
        {action: "Add a new product or brand", link: "/addProduct"},
        
      ]

    const NavOptions = [
        {action: "Help", link:"/help"},
        {action: "Settings", link: "/settings"},
        {action: "Sign Out", link: "/login"},  
    ]

      console.log(brands)
  
  const isNotActiveStyle = 'm-5 text-white hover:text-sky-400  transition-all duration-200 ease-in-out capitalize'
  const isActiveStyle = 'm-5 text-fuchsia-500 transition-all duration-200 ease-in-out capitalize '
  return (
    <div className=' h-screen bg-slate-900'>
    <div id="menubar" className='flex flex-col  bg-slate-900'>
        
        
        <div id="child-1" className="">
          <NavLink to='/'>
              <nav className="px-4 pt-2.5 border-b ">
                <div id="logo" className="flex items-center">
                    <motion.div animate={{rotate:[0,-35,35,-25,25,-25, 0]}}>
                      <span className='mr-3'><FaRegSmileWink className='text-white mt-4 hover:animate-spin'  size={30} /></span>
                    </motion.div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }}  ><span className="mb-3 ml-3 self-center text-xl font-semibold text-white">RetailRender</span></motion.div>
                </div> 
             </nav>  
          </NavLink>
          </div>
          {!options ?
          <div id="child-3">
            {keyActions.map((actions)=> (
              <NavLink
              to={`${actions.link}`}
              className={({ isActive })=> isActive ? isActiveStyle : isNotActiveStyle}
              key={actions.action}
            >
              <div className='mx-5'>
              {actions.action}
              </div>
            </NavLink>
            )
          )}
        </div>

        :
        <div id="child-3">
        {NavOptions.map((actions)=> (
          <NavLink
          to={`${actions.link}`}
          className={({ isActive })=> isActive ? isActiveStyle : isNotActiveStyle}
          key={actions.action}
        >
          <div className='mx-5'>
          {actions.action}
          </div>
        </NavLink>
        )
      )}
    </div>

        }

        <div id="child-4">
        {brands && <div className=" px-5  text-white border-t border-b border-white p-3 transition-all duration-200 ease-in-out capitalize text-xl">Brands</div>}
        

        <div id="child-5" >
        {brands && brands.map((item) => (
          <NavLink to="/brandpage">
          <div className={isNotActiveStyle}>
          {item.brandName}
          </div>
          </NavLink>
            ))}
          </div>
          </div>

        </div>
  
        </div>
      
      
      
  )
}
