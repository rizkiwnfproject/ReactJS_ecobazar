import FilterFragment, { FilterCategories, FilterRecentlyAdd, FilterSearch, FilterTags, FilterTop } from '../../fragments/Filter/FilterFragment'
import SingleBlog from '../../fragments/Blog/SingleBlog'
import ListBlog from '../../fragments/Blog/ListBlog'

const BlogSection = ({ type }) => {
    if (type === "list") {
        return (
            <div className="">
                <FilterTop options={["latest", "oldest", "A → Z"]} marginFilter="mt-44" />
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-2">
                        <FilterFragment>
                            <FilterSearch />
                            <FilterCategories type="blog" />
                            <FilterTags />
                            <FilterRecentlyAdd />
                        </FilterFragment>
                    </div>
                    <div className="col-span-4">
                        <ListBlog />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-7 gap-6">
                <div className="col-span-5">
                    <SingleBlog />
                </div>
                <div className="col-span-2">
                    <FilterFragment>
                        <FilterSearch />
                        <FilterCategories type="blog" />
                        <FilterTags />
                        <FilterRecentlyAdd />
                    </FilterFragment>
                </div>
            </div>
        )
    }
}

export default BlogSection