import React from 'react'

const AboutSkillSection = () => {
  return (
    <div
        className="about-and-skill w-full flex flex-col gap-20 md:py-24 py-12 overflow-hidden isolate"
      >
        {/* <!-- about section start here --> */}
        <section
          className="about md:flex-row flex flex-col justify-between items-center gap-8 lg:gap-10 md:gap-4 max-w-367 mx-auto lg:w-[80%] w-[90%] z-10"
          id="skills"
        >
          <div
            className="flex flex-col items-center justify-center gap-4 md:w-1/2 w-full"
          >
            <Image
              src="./assets/about-skill-section/images/skill up left image.svg"
              alt="about profile"
              className="w-full rounded-[40px]"
            />
            <div
              className="xl:hidden hidden justify-between items-center xl:max-w-[60%] max-w-full md:flex gap-4"
            >
              <div>
                <h5 className="text-[32px] font-bold text-[#17251b]">+5</h5>
                <p className="font-medium text-xs text-[#17251b] opacity-80">
                  Years experience
                </p>
              </div>
              <div>
                <h5 className="text-[32px] font-bold text-[#17251b]">+20</h5>
                <p className="font-medium text-xs text-[#17251b] opacity-80">
                  Projects completed
                </p>
              </div>
              <div>
                <h5 className="text-[32px] font-bold text-[#17251b]">+12</h5>
                <p className="font-medium text-xs text-[#17251b] opacity-80">
                  Happy clients
                </p>
              </div>
            </div>
          </div>

          <div className="about-right md:w-1/2 w-full flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <div
                className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 py-1 max-w-61 max-h-10 rounded-sm ring ring-[#2E7D42]"
              >
                <h2 className="text-[#EBFCEF] lg:text-xl text-lg font-normal">
                  My Creative Journey
                </h2>
                <Image
                  className="text-[#EBFCEF] lg:w-6 w-5"
                  src="./assets/about-skill-section/icons/BookBookmark.svg"
                  alt="Lightbulb"
                />
              </div>
              <h1
                className="title-font xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]"
              >
                What I <span>bring</span> to every <span>project</span>
              </h1>
              <h2 className="lg:text-xl md:text-[16px] text-[20px] text-[#17251B]">
                I’m Rahat Ahmed, a UX/UI Designer and Next.js Full-Stack
                Developer passionate about crafting intuitive, user-centered
                digital experiences.
              </h2>
            </div>
            <div className="flex flex-col gap-7">
              <p
                className="lg:text-[16px] md:text-sm text-lg text-[#17251b] opacity-70"
              >
                Over time, I have developed a strong combination of design
                thinking and full-stack development skills.I work across the
                entire stack, handling everything from pixel-perfect interfaces
                to scalable backend systems. Each skill sharpened through real
                client work and continuous learning.
              </p>
              <div
                className="xl:flex md:hidden flex justify-between items-center lg:max-w-[60%]"
              >
                <div>
                  <h5 className="text-[32px] font-bold text-[#17251b]">+5</h5>
                  <p className="font-medium text-xs text-[#17251b] opacity-80">
                    Years experience
                  </p>
                </div>
                <div>
                  <h5 className="text-[32px] font-bold text-[#17251b]">+20</h5>
                  <p className="font-medium text-xs text-[#17251b] opacity-80">
                    Projects completed
                  </p>
                </div>
                <div>
                  <h5 className="text-[32px] font-bold text-[#17251b]">+12</h5>
                  <p className="font-medium text-xs text-[#17251b] opacity-80">
                    Happy clients
                  </p>
                </div>
              </div>
              <button
                className="px-6 py-3 rounded-sm text-[#EBFCEF] font-medium text-lg bg-[#2E7D42] max-w-64 flex justify-center items-center gap-1 hover:bg-[#7D2E61] transition-all hover:shadow-[#2E7D42] hover:shadow-lg"
              >
                <span>Download My CV</span>
                <Image
                  src="./assets/about-skill-section/icons/download.svg"
                  alt="Download CV"
                  className="inline-block w-6"
                />
              </button>
            </div>
          </div>
        </section>

        {/* <!-- about section end here --> */}

        {/* <!-- skills section start here --> */}
        <section className="skills max-w-367 mx-auto lg:w-[80%] w-[90%] z-10">
          <div className="mb-9">
            <div
              className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 max-w-32 max-h-10 rounded-sm ring ring-[#2E7D42] mb-2"
            >
              <h2 className="text-[#EBFCEF] lg:text-xl text-lg font-normal">
                TECH
              </h2>
              <Image
                className="text-[#EBFCEF] lg:w-6 w-5"
                src="./assets/about-skill-section/icons/cpu.svg"
                alt="Lightbulb"
              />
            </div>
            <h1
              className="title-font xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]"
            >
              My <span>Skills.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div
              className="icons-row1 flex w-[90%] items-center justify-between lg:justify-center lg:gap-14 xl:gap-20 gap-1.5"
            >
              <div>
                <Image
                  src="./assets/about-skill-section/images/figma 1.svg"
                  alt="figma"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/nextJs_3d_logo_2-removebg-preview 1.svg"
                  alt="nextjs"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/nodejs_3d_logo_2-removebg-preview 1.svg"
                  alt="nodejs"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/JavaScript 3d logo 1.svg"
                  alt="javascript"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/mongo_db_3d_logo_2-removebg-preview 1.svg"
                  alt="mongodb"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/react_3d_logo_2-removebg-preview 1.svg"
                  alt="react"
                />
              </div>
            </div>
            <div
              className="icons-row2 flex justify-between lg:justify-center md:w-[60%] w-[80%] md:min-w-140 items-center lg:gap-14 xl:gap-18.5 gap-1.5"
            >
              <div>
                <Image
                  src="./assets/about-skill-section/images/git 3d logo 1.svg"
                  alt="git"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/express js 3d logo 1.svg"
                  alt="express"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/typescript 3d logo 1.svg"
                  alt="typescript"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/tailwind 3d logo 1.svg"
                  alt="tailwind"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/framer 3d logo 2.svg"
                  alt="framer-motion"
                />
              </div>
            </div>
            <div
              className="icons-row3 flex justify-between lg:justify-center w-[25%] items-center lg:gap-14 xl:gap-15"
            >
              <div>
                <Image
                  src="./assets/about-skill-section/images/css_3d_logo-removebg-preview 1.svg"
                  alt="css"
                />
              </div>
              <div>
                <Image
                  src="./assets/about-skill-section/images/html_3d_logo_2-removebg-preview 1.svg"
                  alt="html"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- skills section start here --> */}
        <Image
          src="./assets/about-skill-section/icons/middle-bottom-bg-layer.svg"
          alt="bg-layer"
          className="bg-layer1 pointer-events-none z-0"
        />
        <Image
          src="./assets/about-skill-section/icons/right-middle-bg-layer.svg"
          alt="bg-layer"
          className="bg-layer2 pointer-events-none z-0"
        />
        <Image
          src="./assets/about-skill-section/icons/right-bottom-bg-layer.svg"
          alt="bg-layer"
          className="bg-layer3 pointer-events-none z-0"
        />
      </div>
  )
}

export default AboutSkillSection