import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import { advantageData } from "../../../constants/Constant";
import IconLabel from "../../elements/Text/IconLabel";

const Advantages = () => {
    return (
        // <FlexCenter classname="flex-col md:flex-row" alignItems="items-start md:items-center" width="w-full" justify="justify-between">

        // </FlexCenter>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 w-full mx-auto">
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
                    margin={`mb-4 xl:mb-0 w-full ${index === advantageData.length - 1 ? "" : "sm:border-b border-b-gray-50 sm:pb-5 md:pb-0 md:border-0"}`}
                />
            ))}
        </div>
    )
}
export default Advantages