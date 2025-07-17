import Advantages from "../../fragments/Advantages/Advantages";
import BannerBig from "../../fragments/Banner/BannerBig";
import BannerMedium from "../../fragments/Banner/BannerMedium";
import BannerSmall from "../../fragments/Banner/BannerSmall";

const BannerSection = ({ type }) => {
    if (type === "big") {
        return (
            <BannerBig>
                <Advantages />
            </BannerBig>
        )
    } else if (type === "small") {
        return (
            <BannerSmall />
        )
    } else {
        return (
            <BannerMedium />
        )
    }
}

export default BannerSection