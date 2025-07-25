import { supportData } from '../../../constants/Constant'
import { FlexCenter } from '../../elements/Flex/Flex'
import Grid from '../../elements/Grid/Grid'
import ImageCustom from '../../elements/Image/Image'

const SupportFragment = (props) => {
    const { children } = props
    return (
        <div data-aos="fade-down">
            {children}
        </div>
    )
}

const SupportCompany = () => {
    return (
        <Grid cols="grid-cols-2 md:grid-cols-3 lg:grid-cols-6" gap='gap-5'>
            {supportData.map((data, index) => (
                <div key={index} className="w-full flex items-center justify-center border border-green-50 rounded-lg py-4">
                    <ImageCustom path="supports" image={data.image} name={data.name} />
                </div>
            ))}
        </Grid>
    )
}
SupportFragment.SupportCompany = SupportCompany

export default SupportFragment