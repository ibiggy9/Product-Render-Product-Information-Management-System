import React from 'react'
import Navbar from '../pageComponents/Navbar'

export default function RtdbUser() {
  return (
    <div>
        
        <div className='absolute left-0 top-0 h-screen w-screen bg-blue-400'>
        <Navbar />
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col'>
                <label>Done</label>
                <input type="text" />
                </div>
                <div>
                    <button className='mt-3 bg-white'>Add currentUser to dummy account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
