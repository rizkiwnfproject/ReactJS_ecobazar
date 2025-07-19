import { FlexCenter } from "../Flex/Flex";
import TextCustom from "./Text";

const TextIcon = ({
    icon: Icon,
    text,
    textColor = "text-gray-700",
    iconColor = "text-gray-300",
    textType = "body_sm_400",
    iconType = "body_md_400",
    iconSize,
    reverse = false,
    justify,
    alignItems,
    respText = ""
}) => {
    if (reverse) {
        return (
            <FlexCenter gap="gap-2" justify={justify} alignItems={alignItems}>
                <TextCustom type={textType} respText={respText} textColor={textColor}>{text}</TextCustom>
                <TextCustom type={iconType} respText={respText} textColor={iconColor}><Icon size={iconSize} /></TextCustom>
            </FlexCenter >
        )
    } else {
        return (
            <FlexCenter gap="gap-2" justify={justify} alignItems={alignItems}>
                <TextCustom type={iconType} respText={respText} textColor={iconColor}><Icon size={iconSize} /></TextCustom>
                <TextCustom type={textType} respText={respText} textColor={textColor}>{text}</TextCustom>
            </FlexCenter >
        )
    }

};

export default TextIcon