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
            <AboutSecond />
            <SectionWrapper padding=''>
                <AboutThird />
            </SectionWrapper>
        </>
    )
}

export default AboutSection