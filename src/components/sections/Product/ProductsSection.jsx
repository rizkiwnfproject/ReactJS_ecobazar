import BannerFragment from "../../fragments/Banner/BannerFragment";
import ProductFragment from "../../fragments/Product/ProductFragment";

export const CategoriesProducts = () => {
  return (
    <>
      <ProductFragment classname="relative">
        <ProductFragment.ProductCategories
          width="w-[77px]"
          gap="gap-4"
          classname="h-50 w-50 flex-col justify-center"
        />
      </ProductFragment>
    </>
  );
}

export const FeaturedProducts = () => {
  return (
    <>
      <ProductFragment classname="relative">
        <ProductFragment.ProductFeature />
        <ProductFragment.ProductDeal>
          <BannerFragment>
            <BannerFragment.BannerSmallest/>
          </BannerFragment>
        </ProductFragment.ProductDeal>
      </ProductFragment>
    </>
  )
}



export const NewestProducts = () => {
  return (
    <>
      <ProductFragment classname="relative mt-8">
        <ProductFragment.ProductNewest />
      </ProductFragment>
    </>
  )
}

