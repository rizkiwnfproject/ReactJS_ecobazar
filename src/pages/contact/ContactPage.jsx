import LeafletMap from "../../components/elements/Map/LeafletMap"
import ContactFragment from "../../components/fragments/Contact/ContactFragment"
import SectionWrapper from "../../components/fragments/Wrapper/Wrapper"

const ContactPage = () => {
    return (
        <>
            <SectionWrapper padding="py-15">
                <ContactFragment />
            </SectionWrapper>
            <LeafletMap />
        </>
    )
}

export default ContactPage