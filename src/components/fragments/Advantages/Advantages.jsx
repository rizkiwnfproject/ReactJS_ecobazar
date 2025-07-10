import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import { advantageData } from "../../../constants/Constant";
import IconLabel from "../../elements/Text/IconLabel";

const Advantages = () => {
    return (
        <FlexCenter classname="w-full justify-between">
            {advantageData.map((item, idx) => (
                <IconLabel
                    key={idx}
                    icon={item.icon}
                    overlay={item.overlay}
                    title={item.title}
                    desc={item.desc}
                    size="2rem"
                    iconColor="#00B207"
                />
            ))}
        </FlexCenter>
    )
}
export default Advantages