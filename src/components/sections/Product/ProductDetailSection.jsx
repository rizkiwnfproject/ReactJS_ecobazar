import SingleProductView from "../../fragments/Product/SingleProductView";
import TabFragment from "../../fragments/Tabs/TabFragment";
import RelatedProduct from "../../fragments/Product/RelatedProduct";
const ProductDetailSection = () => {

    return (
        <>
            <SingleProductView />
            <div className="max-w-11/12 w-full mx-auto">
                <TabFragment type="product-detail" />
            </div>
            <RelatedProduct />
        </>
    )
}

export default ProductDetailSection