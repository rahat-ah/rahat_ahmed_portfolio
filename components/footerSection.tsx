import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
    <section className="footer bg-[#17251B] w-full pt-15">
        <div
          className="lg:w-[80%] w-[90%] mx-auto rounded-lg bg-[#EBFCEF] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 md:p-12 p-4 mb-6 overflow-hidden"
        >
          <div
            className="flex flex-col items-start justify-center md:gap-12 gap-6 md:min-w-[40%] md:max-w-[60%] w-full"
          >
            <div className="flex flex-col items-start justify-center gap-4">
              <img
                src="./assets/hero-section/icons/logo_image.svg"
                alt="Logo"
              />
              <h2
                className="title-font text-5xl text-[#17251B] xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]"
              >
                Thank you for visiting
              </h2>
              <button className="hire-btn" type="button">Hire Me</button>
            </div>
            <div>
              <h6 className="text-[16px] font-semibold text-[#17251B] mb-1">
                Contact
              </h6>
              <div>
                <p className="text-sm text-[#17251B] underline">+8801816479636</p>
                <p className="text-sm text-[#17251B] underline">
                  mdrahatahmedboss@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-28">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2.5 w-[50%]">
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Home</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >About me</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Services</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Portfolio</Link>
              </div>
              <div className="flex flex-col gap-2.5 w-[50%]">
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Contact us</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Skills</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >see projects</Link>
                <Link href={'#home'}
                  className="text-sm font-semibold text-[#17251B] hover:text-[#17251B]/80 hover:underline cursor-pointer"
                  >Download CV</Link>
              </div>
            </div>
            <div
              className="connect-icons-box flex sm:gap-5 md:gap-3 lg:gap-3 xl:gap-5 gap-3 w-full"
            >
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 w-8 h-8 lg:w-10 lg:h-10 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/icons8-git-logo-96.png"
                  alt="git"
                  className="connect-icon"
                />
              </div>
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 lg:w-10 lg:h-10 w-8 h-8 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/dribbble.svg"
                  alt="Dribbble"
                  className="connect-icon"
                />
              </div>
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 lg:w-10 lg:h-10 w-8 h-8 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="connect-icon"
                />
              </div>
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 lg:w-10 lg:h-10 w-8 h-8 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/youtube.svg"
                  alt="YouTube"
                  className="connect-icon"
                />
              </div>
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 lg:w-10 lg:h-10 w-8 h-8 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/instagram.svg"
                  alt="Instagram"
                  className="connect-icon"
                />
              </div>
              <div
                className="sm:w-10.5 sm:h-10.5 md:w-8 md:h-8 lg:w-10 lg:h-10 w-8 h-8 sm:rounded-[14px] rounded-lg"
              >
                <img
                  src="./assets/hero-section/icons/facebook.svg"
                  alt="Facebook"
                  className="connect-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#7D2E61] flex justify-center items-center py-2 px-12">
          <p className="text-sm text-[#EBFCEF] text-center">
            &copy; 2026 All rights reserved | Designed & developed with love
            <span className="text-[#2E7D42]">❤</span> by
            <a href="#" className="text-[#EBFCEF] hover:underline">Rahat Ahmed</a>
          </p>
        </div>
      </section>
  )
}

export default FooterSection