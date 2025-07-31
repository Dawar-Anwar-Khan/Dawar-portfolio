import React from 'react'

export default function Header() {
  return (
    <section className='py-8'>
      <div className='mx-auto max-w-2xl pt-36 flex flex-col justify-center items-center text-center md:w-1/2'>
        <h2 className='text-[36px] mb-9 font-bold md:text-[48px]'>Hey, I'm Dawar.</h2>
        <p className='text-blue-100 mb-6 text-[18px] md:text-[20px]'> Frontend Developer | BCA Student @ <a className='underline' href="https://www.jbcollege.in/">JBKP</a></p>
        <p className=' mb-9 text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-white max-w-xs md:max-w-2xl text-[12px] md:text-[16.5px]'>Drawn to the silent dialogue between user and interface. Relentlessly precise. Building systems that favor clarity, and interactions that linger quietly.</p>
        <div className='space-x-7'>
          <a className=' font-bold text-gray-400 hover:text-white text-xs md:text-lg' href="https://flowcv.com/resume/ofqoosgmrv8l">Resume</a>
          <a className=' font-bold text-gray-400 hover:text-white text-xs md:text-lg' href="">Medium</a>
          <a className='  font-bold text-gray-400 hover:text-white text-xs md:text-lg' href="https://github.com/Dawar-Anwar-Khan">Github</a>
          <a className='text-gray-400 font-bold hover:text-white text-xs md:text-lg' href="https://www.linkedin.com/in/dawar-anwar-khan-50458633a/">LinkedIn</a>
        </div>
    </div>
    </section>
  )
}
