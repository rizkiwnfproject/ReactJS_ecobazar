import ImageCustom from '../../elements/Image/Image'
import Button from '../../elements/Button/Button'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import TextCustom from '../../elements/Text/Text'
import { BsChatSquare, BsPerson, BsTag } from 'react-icons/bs'
import { LuDot, LuFacebook, LuLink2, LuTwitter } from 'react-icons/lu'
import { FaInstagram, FaPinterestP } from 'react-icons/fa6'
import InputFormFragment from '../Input/InputFormFragment'
import IconLabel from '../../elements/Text/IconLabel'
import TextIcon from '../../elements/Text/TextIcon'
import InputCustom from '../../elements/Input/Input'
import NewsIcon from '../../elements/Text/NewsIcon'
import { footerCopyright } from '../../../constants/Constant'
import Comments from '../../elements/Comments/Comments'

const SingleBlog = () => {
    const icon = footerCopyright.filter(item => item.name === "Icon").flatMap(item => item.data)
    console.log(icon)
    return (
        <>
            <FlexStart classname='flex-col w-full'>
                <FlexStart classname='flex-col'>
                    <ImageCustom path="blog" image="image_4" />
                    <FlexStart classname='flex-col py-6 border-b border-b-gray-100' gap='gap-3'>
                        <NewsIcon comments='190 comments' category='food' writter='carolina' />
                        <TextCustom type="heading_5_500" respText='text-lg'>Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.</TextCustom>
                        <FlexCenter classname='flex-col md:flex-row justify-between mt-3' alignItems='items-start'>
                            <IconLabel
                                title="Cameron Williamson"
                                desc={<>4 April, 2021 <span><LuDot size="22px" /></span>6 min read</>}
                                classname="flex items-center"
                                size="w-13 h-13"
                                iconColor="#00B207"
                                path="users"
                                icon="image_1"
                                respText='text-sm'
                            />
                            <FlexCenter>
                                {icon.map((item, index) => (
                                    <Button
                                        key={index}
                                        typeButton="icon"
                                        hover={true}
                                        bgColor=''
                                        shadow=''
                                        padding=''
                                        classname=""
                                        icon={item.icon}
                                        iconSize='22px' />
                                ))}
                            </FlexCenter>
                        </FlexCenter>
                    </FlexStart>
                    <FlexStart classname='flex-col py-6' gap='gap-3'>
                        <TextCustom type="body_xl_500">Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</TextCustom>
                        <TextCustom type="body_lg_400" respText='text-sm' classname='text-justify md:text-left' textColor='text-gray-500'>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</TextCustom>
                        <FlexStart classname='flex-col md:flex-row justify-center md:justify-between'>
                            <ImageCustom path="blog" image="image_5" classname="w-[400px] object-cover" />
                            <ImageCustom path="blog" image="image_6" classname="w-[400px] object-cover" />
                        </FlexStart>
                        <TextCustom type="body_lg_400" respText='text-sm' classname='text-justify md:text-left' textColor='text-gray-500'>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</TextCustom>
                        <TextCustom type="body_lg_400" respText='text-sm' classname='text-justify md:text-left' textColor='text-gray-500'>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
                        </TextCustom>
                        <ImageCustom path="banner" image="Bannar_7" classname='pr-5' />
                    </FlexStart>
                    <FlexStart classname='flex-col' gap='gap-4'>
                        <TextCustom type="body_xxl_500" respText='text-lg'>Leave a Comment</TextCustom>
                        <FlexStart classname='flex-col md:flex-row pt-4'>
                            <InputFormFragment classname="text-xs md:text-base" respText="text-sm" label="full name" type="text" name="full_name"  placeholder="John" />
                            <InputFormFragment classname="text-xs md:text-base" respText="text-sm" label="email" type="email" name="email" placeholder="example@gmail.com" />
                        </FlexStart>
                        <InputFormFragment classname="text-xs md:text-base" respText="text-sm" label="message" type="textarea" name="message" placeholder="write your message" />
                        <InputCustom
                            label="Save my name and email in this browser for the next time I comment."
                            textColor="text-gray-500"
                            respText="text-xs"
                            alignItems="items-start"
                            type="checkbox" name="check"
                            padding='' />
                        <Button classname="w-1/4" shadow=''><TextCustom type="body_md_600" textColor='text-white'>Post Comments</TextCustom></Button>
                    </FlexStart>
                    <FlexStart classname='flex-col pt-10' gap='gap-4'>
                        <TextCustom type="body_xxl_500" respText='text-lg'>Comments</TextCustom>
                        <Comments />
                    </FlexStart>
                </FlexStart>
            </FlexStart>
        </>
    )
}

export default SingleBlog