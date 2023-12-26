import React from 'react'
import piaic from "../../../public/ai.jpg"
import Image from "next/image";
export default function Dashboard  ()  {
  return (
    <main>  WELCOME TO DASHBOARD ROUTE
      <Image src={piaic} width={300} height={200} alt={""} className="border-4 border-blue-600 rounded-full"></Image>

      </main>
    
 

  
  )
}