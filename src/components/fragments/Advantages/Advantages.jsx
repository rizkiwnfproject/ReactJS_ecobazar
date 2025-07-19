import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import { advantageData } from "../../../constants/Constant";
import IconLabel from "../../elements/Text/IconLabel";

const Advantages = () => {
    return (
        <FlexCenter classname="flex-col md:flex-row" alignItems="items-start md:items-center" width="w-full" justify="justify-between">
            {advantageData.map((item, index) => (
                <IconLabel
                    key={index}
                    icon={item.icon}
                    overlay={item.overlay}
                    title={item.title}
                    desc={item.desc}
                    size="2rem"
                    respText="text-sm"
                    iconColor="#00B207"
                    margin={`mb-4 w-full ${index === advantageData.length - 1 ? "" : "border-b border-b-gray-50 pb-5"}`}
                />
            ))}
        </FlexCenter>
    )
}
export default Advantages