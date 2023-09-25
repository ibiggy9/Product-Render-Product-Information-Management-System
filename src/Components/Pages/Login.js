import React from 'react'
import {useState, useRef, useEffect} from 'react'
import scrolling from "../../assets/scrolling.mp4"
import { useAuth } from '../Context/AuthContext'


export default function Login() {
  const [showLogin, setShowLogin] = useState(false) 
  const {login} = useAuth()
  const emailRef = useRef()
  const passRef= useRef()
  const {logout} = useAuth()
  


  function onClickLogin(){
    setShowLogin((prev) => !prev)
  } 

  useEffect(()=> {
    
    logout()
  }, [])
  
  function handleLogin(e){
      e.preventDefault()
      console.log(emailRef.current.value)
      console.log(passRef.current.value)
      login(emailRef.current.value, passRef.current.value)
  }


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className='relative w-full h-full'>
        <video
        src={scrolling}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70'>
          {showLogin === false ?
          <div id="card" className='p-5 py-10  rounded '>
          <div className='m-3 text-center  text-blue-400 text-5xl'>
            Welcome to ProductRender
          </div>
          <div className='text-white text-center text-xl'>Update hundreds of your product's content across dozens of retailers in minutes.</div>
        
          <div id="button-container" className='flex justify-center mt-3 gap-16 items-center'>
          
          
          
          <button className="text-white bg-blue-700 hover:bg-blue-800 hover:scale-125 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center" onClick={onClickLogin}>Login</button>
          
          
          <button className="text-white bg-blue-700 hover:bg-blue-800 hover:scale-125 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Get Started</button>
          
          </div>
          </div>
          :
          <div className=' bg-gray-900 p-5 px-10 text-center rounded-lg w-100 '>
          <div className='text-white text-3xl p-5 px-10'>
            Log in to ProductRender
            </div>
            <form className='mt-3'>
            <div className="mb-6">
              <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input ref={passRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button onClick={(e)=> handleLogin(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center">Log In</button>
          </form>
            <button className=" mt-3 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center" onClick={onClickLogin}>Go back</button>
          </div>
          }
        </div>
        
        
        
      </div>
    </div>
  )
}
