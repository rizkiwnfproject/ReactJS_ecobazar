import TabsCustom from "../../elements/Tabs/TabsCustom";
import AdditionalInfoProduct from "../Product/AdditionalInfoProduct";
import DescriptionProduct from "../Product/DescriptionProduct";
import FeedbackProduct from "../Product/FeedbackProduct";

const TabFragment = ({ type }) => {
    const detailProductTabs = [
        { label: "Descriptions", content: <DescriptionProduct /> },
        { label: "Additional Information", content: <AdditionalInfoProduct /> },
        { label: "Customer Feedback", content: <FeedbackProduct /> },
    ];

    if (type === "product-detail") {
        return (
            <TabsCustom tabs={detailProductTabs} />
        )
    }
}

export default TabFragment