import { FlexCenter, FlexStart } from "../Flex/Flex"
import ImageCustom from "../Image/Image"
import TextCustom from "./Text"

const IconLabel = ({
    icon: Icon,
    overlay: Overlay,
    title = "",
    desc = "",
    path = "",
    size = "",
    iconColor = "",
    iconClassname = "",
    classname = "",
    typeTitleText = "body_md_600",
    typeSubTitleText = "body_sm_400"
}) => {
    return (
        <FlexCenter gap="gap-3" classname="relative">
            {typeof Icon === 'function' ? (
                <div className={iconClassname}>
                    <Icon size={size} color={iconColor} />
                </div>
            ) : (
                <ImageCustom path={path} image={Icon} classname={size} />
            )}

            {Overlay && (
                <div className="absolute left-[-6px] top-3">
                    <Overlay size="1.2rem" color="#00B207" />
                </div>
            )}

            <FlexStart classname="flex-col" gap="gap-1">
                <TextCustom type={typeTitleText}>{title}</TextCustom>
                <TextCustom type={typeSubTitleText} textColor="text-gray-400" classname={classname}>
                    {desc}
                </TextCustom>
            </FlexStart>
        </FlexCenter>
    )
}

export default IconLabel
