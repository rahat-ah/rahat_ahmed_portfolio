import React from 'react'

const ProjectSection = () => {
  return (
    <section
        className="projects isolate border-t border-[#2E7D42]/40 relative overflow-hidden"
        id="projects"
      >
        <div
          className="isolate relative max-w-367 lg:w-[80%] w-[90%] mx-auto py-20 flex flex-col gap-6 items-center z-20"
        >
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div
              className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 max-w-61 lg:h-10 rounded-sm ring ring-[#2E7D42] mb-2 px-4 py-1"
            >
              <h2 className="text-[#EBFCEF] lg:text-xl text-lg font-normal">
                My Projects
              </h2>
              <Image
                className="text-[#EBFCEF] lg:w-6 w-5"
                src="./assets/projects-section/icons/ProjectorScreenChart.svg"
                alt="Lightbulb"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5">
              <h1
                className="title-font xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]"
              >
                <span>Projects</span> that matter
              </h1>
              <p className="text-lg text-[#17251B]">
                Real applications built for real clients. Each one a complete
                solution.
              </p>
            </div>
          </div>

          <div
            className="grid xl:grid-rows-3 lg:grid-rows-4 sm:grid-rows-5 grid-rows-6 grid-flow-col gap-8 w-full"
          >
            {/* <!-- project box start here --> */}
            <div
              className="project1 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md"
            >
              <div className="rounded-md w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project2 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md sm:row-span-2 lg:row-span-1 xl:row-span-2"
            >
              <div className="rounded-md flex-1 w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project3 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md lg:row-span-2 xl:row-span-1"
            >
              <div className="rounded-md flex-1 w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project4 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md"
            >
              <div className="rounded-md w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div 
              className="project5 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md lg:row-span-2 xl:row-span-1"
            >
              <div className="rounded-md flex-1 w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project6 flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md"
            >
              <div className="rounded-md w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project7 hidden sm:flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md sm:row-span-2 lg:row-span-2 xl:row-span-1"
            >
              <div className="rounded-md flex-1 w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project8 hidden sm:flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md"
            >
              <div className="rounded-md w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project9 hidden lg:flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md xl:row-span-2"
            >
              <div className="rounded-md flex-1 w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}

            {/* <!-- project box start here --> */}
            <div
              className="project10 hidden xl:flex flex-col justify-center items-center bg-[#F4FCEB] rounded-md"
            >
              <div className="rounded-md w-full">
                <Image
                  src="./assets/projects-section/images/Placeholder Image.svg"
                  alt="project1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-full px-2 flex flex-col justify-center items-start gap-2 py-5"
              >
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <h2 className="text-lg font-bold text-[#17251B]">
                    E-commerce platform
                  </h2>
                  <p className="text-[#17251B]/80 text-[10px]">
                    A full-featured online shopping experience with <br />
                    seamless checkout and inventory management.
                  </p>
                </div>
                <div className="flex justify-items-start items-center gap-1.5">
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    MongoDB
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Figma
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    React
                  </h6>
                  <h6
                    className="text-[#17251B] bg-[#EBFCEF] px-1.5 py-1 text-xs font-semibold"
                  >
                    Next.js
                  </h6>
                </div>
                <button
                  className="bg-[#2E7D42] text-[#EBFCEF] hover:text-[#2E7D42] hover:bg-[#EBFCEF] hover:ring-1 hover:ring-[#2E7D42] py-2 px-4 rounded-[3px] transition-all duration-300 flex justify-center items-center gap-0.5 text-xs max-w-28"
                >
                  <span className="text-nowrap">View Project</span>
                  <Image
                    src="./assets/projects-section/icons/chevron_right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- project box start here --> */}
          </div>

          <button
            className="bg-[#2E7D42] text-[#EBFCEF] py-2 px-4 rounded-md hover:bg-[#7D2E61] transition-all hover:shadow-[#2E7D42] hover:shadow-lg duration-300 max-w-56"
          >
            View All Projects
          </button>
        </div>

        <Image
          src="./assets/projects-section/icons/Vector.svg"
          alt="bg-vector-layer"
          className="absolute md:w-full h-full top-5 left-2 pointer-events-none z-0 scale-300 md:scale-100"
        />
      </section>
  )
}

export default ProjectSection