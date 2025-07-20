import Button from "../../elements/Button/Button"
import { FlexCenter } from "../../elements/Flex/Flex"
import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";
import TextCustom from "../../elements/Text/Text";
import { Link } from "react-router";
import InputCustom from "../../elements/Input/Input";
import ImageLogo from "../../elements/Image/ImageLogo";

const NavbarMiddle = () => {
    return (
        <>
            <Link to="/"><ImageLogo respText="md:text-2xl"/></Link>
            <div className="navbar__middle_search max-w-[498px] lg:w-full relative">
                <InputCustom padding="px-12 py-2 lg:py-3" respText="text-sm" type="text" placeholder="Search" />
                <div className="navbar__middle_icon absolute top-2.5 lg:top-3 xl:top-3.5 left-4">
                    <HiMagnifyingGlass size={"1.5rem"} color="" />
                </div>
                <Button typeButton="input" rounded="rounded-r-lg" height="h-full" padding="px-6" textType="body_sm_600" respText="text-sm" textColor="text-white">search</Button>
            </div >
            <FlexCenter classname="text-green-900">
                <Link to="/user/wishlist">
                    <HiOutlineHeart size={"2rem"} color="#002603" />
                </Link>
                <Link to="/user/shopping-cart" >
                    <FlexCenter>
                        <div className="relative border-l-2 border-l-green-50 px-3 ml-3">
                            <HiOutlineShoppingBag size={"2rem"} color="#002603" />
                            <TextCustom type="span" textColor="text-white" classname="absolute top-0 right-3 bg-[#2C742F] border border-white w-4 h-4 rounded-full text-[10px] text-center ">2</TextCustom>
                        </div>
                        <div className="hidden xl:block">
                            <TextCustom classname="text-[11px]" textColor="text-gray-700">Shopping cart:</TextCustom>
                            <TextCustom type="body_sm_500">$57.00</TextCustom>
                        </div>
                    </FlexCenter>
                </Link>
            </FlexCenter>
        </>
    )
}
export default NavbarMiddle