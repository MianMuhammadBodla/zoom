import Image from 'next/image'
import piaic from "../../public/ai.jpg"
import Button from '@/component/button'


export default function Home(){
  return ( 
    <main className=" flex min-h-screen flex-col items-center p-24 gap-5 ">
   <div className='font-bold text-yellow-300 text-6xl'>WELCOME WORLD</div>
  <Image 
  src={piaic}
  width={300}
  height={250}
  alt={''}
  className=' border-4 rounded-md border-blue-500'
  ></Image>

  <div >
<Button href='https://www.instagram.com/mian.muhammadbodla/?igshid=MXVidnAwMnQ1dXhtZw%3D%3D' >   instagram</Button>

  </div>

   <p className='text-red-300'>THIS is zoom online created project</p>
   <p>rsregf</p>
    </main>
  );
}
