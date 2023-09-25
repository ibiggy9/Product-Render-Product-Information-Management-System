import React from 'react'
import SideBarMaster from '../pageComponents/SideBarMaster'
import Card from '../pageComponents/Card'

export default function UpdateContent() {
  return (
    <div >
    <div id='MasterFlex' className='fixed'>
      
      <SideBarMaster className="absolute" />
      
      </div>
      <div className='max-h-full flex justify-center items-center   bg-gradient-to-b from-slate-800 to-slate-500'>
      <div id='cards' className='flex flex-col ml-64 mt-3   items-center '>
       <div>
        <Card title="Look up by UPC" description="Search for products in your catalog to update " command="Begin" route="/addProduct/addBrand-product" />
        </div>
        <div>
        <Card title="Look up by product name" description="Easily add a single product to your catalog. All you need is a UPC to get started!" command="Begin" route="/addProduct/addSub-product"/>
      </div> 
        <div>
        <Card title="Look up by brand or sub-brand" description="Easily add a single product to your catalog. All you need is a UPC to get started!" command="Begin" route="/addProduct/addProduct-product"/>
      </div> 
      </div>
      </div>
    </div>
  )
}
