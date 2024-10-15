import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, ShoppingBag, Search, AlignLeft } from 'lucide-react';

function Header() {
const [isOpen , setIsOpen] = useState(false);

const toggleMenu = useCallback(() => {
  setIsOpen(!isOpen);
},[isOpen])

const closeMenu = ()=>{
  setIsOpen(false);
}

  return (
    <section className='w-full fixed top-0 '>

      <nav className='w-full flex justify-between  py-2 px-5 sm:px-10 sm:py-9 lg:hidden'>

        <div className=''>
          <img className='w-32 h-10 object-cover' src="\Furnitures.svg" alt="logo" />
        </div>

        <button onClick={toggleMenu} className='sm:pr-5'><AlignLeft /></button>

        <div className={`w-full h-screen grid place-items-center absolute top-14 sm:top-24 right-0  bg-[#679936] ${isOpen ? "translate-x-0": "-translate-x-full"}`}>

          <ul className='flex flex-col gap-9'>
            
            <li><NavLink to={"/"} onClick={closeMenu} className={({ isActive }) => `text-sm ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Home
            </NavLink></li>

            <li><NavLink to={"/about"} onClick={closeMenu} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>About
            </NavLink></li>

            <li><NavLink to={"/furniture"} onClick={closeMenu} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Furniture
            </NavLink></li>

            <li><NavLink to={"/shop"} onClick={closeMenu} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Shop
            </NavLink></li>

            <li  onClick={closeMenu} className='text-black/70'><User size={22} /></li>

            <li  onClick={closeMenu} className='text-black/70'><ShoppingBag size={22} /></li>

            <li  onClick={closeMenu} className='text-black/70'><Search size={22} /></li>

          </ul>

        </div>

      </nav>

      <nav className='hidden w-full lg:flex justify-between lg:px-10 lg:py-9'>
        <div className=''>
          <img className='w-32 h-10 object-cover' src="\Furnitures.svg" alt="logo" />
        </div>

        <div className='grid place-items-center'>
          <ul className='flex gap-9'>
            <li><NavLink to={"/"} className={({ isActive }) => `text-sm ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Home
            </NavLink></li>

            <li><NavLink to={"/about"} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>About
            </NavLink></li>

            <li><NavLink to={"/furniture"} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Furniture
            </NavLink></li>

            <li><NavLink to={"/shop"} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#679936]" : "text-[#081508]"}`}>Shop
            </NavLink></li>

          </ul>
        </div>

        <div className='grid place-items-center lg:pr-10'>
          <ul className='flex lg:gap-7'>
            <li className='text-black/70'><User size={22} /></li>
            <li className='text-black/70'><ShoppingBag size={22} /></li>
            <li className='text-black/70'><Search size={22} /></li>
          </ul>
        </div>

      </nav>
    </section>
  )
}

export default Header;