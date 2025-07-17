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

const SingleBlog = () => {
    return (
        <>
            <FlexStart classname='flex-col'>
                <FlexStart classname='flex-col'>
                    <ImageCustom path="blog" image="image_4" />
                    <FlexStart classname='flex-col py-6 border-b border-b-gray-100' gap='gap-3'>
                        <FlexStart gap="gap-3">
                            <TextIcon icon={BsTag} text="food" />
                            <TextIcon icon={BsPerson} text={<><span className="text-gray-500">by </span>caroline</>}>
                            </TextIcon>
                            <TextIcon icon={BsChatSquare} text={`190 comments`} />
                        </FlexStart>
                        <TextCustom type="heading_5_500">Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.</TextCustom>
                        <FlexCenter classname='justify-between mt-3'>
                            <IconLabel
                                title="Cameron Williamson"
                                desc={<>4 April, 2021 <span><LuDot size="22px" /></span>6 min read</>}
                                classname="flex items-center"
                                size="w-13 h-13"
                                iconColor="#00B207"
                                path="users"
                                icon="image_1"
                            />
                            <FlexCenter>
                                <Button
                                    typeButton="icon"
                                    hover={true}
                                    bgColor=''
                                    shadow=''
                                    padding=''
                                    classname=""
                                    icon={LuFacebook}
                                    iconSize='22px' />
                                <Button
                                    typeButton="icon"
                                    hover={true}
                                    bgColor=''
                                    shadow=''
                                    padding=''
                                    classname=""
                                    icon={LuTwitter}
                                    iconSize='22px' />
                                <Button
                                    typeButton="icon"
                                    hover={true}
                                    bgColor=''
                                    shadow=''
                                    padding=''
                                    classname=""
                                    icon={FaPinterestP}
                                    iconSize='22px' />
                                <Button
                                    typeButton="icon"
                                    hover={true}
                                    bgColor=''
                                    shadow=''
                                    padding=''
                                    classname=""
                                    icon={FaInstagram}
                                    iconSize='22px' />
                                <Button
                                    typeButton="icon"
                                    hover={true}
                                    bgColor=''
                                    shadow=''
                                    padding=''
                                    classname=""
                                    icon={LuLink2}
                                    iconSize='22px' />
                            </FlexCenter>
                        </FlexCenter>
                    </FlexStart>
                    <FlexStart classname='flex-col py-6' gap='gap-3'>
                        <TextCustom type="body_xl_500">Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</TextCustom>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</TextCustom>
                        <FlexStart classname='justify-between pr-5'>
                            <ImageCustom path="blog" image="image_5" classname="w-[400px] object-cover" />
                            <ImageCustom path="blog" image="image_6" classname="w-[400px] object-cover" />
                        </FlexStart>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</TextCustom>
                        <TextCustom type="body_lg_400" textColor='text-gray-500'>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
                        </TextCustom>
                        <ImageCustom path="banner" image="Bannar_7" classname='pr-5' />
                    </FlexStart>
                    <FlexStart classname='flex-col' gap='gap-4'>
                        <TextCustom type="body_xxl_500" >Leave a Comment</TextCustom>
                        <FlexStart classname='pt-4'>
                            <InputFormFragment label="full name" type="text" name="full_name" placeholder="John" />
                            <InputFormFragment label="email" type="email" name="email" placeholder="example@gmail.com" />
                        </FlexStart>
                        <InputFormFragment label="message" type="textarea" name="message" placeholder="write your message" />
                        <InputCustom
                            label="Save my name and email in this browser for the next time I comment."
                            textColor="text-gray-500"
                            type="checkbox" name="check" 
                            padding=''/>
                        <Button classname="w-1/4" shadow=''><TextCustom type="body_md_600" textColor='text-white'>Post Comments</TextCustom></Button>
                    </FlexStart>
                    <FlexStart classname='flex-col pt-10' gap='gap-4'>
                        <TextCustom type="body_xxl_500" >Comments</TextCustom>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <FlexStart classname='items-start py-6 border-b border-b-gray-100' gap='gap-3'>
                            <ImageCustom path="users" image="image_1" />
                            <FlexStart classname='flex-col' gap='gap-1'>
                                <TextCustom type="body_sm_500" classname="flex items-center">Annette Black
                                    <span><LuDot size="22px" /></span>
                                    <span className='font-normal text-gray-400'>4 April, 2021</span>
                                </TextCustom>
                                <TextCustom type="body_sm_400" textColor='text-gray-600'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</TextCustom>
                            </FlexStart>
                        </FlexStart>
                        <Button typeButton='buttonBasic' classname="w-1/5 border-2 border-green-success" bgColor='bg-white' shadow='' textType='body_md_600' textColor='text-green-success' padding='py-5' label="Load More" />
                    </FlexStart>
                </FlexStart>
            </FlexStart>
        </>
    )
}

export default SingleBlog