import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, ShoppingBag, Search, AlignLeft, ArrowBigRightDash } from 'lucide-react';

function Header() {
  const navItems = [
    {
      itemName: "Home",
      itemPath: "/"
    },
    {
      itemName: "About",
      itemPath: "/about"
    },
    {
      itemName: "Furniture",
      itemPath: "/furniture"
    },
    {
      itemName: "Shop",
      itemPath: "/shop"
    },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [handleScroll])


  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <section className='fixed top-0 right-0 left-0 sm:right-3 sm:left-3 z-50'>

      <nav className={`w-full flex justify-between  py-2 px-5 sm:px-10 sm:py-7 lg:hidden relative z-50 ${scrolled ? "bg-[#679936] sm:rounded-b-lg" : "bg-transparent"}`}>

        <div className=''>
          <img className='w-32 h-10 object-cover' src="\Furnitures.svg" alt="logo" />
        </div>

        <button onClick={toggleMenu} className='sm:pr-5'><AlignLeft /></button>

        <div className={`w-full h-fit flex flex-col gap-7 absolute top-14 sm:top-28 right-0  bg-[#679936] ${isOpen ? "translate-x-0" : "translate-x-[200%]"} transition-all ease-in-out duration-300 p-3 sm:rounded-lg`}>
 
          <ul className='w-full flex flex-col gap-5'>
            {navItems.map((item) => (<li key={item.itemName} className='w-full bg-white rounded-lg px-2 py-1'>
              <NavLink to={item.itemPath} onClick={closeMenu} className={({ isActive }) => `text-sm w-full flex justify-between ${isActive ? "text-[#679936] font-semibold uppercase" : "text-[#081508]"}`}>{item.itemName} <span><ArrowBigRightDash /></span>
              </NavLink>
            </li>))

            }
          </ul>

          <ul className='flex gap-5'>
            <li onClick={closeMenu} className='bg-black text-white p-2 rounded-lg'><User size={22} /></li>

            <li onClick={closeMenu} className='bg-black text-white p-2 rounded-lg'><ShoppingBag size={22} /></li>

            <li onClick={closeMenu} className='bg-black text-white p-2 rounded-lg'><Search size={22} /></li>
          </ul>


        </div>

      </nav>

      <nav className='hidden w-full lg:flex justify-between py-3'>

        <div className={`w-full flex justify-between ${scrolled ? "bg-[#679936]" : "bg-transparent"} rounded-lg px-10 py-5 transition-all ease-in duration-200`}>


          <div className=''>
            <img className='w-32 h-10 object-cover' src="\Furnitures.svg" alt="logo" />
          </div>

          <div className='grid place-items-center'>
            <ul className='flex gap-7'>

              {navItems.map((item) => (<li key={item.itemName}><NavLink to={item.itemPath} className={({ isActive }) => `text-sm px-2 py-1 rounded-lg ${isActive ? "text-[#ffff] bg-[#679936]" : "text-[#081508] hover:bg-black hover:text-white"} transition-all ease-in duration-200`}>{item.itemName}
              </NavLink></li>))
              }

            </ul>
          </div>

          <div className='grid place-items-center lg:pr-10'>
            <ul className='flex gap-3'>
              <li className='text-black/70 cursor-pointer hover:bg-black p-2 rounded-lg hover:text-white transition-all ease-in duration-200'><User size={22} /></li>
              <li className='text-black/70 cursor-pointer hover:bg-black p-2 rounded-lg hover:text-white transition-all ease-in duration-200'><ShoppingBag size={22} /></li>
              <li className='text-black/70 cursor-pointer hover:bg-black p-2 rounded-lg hover:text-white transition-all ease-in duration-200'><Search size={22} /></li>
            </ul>
          </div>

        </div>

      </nav>

    </section>
  )
}

export default Header;