import React from 'react'

const ServiceSection = () => {
  return (
    <section
        className="service bg-[#FCEBF6] w-full border-t border-[#2E7D42]/40 relative overflow-hidden"
        id="services"
      >
        <div
          className="max-w-367 mx-auto py-20 flex flex-col gap-10 items-center lg:w-[80%] w-[90%]"
        >
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div
              className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 max-w-44 lg:h-10 rounded-sm ring ring-[#2E7D42] mb-2 px-4 py-1"
            >
              <h2 className="text-[#EBFCEF] lg:text-xl text-lg font-normal">
                My services
              </h2>
              <img
                className="text-[#EBFCEF] lg:w-6 w-5"
                src="./assets/service-section/icons/Package.svg"
                alt="package"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <h1
                className="title-font xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]"
              >
                What I can <span>Build</span> for you
              </h1>
              <p className="text-lg text-[#17251B]/80 text-center">
                I design and develop complete web solutions. Full-stack work
                from concept through launch
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center justify-between w-full gap-6"
          >
            <div
              className="service-box1 bg-[#F4FCEB] flex flex-col gap-4 p-4.5 rounded-2xl border border-[#2E7D42]/80 shadow shadow-[#2E7D42]/80"
            >
              <div
                className="bg-[#2E7D42] w-19 h-19 flex items-center justify-center rounded-[14px]"
              >
                <img
                  src="./assets/service-section/icons/paint_brush.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg text-[#2E7D42]/50">01</p>
                <div className="flex-1 h-0.5 bg-[#2E7D42]/50"></div>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-4 justify-center">
                  <h1 className="text-[#17251B] text-3xl font-bold">
                    UI/UX design
                  </h1>
                  <p className="text-[#17251B]/80 text-[16px]">
                    Pixel-perfect interfaces built for real users and real
                    devices.Crafting intuitive,user-friendly interfaces that
                    provide seamless digital experiences.
                  </p>
                </div>

                <button
                  className="max-w-33 text-[#7D2E61] text-xl font-semibold flex justify-center items-center gap-1.5"
                >
                  <span className="text-nowrap">Read more</span>
                  <img
                    src="./assets/service-section/icons/ArrowRight.svg"
                    alt="arrow right"
                  />
                </button>
              </div>
            </div>
            <div
              className="service-box2 bg-[#F4FCEB] flex flex-col gap-4 p-4.5 rounded-2xl border border-[#2E7D42]/80 shadow shadow-[#2E7D42]/80"
            >
              <div
                className="bg-[#2E7D42] w-19 h-19 flex items-center justify-center rounded-[14px]"
              >
                <img
                  src="./assets/service-section/icons/paint_brush.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg text-[#2E7D42]/50">01</p>
                <div className="flex-1 h-0.5 bg-[#2E7D42]/50"></div>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-4 justify-center">
                  <h1 className="text-[#17251B] text-3xl font-bold">
                    UI/UX design
                  </h1>
                  <p className="text-[#17251B]/80 text-[16px]">
                    Pixel-perfect interfaces built for real users and real
                    devices.Crafting intuitive,user-friendly interfaces that
                    provide seamless digital experiences.
                  </p>
                </div>

                <button
                  className="max-w-33 text-[#7D2E61] text-xl font-semibold flex justify-center items-center gap-1.5"
                >
                  <span className="text-nowrap">Read more</span>
                  <img
                    src="./assets/service-section/icons/ArrowRight.svg"
                    alt="arrow right"
                  />
                </button>
              </div>
            </div>
            <div
              className="service-box3 bg-[#F4FCEB] flex flex-col gap-4 p-4.5 rounded-2xl border border-[#2E7D42]/80 shadow shadow-[#2E7D42]/80"
            >
              <div
                className="bg-[#2E7D42] w-19 h-19 flex items-center justify-center rounded-[14px]"
              >
                <img
                  src="./assets/service-section/icons/paint_brush.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg text-[#2E7D42]/50">01</p>
                <div className="flex-1 h-0.5 bg-[#2E7D42]/50"></div>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-4 justify-center">
                  <h1 className="text-[#17251B] text-3xl font-bold">
                    UI/UX design
                  </h1>
                  <p className="text-[#17251B]/80 text-[16px]">
                    Pixel-perfect interfaces built for real users and real
                    devices.Crafting intuitive,user-friendly interfaces that
                    provide seamless digital experiences.
                  </p>
                </div>

                <button
                  className="max-w-33 text-[#7D2E61] text-xl font-semibold flex justify-center items-center gap-1.5"
                >
                  <span className="text-nowrap">Read more</span>
                  <img
                    src="./assets/service-section/icons/ArrowRight.svg"
                    alt="arrow right"
                  />
                </button>
              </div>
            </div>
            <div
              className="service-box3 bg-[#F4FCEB] flex flex-col gap-4 p-4.5 rounded-2xl border border-[#2E7D42]/80 shadow shadow-[#2E7D42]/80"
            >
              <div
                className="bg-[#2E7D42] w-19 h-19 flex items-center justify-center rounded-[14px]"
              >
                <img
                  src="./assets/service-section/icons/paint_brush.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-lg text-[#2E7D42]/50">01</p>
                <div className="flex-1 h-0.5 bg-[#2E7D42]/50"></div>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-4 justify-center">
                  <h1 className="text-[#17251B] text-3xl font-bold">
                    UI/UX design
                  </h1>
                  <p className="text-[#17251B]/80 text-[16px]">
                    Pixel-perfect interfaces built for real users and real
                    devices.Crafting intuitive,user-friendly interfaces that
                    provide seamless digital experiences.
                  </p>
                </div>

                <button
                  className="max-w-33 text-[#7D2E61] text-xl font-semibold flex justify-center items-center gap-1.5"
                >
                  <span className="text-nowrap">Read more</span>
                  <img
                    src="./assets/service-section/icons/ArrowRight.svg"
                    alt="arrow right"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceSection