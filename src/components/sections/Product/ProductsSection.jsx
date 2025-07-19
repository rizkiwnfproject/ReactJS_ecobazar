import BannerFeature from "../../fragments/Banner/BannerFeature";
import ProductCategories from "../../fragments/Product/ProductCategories";
import ProductFeature, { ProductDeal } from "../../fragments/Product/ProductFeature";
import ProductFragment from "../../fragments/Product/ProductFragment";
import ProductNewest from "../../fragments/Product/ProductNewest";

export const CategoriesProducts = () => {
  return (
    <>
      <ProductFragment classname="relative">
        <ProductCategories
          width="md:w-[77px]"
          gap="gap-4"
          classname="h-50 w-9/10 ml-2 md:ml-0 md:w-50 flex-col justify-center"
        />
      </ProductFragment>
    </>
  );
}

export const FeaturedProducts = () => {
  return (
    <>
      <ProductFragment classname="relative">
        <ProductFeature />
        <ProductDeal>
          <BannerFeature />
        </ProductDeal>
      </ProductFragment>
    </>
  )
}



export const NewestProducts = () => {
  return (
    <>
      <ProductFragment classname="relative">
        <ProductNewest />
      </ProductFragment>
    </>
  )
}

