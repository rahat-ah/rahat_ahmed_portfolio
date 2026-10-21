import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero relative isolate overflow-hidden" id="home">
      <Image
        fill
        src="/assets/hero-section/icons/Vector_grid_pattarn_bg.svg"
        alt="Background Pattern"
        className="absolute top-0 left-0 h-full w-full pointer-events-none z-0 object-fill scale-200 md:scale-100 self-center"
      />
      <Image
        fill
        src="/assets/hero-section/icons/hero_right_bottom_bg_layer.svg"
        alt="Background Layer"
        className="absolute bottom-0 right-0 h-1/2 pointer-events-none z-0 object-fill"
      />
      <Image
        fill
        src="/assets/hero-section/icons/hero_top_left_bg_layer.svg"
        alt="Background Layer"
        className="absolute top-0 lg:-left-110 sm:left-0 h-1/2 w-full pointer-events-none z-0 object-fill"
      />
      <div className="relative m-auto md:pt-50 pt-21 md:pb-21 pb-10 flex md:flex-row flex-col-reverse justify-between items-center xl:gap-10 md:gap-12 gap-6 max-w-367 lg:w-[80%] w-[90%] mx-auto">
        <div className="hero-left flex flex-col gap-20 md:max-w-[50%] sm:w-full z-20">
          <div className="hero-left-up flex flex-col sm:gap-8 gap-4">
            <div className="hero-title-card-box bg-[#7D2E61] flex justify-center items-center gap-2 max-w-57 max-h-10 rounded-sm ring ring-[#2E7D42] py-1">
              <h2 className="text-[#EBFCEF] lg:text-xl text-lg font-normal">
                Just need your Idea
              </h2>
              <div className="text-[#EBFCEF] lg:w-6 lg:h-6 w-5 h-5 shrink-0 relative">
                <Image
                fill
                className="object-contain"
                src="/assets/hero-section/icons/Lightbulb.svg"
                alt="Lightbulb"
              />
              </div>
              
            </div>
            <div className="hero-main-title-box flex flex-col sm:gap-6 gap-2">
              <h1 className="title-font xl:text-[56px] lg:text-[44px] md:text-[36px] sm:text-[44px] text-[32px] font-bold leading-[1.2]">
                I <span>Design</span> and Build
                <span>Responsive</span> Websites <br />
                with modern <span>Code</span>
              </h1>
              <p className="text-[#17251B] text-[16px] leading-normal opacity-80">
                I design intuitive user experiences in Figma and transform them
                into high-performance web applications using MERN stack and
                Next.js. From concept to deployment, I build modern digital
                products that look great and work flawlessly.
              </p>
            </div>
            <div className="hero-action-btn-box flex gap-4">
              <button
                className="hero-action-btn projects-btn w-28 h-12 flex justify-center items-center rounded-sm text-[#EBFCEF] bg-[#2E7D42] hover:bg-[#EBFCEF] hover:text-[#2E7D42] hover:transition-all hover:border-[1.5px] hover:border-[#2E7D42]"
                type="button"
              >
                Projects
              </button>
              <button
                className="hero-action-btn contact-btn w-28 h-12 flex justify-center items-center rounded-sm text-[#7D2E61] border-[1.5px] border-[#7D2E61] hover:bg-[#7D2E61] hover:text-[#EBFCEF] hover:transition-all"
                type="button"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="hero-left-down flex flex-col gap-2.5">
            <h4 className="connect-title text-[#17251B] font-bold text-[16px] uppercase">
              Connect with me
            </h4>
            <div className="connect-icons-box flex sm:gap-5 gap-3">
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/icons8-git-logo-96.png"
                    alt="git"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/dribbble.svg"
                    alt="dribbble"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/linkedin.svg"
                    alt="linkedin"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/youtube.svg"
                    alt="youtube"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/instagram.svg"
                    alt="instagram"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
              <div className=" relative sm:w-10.5 sm:h-10.5 w-8 h-8 sm:rounded-[14px] rounded-lg">
                <div className="absolute inset-1 ring-0 border-0!">
                  <Image
                    fill
                    src="/assets/hero-section/icons/facebook.svg"
                    alt="Facebook"
                    className="connect-icon object-contain ring-0 border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right relative z-20">
          <div className="w-[80%] md:w-full mx-auto relative">
            <Image
            width={487}
            height={772}
            src="/assets/hero-section/images/hero_right-image_group.png"
            alt="Profile Image"
            className="object-contain"
          />
          </div>
          
          <div className="hero-floting-card1 md:left-[-10%] 2xl:left-[-20%] sm:right-[65%] left-[-4%] 2xl:bottom-[50%] xl:bottom-[45%] bottom-[40%] sm:py-2 sm:px-8 py-1 px-2 md:gap-1 sm:gap-3 gap-0.5 sm:rounded-xl rounded-md">
            <p className="font-medium xl:text-2xl md:text-lg lg:text-xl sm:text-2xl text-xs text-[#17251B] text-nowrap">
              Hi, I'm Rahat
            </p>
            <div className="sm:w-6 sm:h-6 w-4 h-4 relative shrink-0">
              <Image
              fill
              src="/assets/hero-section/icons/smile_icon.svg"
              alt="smile icon"
              className="object-contain"
            />
            </div>
            
          </div>
          <div className="hero-floting-card2 2xl:bottom-[16%] right-0 md:translate-x-[10%] sm:translate-x-[20%] md:bottom-[5%] sm:bottom-[15%] bottom-[8%] px-3">
            <div className="lg:h-11 lg:w-11 md:h-8 md:w-8 sm:h-12 sm:w-12 h-6 w-6 relative">
              <Image
              fill
              src="/assets/hero-section/icons/pen_tool_icon.svg"
              alt="pen tool"
              className="object-contain"
            />
            </div>
            
            <p className="font-medium lg:text-[16px] md:text-[12px] sm:text-[18px] text-xs text-[#17251B] text-nowrap">
              Designing & Building Powerful <br />
              Web Experiences.
            </p>
          </div>
        </div>
        <div className="absolute md:block hidden bottom-0 right-0 w-18 h-18">
          <Image
          fill
          src="/assets/hero-section/icons/MouseScroll.svg"
          alt="mouseScroll"
          className="object-contain"
        />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
