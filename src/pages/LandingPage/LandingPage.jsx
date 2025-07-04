import Navbar from "../../components/layouts/Navbar/Navbar"
import News from "../../components/layouts/News/News";
import Testimonials from "../../components/layouts/Testimonials/Testimonials";
import Support from "../../components/layouts/Supports/Support";
import { CategoriesProducts, FeaturedProducts, NewestProducts } from "../../components/layouts/Products/Products";
import Banner from "../../components/layouts/Banner/Banner";
import SectionWrapper from "../../components/fragments/Wrapper/Wrapper";

const LandingPage = () => {
  return (
    <>
      <SectionWrapper maxWidth="max-w-11/12" padding="pt-0">
        <Banner type="big" />
      </SectionWrapper>

      <SectionWrapper classname="mt-5">
        <FeaturedProducts />
      </SectionWrapper>

      <SectionWrapper maxWidth="max-w-11/12">
        <CategoriesProducts />
      </SectionWrapper>

      <SectionWrapper>
        <Banner type="small" />
      </SectionWrapper>

      <SectionWrapper>
        <NewestProducts />
      </SectionWrapper>

      <SectionWrapper>
        <Banner type="medium" />
      </SectionWrapper>

      <SectionWrapper>
        <News />
      </SectionWrapper>

      <SectionWrapper bg="bg-green-50" padding="py-10" classname="h-[400
      .px]">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper padding="py-15">
        <Support />
      </SectionWrapper>
    </>
  )
}

export default LandingPage