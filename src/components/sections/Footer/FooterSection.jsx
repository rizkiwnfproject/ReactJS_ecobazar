import FooterBottom from "../../fragments/Footer/FooterBottom"
import FooterFragment from "../../fragments/Footer/FooterFragment"
import FooterMiddle from "../../fragments/Footer/FooterMiddle"
import FooterTop from "../../fragments/Footer/FooterTop"

const FooterSection = () => {
  return (
    <>
      <FooterFragment classname="bg-gray-50" >
        <FooterTop />
      </FooterFragment>
      <FooterFragment classname="bg-gray-900" >
        <FooterMiddle />
      </FooterFragment>
      <FooterFragment padding="py-0" classname="bg-gray-900" >
        <FooterBottom />
      </FooterFragment>
    </>
  )
}

export default FooterSection