import React from 'react'
import RNavbar from '../PageComponents/RNavbar'

export default function logs() {

    const testData = [
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"Diet Pepsi 300ml", images:"stuff"}, date:"07/07/2020", status:"sent"},        
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},        
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},        
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},        
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},
    {read: "yes", supplier:"PepsiCo", UPC: 12309822, submittedContent:{description:"hi", title:"product", images:"stuff"}, date:"07/07/2020", status:"sent"},

    ]

  return (
    <div className=' absolute h-screen w-screen overflow-scroll scrolbar-hide top-0 left-0 bg-gradient-to-b from-slate-700 to-slate-400'>
        <RNavbar />
        <div className='mx-36 flex flex-col mt-10 text-black  bg-white rounded-lg mb-10'>
        <ul className='grid grid-cols-7 grid-flow-row bg-black text-white '>
            <li className='m-2'>Read?</li>
            <li className='m-2'>Supplier</li>
            <li className='m-2'>Title</li>
            <li className='m-2'>UPC</li>
            <li className='m-2'>Content</li>
            <li className='m-2'>Date Submitted</li>
            <li className='m-2'>Status</li>
            <li className='m-2'></li>
            <li className='m-2'></li>
        </ul>
        

            {testData.map((item)=> 

            <ul className='grid grid-cols-7 grid-flow-row overflow-scroll scrollbar-hide'>
            <li className='m-2'>{item.read}</li>
            <li className='m-2'>{item.supplier}</li>
            <li className='m-2'>{item.submittedContent.title}</li>
            <li className='m-2'>{item.UPC}</li>
            <li className='m-2 underline text-blue-700'>View Content Request</li>
            <li className='m-2'>{item.date}</li>
            <li className='m-2'>{item.status}</li>
            
            
            </ul>
                    
            )}
            
    </div>
    


    </div>
  )
}
