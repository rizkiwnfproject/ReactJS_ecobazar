import FilterFragment, { FilterCategories, FilterRecentlyAdd, FilterSearch, FilterTags, FilterTop } from '../../fragments/Filter/FilterFragment'
import SingleBlog from '../../fragments/Blog/SingleBlog'
import ListBlog from '../../fragments/Blog/ListBlog'
import { useRef, useState } from 'react';
import useClickOutside from '../../../hooks/UseClickOutside';

const ListBlogSection = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const outside = useRef(null)
    useClickOutside(outside, () => setIsFilterOpen(false))
    return (
        <div className="w-full" ref={outside}>
            <FilterTop toggleOpen={() => setIsFilterOpen(!isFilterOpen)} options={["latest", "oldest", "A → Z"]} marginFilter="mt-44" />
            <div className="grid md:grid-cols-6 gap-6 relative md:static w-full md:w-auto">
                <div className={`${isFilterOpen ? "fixed md:static top-0 left-0 z-1 mt-20 md:mt-0 p-5 md:p-0" : "hidden"} md:col-span-2 bg-white`}>
                    <FilterFragment>
                        <FilterSearch toggleOpen={() => setIsFilterOpen(!isFilterOpen)}/>
                        <FilterCategories type="blog" />
                        <FilterTags />
                        <FilterRecentlyAdd />
                    </FilterFragment>
                </div>
                <div className={`${isFilterOpen ? "md:col-span-4" : "md:col-span-6"}`}>
                    <ListBlog isFilterOpen={isFilterOpen}/>
                </div>
            </div>
        </div>
    )
}

export default ListBlogSection