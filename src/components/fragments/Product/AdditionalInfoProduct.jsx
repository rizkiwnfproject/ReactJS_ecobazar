import TextCustom from "../../elements/Text/Text";
import InfoOnTab from "./InfoOnTab";

const AdditionalInfoProduct = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-8 mx-auto">
                <table className="col-span-4 table-auto text-left h-[200px]">
                    <tbody >
                        <tr className="h-9 md:h-5">
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
                        <tr className="h-9 md:h-5">
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
                        <tr className="h-9 md:h-5">
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
                        <tr className="h-9 md:h-5">
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
                        <tr className="h-9 md:h-5">
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
                        <tr className="h-9 md:h-5">
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
                <InfoOnTab />
            </div>
        </>
    )
}

export default AdditionalInfoProduct