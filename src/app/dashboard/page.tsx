import Link from 'next/link';
import React from 'react'

import piaic from "../../../public/ai.jpg"
import Image from "next/image";
export default function Dashboard  ()  {
  return (
    <main> 
      <header className='bg-red-700 px-5 py-5 flex gap-5'>
     <Link href='/dashboard/settings'>Settings</Link>


     </header>
      
       WELCOME TO DASHBOARD ROUTE
      <Image src={piaic} width={300} height={200} alt={""} className="border-4 border-blue-600 rounded-full"></Image>


     
      </main>
    
 

  
  )
}