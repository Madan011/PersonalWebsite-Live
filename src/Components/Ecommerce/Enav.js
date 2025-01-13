import React from 'react'
import logo from '../logo/Logo 804444 192.png'
import '../CSS/MainTheme.css'
import {IoMdLogOut} from 'react-icons/io'
import {PiShoppingCartBold} from 'react-icons/pi'
import { LiaSearchSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'

const Enav = () => {
  return (
    <>
    <div className='flex min-h-fit bg-gray-300'>

        <div className='pl-11 pt-2'><img className='size-20' src={logo} alt=""/></div>        

        <div className='relative ml-auto mr-6'>
         
          <button type='button' className='hover:select-auto mr-6' id='menu-button'><LiaSearchSolid className='iconmenu'/></button>

          <button type='button' className='hover:select-auto mr-6' id='menu-button'><PiShoppingCartBold className='iconmenu'/></button>

          <Link to='/signin'><button type='button' className='hover:select-auto' id='menu-button'><IoMdLogOut className='iconmenu'/></button></Link>         

        </div>

    </div>

     <div className='flex min-h-fit bg-gray-200'>

    <p className='animate-marquee overflow-x-hidden whitespace-nowrap'>This is the demo Ecommerce site. The items shown in this site is generated through free api and is for training and research purpose.</p>

    </div>
     
      
    </>
  )
}

export default Enav
