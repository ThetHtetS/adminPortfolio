import React from 'react'
import logo from './../../../public/khing.jpg'
import Image from 'next/image'
export default function About() {
  return (
    <div className='md:h-screen pt-12 md:pl-24 '>
     <div className='md:flex gap-12'>
     <div className=''>
      <Image src={logo} className='w-80 ml-12 md:w-80' alt="Logo" />;
      </div>
      <div className=' font-bold mt-12 mx-12 space-y-6'>
     
      <h1>KHAING THANDAR MAUNG <br />
      SERVICE ADMINISTRATOR</h1>
      
     <div>
      Mobile&nbsp;&nbsp;&nbsp; +959975795804 <br />
      Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; khaingthandarmaung1@gmail.com
     </div>
     <div className='flex gap-3'>
      <div>
      <div>Languages</div> 
      <div>Nationality </div>
      <div>  Expected Salary </div>
      <div> Residential Status </div>
      <div> Availability </div>
      <div></div>

      </div>
      <div>
      <div>: English 4 Skill, Burmese (Native) </div>
      <div>  : &lt;Burmese, Myanmar&gt;</div>
      <div> : 2500 </div>
      <div>: SPASS</div>
      <div>:Immediately</div>
      <div></div>
         
       
        
         
         
      </div>
               
     </div>

        
      </div>
     </div>
    </div>
  )
}
