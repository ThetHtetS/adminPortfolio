import React from 'react'
import logo from './../../../public/khaing.jpg'
import excel from './../../../public/excel.jpg'
import data from './../../../public/dataAnalytic.jpg'
import Image from 'next/image'
export default function Education() {
  return (
    <div className='h-auto px-6 md:px-28 pt-20'> 
     <h1 className='text-xl font-bold'>
         Educational background
     </h1>
      <div className='mt-3 mr-0 md:text-lg'> 
         <div className='leading-8'>
         &emsp; &emsp; &emsp; I have successfully graduated from Technological University
         with a degree in <span className='text-blue-500'>Bachelor of Engineering  Electronic Communication</span>. And I have 
         accomplished for the following certificate.
         <div className='pl-3 text-green-500'>
         <div>* Bussiness management by Parami Education</div>
         <div>* Enhancing soft skill & Customer Service by ASK</div>
         <div>* Basic Data Analysis with Micorsoft Excel</div>
         <div>* Autocad 2D By KMD</div>
         <div>* M&E by KK7</div>
         </div>
         </div>
      </div>
      <h1 className='text-xl font-bold pt-3'>KEY SKILLS</h1>
      <div className='leading-8 md:text-lg' align="justify">
          Customer Relationship management (CRM), Service Operation Management, Work Order Processing,
          Stragic Planning, MS Office Suite Proficiency, Workflow Optimization, Quality Control Protocols, Financial Reporting,
          Cash Handling, Inventory Management, MYOB, Technical Suppport, Data Analysis, Micorsoft Excel, Process Improvement
      </div>
      <div className='mt-6 md:flex justify-between ml-3'>
      <Image src={logo} className='md:w-5/12' alt="Logo" />;
      <Image src={data} className='md:w-5/12' alt="Logo" />;
      </div>
      <div className='mt-20 pb-24'>
      <Image src={excel} className='w-full' alt="Logo" />;
      </div>
    </div>
  )
}
