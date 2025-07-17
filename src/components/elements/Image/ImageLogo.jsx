import TextCustom from '../Text/Text'
import ImageCustom from './Image'
import { FlexCenter } from '../Flex/Flex'

const ImageLogo = () => {
  return (
    <FlexCenter>
      <ImageCustom path="logo" image="logo" name="ecobazar" classname="w-10 h-10" />
      <TextCustom type="heading_5_600">Ecobazar</TextCustom>
    </FlexCenter>
  )
}

export default ImageLogo