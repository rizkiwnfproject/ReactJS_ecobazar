import { LuLeaf, LuTicketPercent } from "react-icons/lu"
import ImageCustom from "../../elements/Image/Image";
import IconLabel from "../../elements/Text/IconLabel";

const InfoOnTab = () => {
    return (
        <>
            <div className="md:col-span-4 xl:col-span-3 mt-5 lg:mt-0">
                <div className="flex items-start justify-center xl:justify-end">
                    <ImageCustom path="banner" image="Bannar_9" />
                </div>
                <div className="border border-gray-100 rounded-lg px-4 py-5 mt-5 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between gap-5 xl:gap-0 ">
                    <IconLabel
                        title="64% Discount"
                        desc="Save your 64% money with us"
                        classname="flex items-center"
                        size="2rem"
                        respText="text-sm"
                        iconColor="#00B207"
                        typeTitleText="body_sm_500"
                        typeSubTitleText="body_xs_400"
                        icon={LuTicketPercent}
                        />
                    <IconLabel
                        title="100% Organic"
                        desc="100% Organic Vegetables"
                        classname="flex items-center"
                        respText="text-sm"
                        size="2rem"
                        iconColor="#00B207"
                        typeTitleText="body_sm_500"
                        typeSubTitleText="body_xs_400"
                        icon={LuLeaf}
                    />
                </div>
            </div>
        </>
    )
}

export default InfoOnTab