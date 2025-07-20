import SectionWrapper from "../../components/fragments/Wrapper/Wrapper"
import AboutSection from "../../components/sections/About/AboutSection"
import SupportSection from "../../components/sections/Support/SupportSection"
import TeamSection from "../../components/sections/Team/TeamSection"
import TestimonialSection from "../../components/sections/Testimonial/TestimonialSection"

const AboutPage = () => {
    return (
        <>
            <SectionWrapper maxWidth="max-w-screen" padding="">
                <AboutSection />
            </SectionWrapper>
            <SectionWrapper bgColor="bg-linear-to-b from-[#F2F2F2] to-white" padding="py-10" maxWidth="max-w-11/12">
                <TeamSection />
            </SectionWrapper>
            <SectionWrapper bgColor="bg-gray-50" padding="py-10">
                <TestimonialSection />
            </SectionWrapper>
            <SectionWrapper>
                <SupportSection />
            </SectionWrapper>
        </>
    )
}

export default AboutPage