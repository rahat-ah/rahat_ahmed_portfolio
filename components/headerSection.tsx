import Link from 'next/link'
import Image from 'next/image'

const headerSection = () => {
  return (
    <header
      className="header lg:w-[80%] w-[90%] max-w-367 mx-auto overflow-hidden md:h-18 lg:h-25 px-4 py-2 md:top-11 top-4"
    >
      <nav className="flex justify-between items-center h-full w-full">
        <div className="relative lg:w-15 lg:h-15 w-8 h-8">
          <Image 
          fill
          src="./assets/hero-section/icons/logo_image.svg"
          alt="Logo"
          className='object-contain'
        />
        </div>
        
        <ul className="xl:flex justify-center items-center gap-11 hidden">
          <li className="nav-item selected-nav-item"><Link href="#home">Home</Link></li>
          <li className="nav-item"><Link href="#skills">Skills</Link></li>
          <li className="nav-item"><Link href="#projects">Projects</Link></li>
          <li className="nav-item"><Link href="#services">Service</Link></li>
        </ul>
        <button className="hire-btn xl:flex hidden" type="button">Hire Me</button>
        <div className="relative xl:hidden lg:w-15 lg:h-15 w-8 h-8 cursor-pointer">
          <Image
          fill
          src="./assets/hero-section/icons/burger-menu-svgrepo-com.svg"
          alt="menu icon"
          className='object-contain'
        />
        </div>
        
      </nav>
    </header>
  )
}

export default headerSection