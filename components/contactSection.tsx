import React from 'react'

const ContactSection = () => {
  return (
    <section className="contact w-full overflow-hidden">
        <div
          className="max-w-367 mx-auto py-20 flex flex-col gap-6 items-start justify-center lg:w-[80%] w-[90%] relative isolate z-20"
        >
          <div
            className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 max-w-44 h-10 rounded-sm ring ring-[#2E7D42] mb-2 px-4 py-2"
          >
            <h2 className="text-[#EBFCEF] text-xl font-normal">Contact me</h2>
            <img
              className="text-[#EBFCEF] w-6"
              src="./assets/contact-section/icons/AddressBook.svg"
              alt="address book"
            />
          </div>
          <div
            className="flex flex-col md:flex-row justify-center md:gap-8 gap-12 min-w-0"
          >
            <div
              className="md:w-[50%] w-full flex flex-col justify-between gap-8 min-w-0"
            >
              <div>
                <div
                  className="flex flex-col items-start justify-center gap-2 mb-8"
                >
                  <h1 className="title-font font-bold text-5xl">
                    Let's <span>Discuss</span> your <span>Project</span>
                  </h1>
                  <p className="text-lg text-[#17251B]/80">
                    My aim is to Design and Develop websites that are not only
                    visually appealing but also practical and scalable.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-7">
                  <div
                    className="contact1 flex items-center justify-center sm:gap-4.5 gap-1"
                  >
                    <div
                      className="w-11 h-11 rounded-full border-2 border-[#2E7D42] flex items-center justify-center"
                    >
                      <img
                        src="./assets/contact-section/icons/phone_icon.svg"
                        alt="Phone"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <p className="text-[14px] text-[#17251B]/70">Call me</p>
                      <h6 className="text-[#17251B] font-medium text-lg">
                        +8801816479646
                      </h6>
                    </div>
                  </div>

                  <div
                    className="contact2 flex items-center justify-center sm:gap-4.5 gap-1 min-w-0 overflow-hidden"
                  >
                    <div
                      className="w-11 h-11 rounded-full border-2 border-[#2E7D42] flex items-center justify-center"
                    >
                      <img
                        src="./assets/contact-section/icons/email_icon.svg"
                        alt="Email"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <p className="text-[14px] text-[#17251B]/70">Email me</p>
                      <h6 className="text-[#17251B] font-medium text-lg">
                        mdrahatahmed@gmail.com
                      </h6>
                    </div>
                  </div>

                  <div
                    className="contact3 flex items-start justify-center sm:gap-4.5 gap-1"
                  >
                    <div
                      className="w-11 h-11 rounded-full border-2 border-[#2E7D42] flex items-center justify-center"
                    >
                      <img
                        src="./assets/contact-section/icons/map_icon.svg"
                        alt="Map"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <p className="text-[14px] text-[#17251B]/70">Visit me</p>
                      <h6 className="text-[#17251B] font-medium text-lg">
                        Rajshahi, Bangladesh
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hero-left-down flex flex-col gap-2.5 md:items-start items-end w-full overflow-hidden"
              >
                <h4
                  className="connect-title text-[#17251B] font-bold text-[16px] uppercase"
                >
                  Connect with me
                </h4>
                <div
                  className="connect-icons-box flex sm:gap-5 md:gap-3 lg:gap-5 gap-3"
                >
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
                  >
                    <img
                      src="./assets/hero-section/icons/icons8-git-logo-96.png"
                      alt="git"
                      className="connect-icon"
                    />
                  </div>
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
                  >
                    <img
                      src="./assets/hero-section/icons/dribbble.svg"
                      alt="Dribbble"
                      className="connect-icon"
                    />
                  </div>
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
                  >
                    <img
                      src="./assets/hero-section/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="connect-icon"
                    />
                  </div>
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
                  >
                    <img
                      src="./assets/hero-section/icons/youtube.svg"
                      alt="YouTube"
                      className="connect-icon"
                    />
                  </div>
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
                  >
                    <img
                      src="./assets/hero-section/icons/instagram.svg"
                      alt="Instagram"
                      className="connect-icon"
                    />
                  </div>
                  <div
                    className="sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg"
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
            <div className="md:w-[50%] w-full min-w-0">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className="title-font font-bold text-5xl">Send a message</h1>
                <p className="text-lg text-[#17251B]/80">
                  Tell me about your project and timeline.
                </p>
              </div>
              <form action="" className="flex flex-col gap-4 mt-6 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[#17251B] font-medium"
                    >Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full min-w-0 bg-transparent placeholder:text-[#17251B]/50 text-[#17251B] border border-[#2E7D42] focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#7D2E61] rounded-sm p-3 font-medium text-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#17251B] font-medium"
                    >Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="bg-transparent placeholder:text-[#17251B]/50 text-[#17251B] border border-[#2E7D42] focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#7D2E61] rounded-sm p-3 font-medium text-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[#17251B] font-medium"
                    >Message </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    className="bg-transparent placeholder:text-[#17251B]/50 placeholder:text-[16px] text-lg text-[#17251B] border border-[#2E7D42] focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#7D2E61] rounded-sm h-55 p-3 font-medium"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#2E7D42] text-[#EBFCEF] py-2 px-4 rounded-sm hover:bg-[#7D2E61] transition-all hover:shadow-[#2E7D42]/60 hover:shadow-lg duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <img
          src="./assets/contact-section/images/IMG_7062-Photoroom 2.svg"
          alt="contact-profile-bg"
          className="max-w-[40%] max-h-[80%] absolute bottom-0 left-[15%] object-contain pointer-events-none z-0 hidden md:block"
        />
      </section>
  )
}

export default ContactSection