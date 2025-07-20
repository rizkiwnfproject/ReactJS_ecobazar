import FilterFragment, { FilterCategories, FilterRecentlyAdd, FilterSearch, FilterTags } from '../../fragments/Filter/FilterFragment'
import SingleBlog from '../../fragments/Blog/SingleBlog'
import Button from '../../elements/Button/Button'
import { LuSettings2 } from 'react-icons/lu'
import { useRef, useState } from 'react'
import useClickOutside from '../../../hooks/UseClickOutside'

const SingleBlogSection = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const outside = useRef(null)
    useClickOutside(outside, () => setIsFilterOpen(false))
    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative md:static w-full md:w-auto">
            <Button typeButton='textIcon' icon={LuSettings2} padding='px-5 py-2' textColor='text-white' label='Filter' shadow='' classname='w-1/3 block md:hidden' onClick={() => setIsFilterOpen(!isFilterOpen)} />
            <div className=" md:col-span-5">
                <SingleBlog />
            </div>
            <div className={`${isFilterOpen ?  "fixed md:static top-0 left-0 z-1 mt-20 md:mt-0 p-5 md:p-0" : "hidden"} md:block md:col-span-2 bg-white`}>
                <FilterFragment>
                    <FilterSearch toggleOpen={() => setIsFilterOpen(!isFilterOpen)}/>
                    <FilterCategories type="blog" />
                    <FilterTags />
                    <FilterRecentlyAdd />
                </FilterFragment>
            </div>
        </div>
    )
}

export default SingleBlogSection