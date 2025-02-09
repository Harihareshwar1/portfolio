import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex justify-between w-screen items-center text-white p-4'>
   <span className='text-green-500 text-3xl font-medium'>Portfolio</span>
    <nav className='flex justify-end gap-4  p-4 text-2xl bg-transparent'>
      <Link to="/">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Home</span>
      </Link>
      <Link to="/skills">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Skills</span>
      </Link>
      <Link to="/achievements">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Achievements</span>
      </Link>
      <Link to="/certifications">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Certifications</span>
      </Link>
      <Link to="/projects">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Projects</span>
      </Link>
      <Link to="/contact">
        <span className='text-green-500 hover:text-green-700 transition-all duration-500 hover:text-3xl'>Contact</span>
      </Link>
    </nav>
    </div>
  )
}

export default NavBar