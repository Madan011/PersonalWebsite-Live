import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo/Logo.svg'
import {CgMenuRound} from 'react-icons/cg'
import './CSS/MainTheme.css'

const NavBar = () => {  
  
  const [isActive, setclass] = useState(false)

  const showMenu = () => {
      setclass(!isActive)
  }

  return (
    <> 
      <div className='flex min-h-fit bg-gray-300'>
        <div className='pl-11'><img src={logo} alt=""/></div>
        <div className='relative ml-auto pr-6'>
          

          <button type='button' className='hover:select-auto' id='menu-button' onClick={ () => showMenu()}><CgMenuRound className='iconmenu'/>

          </button>

          <div className={`${isActive ? "NavdropActive" : "NavdropInActive"} `}>
          <div className={'absolute right-6 w-56 rounded-md bg-gray-200 shadow-lg ring-1 ring-black/5 focus:outline-none'} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">         
          <Link to="/signin" className="block px-4 py-2 text-sm maintext hover:bg-gray-300" role="menuitem" tabindex="-1" id="menu-item-0">Project Lookup</Link>
          <Link to="/" className="block px-4 py-2 text-sm maintext hover:bg-gray-300" role="menuitem" tabindex="-1" id="menu-item-1">Home</Link>
          <Link className="block px-4 py-2 text-sm maintext hover:bg-gray-300" role="menuitem" tabindex="-1" id="menu-item-1">About</Link>           
          </div>
          </div>

          

        </div>
      </div>      
    </>
  )
}

export default NavBar
