import FilterFragment, { FilterCategories, FilterRecentlyAdd, FilterSearch, FilterTags, FilterTop } from '../../fragments/Filter/FilterFragment'
import { ListBlogFragment, SingleBlogFragment } from '../../fragments/Blog/BlogFragment'

const BlogSection = ({ type }) => {
    if (type === "list") {
        return (
            <div className="">
                <FilterTop />
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-2">
                        <FilterFragment>
                            <FilterSearch />
                            <FilterCategories />
                            <FilterTags />
                            <FilterRecentlyAdd />
                        </FilterFragment>
                    </div>
                    <div className="col-span-4">
                        <ListBlogFragment />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-4">
                    <SingleBlogFragment />
                </div>
                <div className="col-span-2">
                    <FilterFragment>
                        <FilterSearch />
                        <FilterCategories />
                        <FilterTags />
                        <FilterRecentlyAdd />
                    </FilterFragment>
                </div>
            </div>
        )
    }
}

export default BlogSection