import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import { advantageData } from "../../../constants/Constant";

const Advantages = () => {
    return (
        <FlexCenter classname="w-full justify-between">
            {advantageData.map((item, idx) => (
                <AdvantadesItem
                    key={idx}
                    icon={item.icon}
                    overlay={item.overlay}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </FlexCenter>
    )
}

const AdvantadesItem = (props) => {
    const { icon: Icon, overlay: Overlay, title, desc } = props
    return (
        <FlexCenter gap="gap-3" classname="relative">
            <Icon size="2rem" color="#00B207" />
            {Overlay && (
                <div className="absolute left-[-6px] top-3">
                    <Overlay size="1.2rem" color="#00B207" />
                </div>
            )}
            <FlexStart classname="flex-col" gap="gap-1">
                <TextCustom type="body_md_600">{title}</TextCustom>
                <TextCustom type="body_sm_400" textColor="text-gray-400">{desc}</TextCustom>
            </FlexStart>
        </FlexCenter>
    )
};

export default Advantages