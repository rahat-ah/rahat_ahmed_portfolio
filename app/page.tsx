import AboutSkillSection from "@/components/aboutSkillSection";
import ContactSection from "@/components/contactSection";
import FooterSection from "@/components/footerSection";
import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import ProjectSection from "@/components/projectSection";
import ServiceSection from "@/components/serviceSection";

export default function Home() {
  return (
    <>
    {/* header section start here */}
    <HeaderSection />
    {/* <!-- header section end here --> */}

    <main className="main m-0!">
      {/* <!-- hero section start here --> */}
      <HeroSection />
      {/* <!-- hero section end here --> */}

      {/* <!-- about and skill section start here --> */}
      <AboutSkillSection />
      {/* <!-- about and skill end start here --> */}

      {/* <!-- projects section start here --> */}
      {/* <ProjectSection /> */}
      {/* <!-- projects section end here --> */}

      {/* <!-- services section start here --> */}
      {/* <ServiceSection /> */}
      {/* <!-- services section end here --> */}

      {/* <!-- contacts section start here --> */}
      {/* <ContactSection /> */}
       {/* contacts section end here  */}

    </main>
     {/* <!-- footer section start here --> */}
      {/* <FooterSection /> */}
      {/* <!-- footer section end here --> */}
    </>
  );
}
