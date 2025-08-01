import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {

  const [isClicked, setIsClicked] = useState(false)

  return (
   <>
    <div className={`mx-auto max-w-[50%] mb-12 sticky z-50 bottom-12 bg-transparent ${isClicked ? 'hidden' : ''}`}>
        <div className=' py-4 px-7 w-fit mx-auto rounded-full border bg-[rgba(64,64,64,0.6)] backdrop-blur-md shadow-md border-b border-white/20 hidden lg:block'> 
            <ul className='flex justify-center items-center gap-10 text-gray-400 text-lg'>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/me">mE</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/works">Work</NavLink>
                <NavLink className={({isActive}) => isActive ? 'shadow-[0_0_15px_rgba(255,255,255,0.5)] text-white border border-gray-600  bg-gray-600 rounded-2xl py-1 px-2' : ''} to="/Gems">Gems</NavLink>
                <span className= 'hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-gray-400 hover:text-white border-none hover:border hover:border-gray-600 hover:cursor-pointer hover:bg-[#424141] rounded-2xl py-1 px-2' onClick={() => { alert('Text copied to clipboard!') 
                  return navigator.clipboard.writeText('kdawar0101@gmail.com')}}>Email</span>
            </ul>
        </div>
        <div className={`rounded-full border bg-[rgba(64,64,64,0.6)] backdrop-blur-sm shadow-md border-b border-white/20 w-fit mx-auto py-3 px-6 text-xl lg:hidden hover:cursor-pointer ${isClicked ? 'hidden' : ''}`} onClick={() => setIsClicked(true)}>Menu</div>
    </div>
    <div className={`mx-auto max-w-2xl sticky z-50 bottom-[2%] bg-transparent`} >
       <div className={isClicked ? ' bg-[rgba(14,13,13,0.6)] backdrop-blur-lg shadow-md border-b border-white/20 flex flex-col justify-center items-center gap-20 p-2' : 'hidden'}>
        <NavLink className={`text-3xl`} onClick={() => setIsClicked(false)} to="/">Home</NavLink>
        <NavLink className={`text-3xl`} onClick={() => setIsClicked(false)} to="/me">mE</NavLink>
        <NavLink className={`text-3xl`} onClick={() => setIsClicked(false)} to="/works">Work</NavLink>
        <NavLink className={`text-3xl`} onClick={() => setIsClicked(false)} to="/Gems">Gems</NavLink>
        <span id='li' className={`text-3xl`} onClick={() => {
          alert('Text copied to clipboard!')
          return [navigator.clipboard.writeText('kdawar0101@gmail.com'), setIsClicked(false)]
        }}>Email</span>
        <span className={`rounded-full border text-black bg-[#fff] shadow-md border-b border-white/20 py-3 px-6 text-xl lg:hidden hover:cursor-pointer`} onClick={() => {setIsClicked(false)}}>Close</span>
       </div>
    </div>
   </>
  )
}
