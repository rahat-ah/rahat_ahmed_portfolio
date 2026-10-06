import Link from 'next/link'
import React from 'react'

const headerSection = () => {
  return (
    <header
      className="header lg:w-[80%] w-[90%] max-w-367 mx-auto overflow-hidden md:h-18 lg:h-25 px-4 py-2 md:top-11 top-4"
    >
      <nav className="flex justify-between items-center h-full w-full">
        <img
          src="./assets/hero-section/icons/logo_image.svg"
          alt="Logo"
          className="lg:w-15 lg:h-15 w-8 h-8"
        />
        <ul className="xl:flex justify-center items-center gap-11 hidden">
          <li className="nav-item selected-nav-item"><Link href="#home">Home</Link></li>
          <li className="nav-item"><Link href="#skills">Skills</Link></li>
          <li className="nav-item"><Link href="#projects">Projects</Link></li>
          <li className="nav-item"><Link href="#service">Service</Link></li>
        </ul>
        <button className="hire-btn xl:flex hidden" type="button">Hire Me</button>
        <img
          src="./assets/hero-section/icons/burger-menu-svgrepo-com.svg"
          alt=""
          className="xl:hidden lg:w-15 lg:h-15 w-8 h-8 cursor-pointer"
        />
      </nav>
    </header>
  )
}

export default headerSection