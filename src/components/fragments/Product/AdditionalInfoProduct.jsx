import { FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";
import InfoOnTab from "./InfoOnTab";

const AdditionalInfoProduct = () => {
    const productDetails = [
        {
            label: "Weight",
            value: "03",
        },
        {
            label: "Color",
            value: "Green",
        },
        {
            label: "Type",
            value: "Organic",
        },
        {
            label: "Category",
            value: "Vegetables",
        },
        {
            label: "Stock Status",
            value: (
                <>
                    Available <span className="text-gray-400">(5,413)</span>
                </>
            ),
        },
        {
            label: "Tags",
            value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
        },
    ];
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-8 mx-auto">
                <FlexStart classname="lg:col-span-4 col-span-5 grid grid-cols-4 items-start h-1/2 ">
                    {productDetails.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="col-span-1">
                                    <TextCustom type="body_sm_400" respText="text-sm">{item.label}</TextCustom>
                                </div>
                                <div key={index} className="col-span-3">
                                    <TextCustom type="body_sm_400" respText="text-sm">: {item.value}</TextCustom>
                                </div>
                            </>
                        )
                    })}
                </FlexStart>
                <InfoOnTab />
            </div>
        </>
    )
}

export default AdditionalInfoProduct