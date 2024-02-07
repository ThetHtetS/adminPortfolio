import React from 'react'
import logo from './../../../public/khing.jpg'
import Image from 'next/image'
export default function About() {
  return (
    <div className='md:h-screen pt-12 md:pl-24 '>
     <div className='md:flex gap-12'>
     <div className=''>
      <Image src={logo} className='w-80 mx-auto md:w-80' alt="Logo" />;
      </div>
      <div className=' font-bold mt-12 mx-12 space-y-6'>
     
      <h1>KHAING THANDAR MAUNG <br />
      SERVICE ADMINISTRATOR</h1>
      
     <div>
      Mobile&nbsp;&nbsp;&nbsp; +959975795804 <br />
      Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; khaingthandarmaung1@gmail.com
     </div>
     <div className=' pb-24'>
     <div className='flex gap-3'>
      <div>Languages</div> 
      <div className='ml-14'>: English 4 Skill, Burmese (Native) </div>
     </div>
     <div className='flex gap-3'>
      <div >Nationality </div>
      <div className='ml-14'>  : &lt;Burmese, Myanmar&gt;</div>
     </div>
      <div className='flex gap-3'>
      <div>  Expected Salary </div>
      <div className='ml-3'> : US$ 2500 </div>
      </div>
      <div className='flex gap-3'>
      <div> Residential Status </div>
      <div>: SPASS</div>
      </div>
      <div className='flex gap-3'>
      <div> Availability </div>
      <div className='ml-14'>:Immediately</div>
      </div>

      
      <div>    
      </div>
               
     </div>

        
      </div>
     </div>
    </div>
    
  )
}
