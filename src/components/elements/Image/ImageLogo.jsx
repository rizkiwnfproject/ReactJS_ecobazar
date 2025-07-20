import TextCustom from '../Text/Text'
import ImageCustom from './Image'
import { FlexCenter } from '../Flex/Flex'

const ImageLogo = ({textColor, respText}) => {
  return (
    <FlexCenter>
      <ImageCustom path="logo" image="logo" name="ecobazar" classname="w-10 md:w-8 lg:w-10 xl:h-10" />
      <TextCustom type="heading_5_600" respText={respText} textColor={textColor}>Ecobazar</TextCustom>
    </FlexCenter>
  )
}

export default ImageLogo