import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='mx-auto w-80 mb-12 sticky z-50 bottom-12 bg-transparent'>
        <div className=' py-4 px-7 rounded-full border bg-white/10 backdrop-blur-md shadow-md border-b border-white/20'> 
            <ul className='flex justify-center items-center gap-10 text-gray-400 text-lg'>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/me">mE</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/works">Work</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/Gems">Gems</NavLink>
            </ul>
        </div>
    </div>
  )
}
