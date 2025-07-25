import { useEffect } from "react"
import SectionWrapper from "../../components/fragments/Wrapper/Wrapper"
import Banner from "../../components/sections/Banner/BannerSection"
import NewsSection from "../../components/sections/News/NewsSection"
import { CategoriesProducts, FeaturedProducts, NewestProducts } from "../../components/sections/Product/ProductsSection"
import SupportSection from "../../components/sections/Support/SupportSection"
import TestimonialSection from "../../components/sections/Testimonial/TestimonialSection"
import ModalNewsLetter from "../../components/elements/Modal/ModalNewsLetter"
import AOS from "aos";
import "aos/dist/aos.css";


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });

    const modal = document.getElementById("newsletter");
    if (modal) modal.showModal();
  }, []);

  return (
    <>
      <ModalNewsLetter />
      <SectionWrapper maxWidth="max-w-11/12" padding="pt-24 md:pt-56">
        <Banner type="big" />
      </SectionWrapper>

      <SectionWrapper classname="mt-5">
        <FeaturedProducts />
      </SectionWrapper>

      <SectionWrapper maxWidth="max-w-11/12" padding="xl:py-15">
        <CategoriesProducts />
      </SectionWrapper>

      <SectionWrapper>
        <Banner type="small" />
      </SectionWrapper>

      <SectionWrapper padding="xl:py-15">
        <NewestProducts />
      </SectionWrapper>

      <SectionWrapper >
        <Banner type="medium" />
      </SectionWrapper>

      <SectionWrapper padding="md:py-15">
        <NewsSection />
      </SectionWrapper>

      <SectionWrapper bgColor="bg-green-50" padding="py-10" classname="h-[400
      .px]">
        <TestimonialSection />
      </SectionWrapper>

      <SectionWrapper>
        <SupportSection />
      </SectionWrapper>
    </>
  )
}

export default LandingPage