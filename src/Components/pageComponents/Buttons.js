import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Buttons({command, link}) {
  return (
   <NavLink to={link}> <button className="text-white bg-blue-700 hover:scale-110 ease-in-out duration-200 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">{command}</button></NavLink>
  )
}
