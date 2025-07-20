import SectionWrapper from '../../fragments/Wrapper/Wrapper'
import AboutFirst from '../../fragments/About/AboutFirst'
import AboutSecond from '../../fragments/About/AboutSecond'
import AboutThird from '../../fragments/About/AboutThird'

const AboutSection = () => {
    return (
        <>
            <SectionWrapper padding='py-15'>
                <AboutFirst />
            </SectionWrapper>
            <SectionWrapper maxWidth='max-w-10/12 md:max-w-screen' padding='pb-15'>
                <AboutSecond />
            </SectionWrapper>
            <SectionWrapper padding=''>
                <AboutThird />
            </SectionWrapper>
        </>
    )
}

export default AboutSection