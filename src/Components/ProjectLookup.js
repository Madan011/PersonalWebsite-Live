import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const ProjectLookup = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">

    <NavBar/>

    <div className="flex-grow pt-32 px-11 pb-11 flex flex-wrap gap-5">
      
      <Link to="/signin"><button class="bg-gradient-to-r from-teal-600 to-teal-800 text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl hover:from-teal-700 hover:to-teal-900 active:shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 hover:rotate-1 border border-teal-500 hover:border-teal-300 text-lg">Ecommerce Demo</button></Link>

    </div>

    <Footer/>

    </div>
    



      
    </>
  )
}

export default ProjectLookup
