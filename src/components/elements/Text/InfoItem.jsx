import { FlexCenter } from "../Flex/Flex";
import TextCustom from "./Text";

const InfoItem = (props) => {
    const { icon, text, textColor = "text-gray-300" } = props
    return (
        <FlexCenter gap="gap-2">
            <TextCustom type="body_md_400" textColor={textColor}>{icon}</TextCustom>
            <TextCustom type="body_small_400" textColor="text-gray-700">{text}</TextCustom>
        </FlexCenter >
    )
};

export default InfoItem