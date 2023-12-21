import Image from 'next/image'
import piaic from "../../public/ai.jpg"
export default function Home() {
  return ( 
    <main className=" px-4 py-4 text-green-900 ">
   <div className='font-bold text-yellow-400'>WELCOME to pakistan</div>
  <Image 
  src={piaic}
  width={300}
  height={250}
  alt={''}
  className=' border-4 rounded-md border-blue-500'
  ></Image>

   <p className='text-red-300'>THIS is zoom online created project</p>
   <p>rsregf</p>
    </main>
  )
}
