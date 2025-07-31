import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {

  const li = document.querySelector('#li')

  return (
    <div className='mx-auto max-w-[50%] mb-12 sticky z-50 bottom-12 bg-transparent hidden'>
        <div className=' py-4 px-7 w-fit mx-auto rounded-full border bg-white/10 backdrop-blur-md shadow-md border-b border-white/20'> 
            <ul className='flex justify-center items-center gap-10 text-gray-400 text-lg'>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/me">mE</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/works">Work</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/Gems">Gems</NavLink>
                <span id='li' className= 'hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-gray-400 hover:text-white border-none hover:border hover:border-gray-600 hover:cursor-pointer hover:bg-[#424141] rounded-2xl py-1 px-2'>Email</span>
            </ul>
        </div>
    </div>
  )
}
