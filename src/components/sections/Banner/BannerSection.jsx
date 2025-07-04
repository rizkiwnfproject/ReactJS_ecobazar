import Advantages from "../../fragments/Advantages/Advantages";
import BannerFragment from "../../fragments/Banner/BannerFragment";

const BannerSection = (props) => {
    const { type } = props
    if (type === "big") {
        return (
            <BannerFragment>
                <BannerFragment.BannerBig>
                    <Advantages />
                </BannerFragment.BannerBig>
            </BannerFragment>
        )
    } else if (type === "small") {
        return (
            <BannerFragment>
                <BannerFragment.BannerSmall />
            </BannerFragment>
        )
    } else {
        return (
            <BannerFragment> 
                <BannerFragment.BannerMedium />
            </BannerFragment>
        )
    }
}

export default BannerSection