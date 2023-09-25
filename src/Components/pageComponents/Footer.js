import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaPinterest} from 'react-icons/fa'


export default function Footer() {
  return (
    <div className='flex justify-between bg-gradient-to-r from-blue-500 to-blue-700 p-8 items-center'>
        <div className='flex mb-3 items-center'>
        <BsFacebook fontSize={31} className='ml-3 mr-2' />
        <AiFillTwitterCircle fontSize={35} className="mr-2" />
        <AiFillYoutube fontSize={35} className="mr-2 mt-2 mb-2"/>
        <AiFillInstagram fontSize={35}  className="mr-2"/>
        <BsLinkedin fontSize={31} className="rounded-2xl mr-2"/>
        <FaPinterest fontSize={33} className="mr-2" />
        </div>
        <div className='flex items-baseline'>
        <div className='mr-10 text-white'>Terms of Service</div>
        <div className='mr-5 text-white'>Privacy Policy</div>
        </div>
    </div>
  )
}
