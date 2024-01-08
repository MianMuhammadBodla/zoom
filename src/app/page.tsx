import Image from 'next/image'
import piaic from "@/app/static data/ai.jpg"
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
   <Image 
  src={"https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
}
  width={300}
  height={250}
  alt={''}
  className=' border-4 rounded-md border-blue-500'
  ></Image>

  <div >
<Button href='https://www.instagram.com/mian.muhammadbodla/?igshid=MXVidnAwMnQ1dXhtZw%3D%3D' >   instagram</Button>

  </div>

   <p className='text-red-300'>THIS is zoom online created project</p>
   <a   target='_blank'  href='https://www.piaic.org/'>Piaic Website</a>
    </main>
  );
}
