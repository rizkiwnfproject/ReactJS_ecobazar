import React from 'react'
import SectionWrapper from '../../fragments/Wrapper/Wrapper'
import AboutFragment from '../../fragments/About/AboutFragment'

const AboutSection = () => {
    return (
        <>
            <SectionWrapper padding='py-15'>
                <AboutFragment type="information-1" />
            </SectionWrapper>
            <AboutFragment type="information-2"  />
            <SectionWrapper padding=''>
                <AboutFragment type="" />
            </SectionWrapper>
        </>
    )
}

export default AboutSection