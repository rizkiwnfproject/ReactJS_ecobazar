import { LuLeaf, LuTicketPercent } from "react-icons/lu";
import ImageCustom from "../../elements/Image/Image";
import TextCustom from "../../elements/Text/Text";
import IconLabel from "../../elements/Text/IconLabel";

const AdditionalInfoProduct = () => {
    return (
        <>
            <div className="grid grid-cols-8 max-w-10/12 mx-auto">
                <table className="col-span-4 table-auto text-left max-w-full h-[200px]">
                    <tbody >
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Weight:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    03
                                </TextCustom>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Color:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    Green
                                </TextCustom>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Type:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    Organic
                                </TextCustom>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Category:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    Vegetables
                                </TextCustom>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Stock Status:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    Available <span className="text-gray-400">(5,413)</span>
                                </TextCustom>
                            </td>
                        </tr>
                        <tr className="h-5">
                            <td className="">
                                <TextCustom type="body_sm_400" classname="pr-4">
                                    Tags:
                                </TextCustom>
                            </td>
                            <td>
                                <TextCustom type="body_sm_400" textColor="text-gray-600">
                                    Vegetables, Healthy, Chinese, Cabbage, Green Cabbage
                                </TextCustom>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className=""></div>
                <div className="col-span-3">
                    <div className="flex items-start justify-end">
                        <ImageCustom path="banner" image="Bannar_9" />
                    </div>
                    <div className="border border-gray-100 rounded-lg px-4 py-5 mt-5 flex justify-between">
                        <IconLabel
                            title="64% Discount"
                            desc="Save your 64% money with us"
                            classname="flex items-center"
                            size="2rem"
                            iconColor="#00B207"
                            typeTitleText="body_sm_500"
                            typeSubTitleText="body_xs_400"
                            icon={LuTicketPercent}
                        />
                        <IconLabel
                            title="100% Organic"
                            desc="100% Organic Vegetables"
                            classname="flex items-center"
                            size="2rem"
                            iconColor="#00B207"
                            typeTitleText="body_sm_500"
                            typeSubTitleText="body_xs_400"
                            icon={LuLeaf}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdditionalInfoProduct