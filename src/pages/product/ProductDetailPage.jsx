
import RelatedProduct from "../../components/fragments/Product/RelatedProduct";
import SectionWrapper from "../../components/fragments/Wrapper/Wrapper";
import ProductDetailSection from "../../components/sections/Product/ProductDetailSection";

const ProductDetailPage = () => {
    return (
        <>
            <SectionWrapper maxWidth="max-w-screen md:max-w-11/12 " classname="w-full" padding="md:py-15">
                <ProductDetailSection />
            </SectionWrapper>
            <SectionWrapper padding="pb-15">
                <RelatedProduct />
            </SectionWrapper>

        </>
    )
}

export default ProductDetailPage