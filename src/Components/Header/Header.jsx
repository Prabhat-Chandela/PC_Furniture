import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <section className='w-full fixed top-0 '>
      <nav className='w-full flex justify-between py-2 px-5 sm:px-10 sm:py-9'>
        <div>
          Logo
        </div>

        <div className='grid place-items-center'>
          <ul className='flex gap-9'>
            <li><NavLink to={"/"} className={({isActive})=>`text-sm ${isActive ? "text-[#679936]": "text-[#081508]"}`}>Home
            </NavLink></li>

            <li><NavLink to={"/about"} className={({isActive})=>`text-sm ${isActive ? "text-[#679936]": "text-[#081508]"}`}>About
            </NavLink></li>

            <li><NavLink to={"/furniture"} className={({isActive})=>`text-sm ${isActive ? "text-[#679936]": "text-[#081508]"}`}>Furniture
            </NavLink></li>

            <li><NavLink to={"/shop"} className={({isActive})=>`text-sm ${isActive ? "text-[#679936]": "text-[#081508]"}`}>Shop
            </NavLink></li>

          </ul>
        </div>

        <div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>

      </nav>
    </section>
  )
}

export default Header;