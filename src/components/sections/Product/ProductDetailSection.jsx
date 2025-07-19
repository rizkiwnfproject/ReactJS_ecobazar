import SingleProductView from "../../fragments/Product/SingleProductView";
import TabFragment from "../../fragments/Tabs/TabFragment";
const ProductDetailSection = () => {

    return (
        <>
            <SingleProductView />
            <div className="w-full mx-auto">
                <TabFragment type="product-detail" />
            </div>
        </>
    )
}

export default ProductDetailSection