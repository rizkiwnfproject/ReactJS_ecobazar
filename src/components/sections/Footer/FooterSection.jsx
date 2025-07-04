import FooterFragment from "../../fragments/Footer/FooterFragment"

const FooterSection = () => {
  return (
    <>
      <FooterFragment classname="bg-gray-50" >
        <FooterFragment.FooterTop />
      </FooterFragment>
      <FooterFragment classname="bg-gray-900" >
        <FooterFragment.FooterBottom />
      </FooterFragment>
      <FooterFragment padding="py-0" classname="bg-gray-900" >
        <FooterFragment.FooterCopyright />
      </FooterFragment>
    </>
  )
}

export default FooterSection