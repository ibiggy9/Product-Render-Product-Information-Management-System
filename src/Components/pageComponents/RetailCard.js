import React, {useState} from 'react'
import pcx from '../../assets/pcx.png'

export default function RetailCard({retailer , checked}) {
    const [checkedBox, setChecked] = useState()

  return (
    <div>
        <div id="card" className='flex mt-1 justify-between hover:scale-105 mx-5 bg-gradient-to-r duration-200 ease-in-out from-violet-800 to-amber-600 rounded-xl p-5'>
            <div id="inner card left" className='flex flex-col items-center ml-5'>
            <img src={pcx} className="h-20 w-30 rounded-lg"/>
            <div className=' mt-2 text-white'>{retailer}</div>
            </div>
            <div id="Checkbox"  className='mt-11  mr-2'>
                <input type='checkbox' checked={checked} onChange={(e) => setChecked(e.target.checked)} className='h-5 w-5' />
            </div>
            </div>
    </div>
  )
}
