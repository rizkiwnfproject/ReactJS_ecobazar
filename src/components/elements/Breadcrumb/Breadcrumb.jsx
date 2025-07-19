import { Link, useLocation } from 'react-router';
import { BsHouseDoor } from "react-icons/bs";
import ImageCustom from '../Image/Image'

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <>
        <div className="relative">
            <ImageCustom path='breadcrumbs' image='image_1' name='breadcrumbs' classname='h-20 md:h-auto object-cover object-center' />
            <div className="absolute inset-0 flex items-center justify-start ml-6 md:ml-30">
                <nav className="text-white text-sm ">
                    <ol className="flex space-x-2">
                        <li>
                            <Link to="/" className="hover:underline"><BsHouseDoor size="1.2rem"/></Link>
                        </li>
                        {pathnames.map((value, index) => {
                            const to = "/" + pathnames.slice(0, index + 1).join("/");
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>{'>'}</span>
                                    {isLast ? (
                                        <span className="capitalize">{decodeURIComponent(value)}</span>
                                    ) : (
                                        <Link to={to} className="hover:underline capitalize">
                                            {decodeURIComponent(value)}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
        </>

    )
}

export default Breadcrumb