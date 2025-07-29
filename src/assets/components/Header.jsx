import React from 'react'

export default function Header() {
  return (
    <section className='py-8'>
      <div className='mx-auto w-1/2 pt-36 flex flex-col justify-center items-center text-center'>
        <h2 className='text-5xl mb-9 font-bold'>Hey, I'm Dawar.</h2>
        <p className='text-xl text-blue-100 mb-6'> Frontend Developer | BCA Student @ <a className='underline' href="https://mdu.ac.in/">MDU</a>, Rohtak</p>
        <p className=' mb-9 text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-200 to-white w-[490px]'>Drawn to the silent dialogue between user and interface. Relentlessly precise. Building systems that favor clarity, and interactions that linger quietly.</p>
        <div className='space-x-7'>
          <a className=' font-bold text-gray-400 hover:text-white' href="https://flowcv.com/resume/ofqoosgmrv8l">Resume</a>
          <a className=' font-bold text-gray-400 hover:text-white' href="">Medium</a>
          <a className='  font-bold text-gray-400 hover:text-white' href="">Github</a>
          <a className='text-gray-400 font-bold hover:text-white' href="">LinkedIn</a>
        </div>
    </div>
    </section>
  )
}
