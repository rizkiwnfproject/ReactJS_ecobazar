import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FlexStart } from "../Flex/Flex";

const Rating = ({
    rate,
    fontSize = "text-xs"
}) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <FlexStart gap="gap-0.5" classname={`text-orange-warning ${fontSize}`}>
            {Array.from({ length: fullStars }).map((_, i) => (
                <BsStarFill key={`full-${i}`} />
            ))}

            {hasHalfStar && <BsStarHalf key="half" />}

            {Array.from({ length: emptyStars }).map((_, i) => (
                <BsStar key={`empty-${i}`} className="text-gray-300" />
            ))}
        </FlexStart>
    );
};

export default Rating;