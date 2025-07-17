import FilterFragment, { FilterCategories, FilterRange, FilterRating, FilterRecentlyAdd, FilterSaleProduct, FilterTags, FilterTop } from "../../fragments/Filter/FilterFragment"
import ShopProductFragment from "../../fragments/Product/ShopProductFragment"

const ShopSection = () => {
    return (
        <>
            <div className="">
                <FilterTop options={['Popular', 'Newest']} grid="grid-cols-8" colSpan="col-span-6" marginFilter="mt-34" />
                <div className="grid grid-cols-8 gap-6">
                    <div className="col-span-2">
                        <FilterFragment>
                            <FilterCategories type="" />
                            <FilterRange />
                            <FilterRating />
                            <FilterTags />
                            <FilterSaleProduct />
                        </FilterFragment>
                    </div>
                    <div className="col-span-6">
                        <ShopProductFragment />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection