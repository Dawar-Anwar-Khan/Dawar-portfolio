import { NavLink } from 'react-router'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.jpeg'


export default function Cards() {
  return (
   <section className='py-12 mb-20  w-1/2 mx-auto'>
     <div className=' h-72'>
       <div className='flex justify-center items-center'>
         <div className='h-72 w-72 bg-custom-gradient1  rounded-2xl -rotate-12 hover:scale-105 transition shadow-xl duration-300 hover:z-20 flex items-center justify-center overflow-hidden'>
         <a className='bg-custom-gradient1 ' href="https://theshoecompany0.netlify.app/"> <img className='max-w-full max-h-full object-contain' src={image1} alt="" /></a>
         </div>
        <div className='h-72 w-72 bg-custom-gradient2  rounded-2xl hover:scale-105 transition duration-300 shadow-xl z-10 flex items-center justify-center overflow-hidden'>
         <a className='bg-custom-gradient2' href="https://close-to-the-world-app.netlify.app/"> <img  className='max-w-full max-h-full object-contain' src={image2} alt="" /></a>
        </div>
        <div className='h-72 w-72 bg-custom-gradient3  rounded-2xl rotate-12 hover:scale-105 transition shadow-xl duration-300 hover:z-20 flex items-center justify-center overflow-hidden'>
         <a className='bg-custom-gradient3' href="https://quoteverse1.netlify.app/"> <img className='max-w-full max-h-full object-contain' src={image3} alt="" /></a>
        </div>
       </div>
       <div className='mt-20 text-center'>
        <NavLink className='border-gray-600 border p-4 rounded-full items-center' to="/work">View more projects&nbsp;&nbsp; →</NavLink>
       </div>
    </div>
   </section>
  )
}