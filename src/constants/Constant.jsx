import { FaPinterestP, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsFilterRight, BsTruck, BsHeadset, BsBagCheck, BsBoxSeam, BsGrid1X2Fill, BsArrowRepeat, BsHeart, BsHandbag, BsGear, BsBoxArrowRight } from "react-icons/bs";
import { LuHeadset, LuLeaf, LuPackage, LuShoppingBag, LuStar, LuTruck } from "react-icons/lu";

// Navbar
const navbarData = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/shop",
    },
    {
        title: "Pages",
        link: "/pages",
    },
    {
        title: "Blog",
        link: "/blog",
    },
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
    },
]

// Banner
const bannerData = [
    {
        name: "discount-1",
        image: "Bannar_3",
        title: "Sale of the Month",
        subtitle: "Best Deals",
        text: "",
        span: "",
        link: ""
    },
    {
        name: "discount-2",
        image: "Bannar_4",
        title: "Low-Fat Meat",
        subtitle: "85% Fat Free",
        text: "Started at",
        span: "$79.99",
        link: ""
    },
    {
        name: "discount-3",
        image: "Bannar_5",
        title: "100% Fresh Fruit",
        subtitle: "Summer Sale",
        text: "up to",
        span: "64% OFF",
        link: ""
    },
]

const countdownData = [
    { value: "00", label: "Days" },
    { value: "02", label: "Hours" },
    { value: "18", label: "Mins" },
    { value: "46", label: "Secs" },
];

// Products
const productsData = [
    {
        image: "image_1",
        name: "Green Apple",
        new: true,
        category: "hot_deals",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_2",
        name: "Chanise Cabbage",
        new: true,
        category: "",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_3",
        name: "Green Lettuce",
        new: true,
        category: "hot_deals",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_4",
        name: "Paprika",
        new: true,
        category: "",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_5",
        name: "Corn",
        new: true,
        category: "top_rated",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_6",
        name: "Eggplant",
        new: false,
        category: "best_sellers",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_7",
        name: "Indian Malta",
        new: false,
        category: "hot_deals",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_8",
        name: "Fresh cauliflower",
        new: false,
        category: "top_rated",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_9",
        name: "Red Tomatos",
        new: false,
        category: "best_sellers",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_10",
        name: "Fresh Mango",
        new: false,
        category: "hot_deals",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_11",
        name: "Green Chili",
        new: false,
        category: "hot_deals",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_12",
        name: "Big Potatos",
        new: false,
        category: "top_rated",
        price: 14.99,
        rate: 4
    },
    {
        image: "image_3",
        name: "Red Capsicum",
        new: false,
        category: "best_sellers",
        price: 14.99,
        rate: 4
    },
]

// Categories
const categoriesData = [
    { image: "image_1", name: "vegetables", product: 165 },
    { image: "image_2", name: "fresh fruit", product: 137 },
    { image: "image_3", name: "river fish", product: 34 },
    { image: "image_4", name: "meat", product: 165 },
    { image: "image_5", name: "Water and Drinks", product: 48 },
    { image: "image_6", name: "Snacks", product: 165 },
    { image: "image_1", name: "vegetables", product: 165 },
    { image: "image_2", name: "fresh fruit", product: 137 },
    { image: "image_3", name: "river fish", product: 34 },
    { image: "image_4", name: "meat", product: 165 },
    { image: "image_5", name: "Water and Drinks", product: 48 },
    { image: "image_6", name: "Snacks", product: 165 },
];

// news
const newsData = [
    {
        image: "image_1",
        date: {
            day: 18,
            month: "Nov",
        },
        category: "Food",
        user: "admin",
        comments: 100,
        title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
        image: "image_2",
        date: {
            day: 29,
            month: "Jan",
        },
        category: "Food",
        user: "admin",
        comments: 89,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_3",
        date: {
            day: 14,
            month: "Feb",
        },
        category: "Food",
        user: "admin",
        comments: 60,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_1",
        date: {
            day: 18,
            month: "Nov",
        },
        category: "Food",
        user: "admin",
        comments: 100,
        title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
        image: "image_2",
        date: {
            day: 29,
            month: "Jan",
        },
        category: "Food",
        user: "admin",
        comments: 89,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_3",
        date: {
            day: 14,
            month: "Feb",
        },
        category: "Food",
        user: "admin",
        comments: 60,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_1",
        date: {
            day: 18,
            month: "Nov",
        },
        category: "Food",
        user: "admin",
        comments: 100,
        title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
        image: "image_2",
        date: {
            day: 29,
            month: "Jan",
        },
        category: "Food",
        user: "admin",
        comments: 89,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_3",
        date: {
            day: 14,
            month: "Feb",
        },
        category: "Food",
        user: "admin",
        comments: 60,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
        image: "image_1",
        date: {
            day: 18,
            month: "Nov",
        },
        category: "Food",
        user: "admin",
        comments: 100,
        title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
]

// Testimonials
const testimonialsData = [
    {
        image: "image_1",
        name: "robert fox",
        role: "customer",
        rating: 5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
    },
    {
        image: "image_2",
        name: "Dianne Russell",
        role: "customer",
        rating: 4.5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
    },
    {
        image: "image_3",
        name: "Eleanor Pena",
        role: "customer",
        rating: 3,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
    },
    {
        image: "image_1",
        name: "skibidi",
        role: "customer",
        rating: 2.5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
    },
];

// Support
const supportData = [
    {
        image: "image_1",
        name: "steps"
    },
    {
        image: "image_2",
        name: "mango"
    },
    {
        image: "image_3",
        name: "food network"
    },
    {
        image: "image_4",
        name: "food.co.uk"
    },
    {
        image: "image_5",
        name: "book-off"
    },
    {
        image: "image_6",
        name: "g-series"
    },
]

// Footer
const footerData = [
    {
        name: "My Account",
        data: [
            {
                name: "My Account",
                link: "/user/dashboard"
            },
            {
                name: "Order History",
                link: "/user/order-history"
            },
            {
                name: "Shoping Cart",
                link: ""
            },
            {
                name: "Wishlist",
                link: ""
            },
            {
                name: "Settings",
                link: "/user/settings"
            },
        ]
    },
    {
        name: "Helps",
        data: [
            {
                name: "Contact",
                link: ""
            },
            {
                name: "Faqs",
                link: "/faqs"
            },
            {
                name: "Terms & Condition",
                link: ""
            },
            {
                name: "Privacy Policy",
                link: ""
            },
        ]
    },
    {
        name: "Proxy",
        data: [
            {
                name: "About",
                link: ""
            },
            {
                name: "Shop",
                link: ""
            },
            {
                name: "Product",
                link: ""
            },
            {
                name: "Products Details",
                link: ""
            },
            {
                name: "Track Order",
                link: ""
            },
        ]
    },
]

// Footer Copyright
const footerCopyright = [
    {
        name: "Icon",
        data: [
            {
                icon: <FaFacebookF />
            },
            {
                icon: <FaXTwitter />
            },
            {
                icon: <FaPinterestP />
            },
            {
                icon: <FaInstagram />
            },
        ]
    },
    {
        name: "Payment",
        data: [
            {
                image: "image_3"
            },
            {
                image: "image_4"
            },
            {
                image: "image_5"
            },
            {
                image: "image_6"
            },
            {
                image: "image_7"
            },
        ]
    }
]

// Advantage
const advantageData = [
    {
        icon: BsTruck,
        overlay: BsFilterRight,
        title: "Free Shipping",
        desc: "Free shipping on all your order"
    },
    {
        icon: BsHeadset,
        title: "Customer Support 24/7",
        desc: "Instant access to Support"
    },
    {
        icon: BsBagCheck,
        title: "100% Secure Payment",
        desc: "We ensure your money is save"
    },
    {
        icon: BsBoxSeam,
        title: "Money-Back Guarantee",
        desc: "30 Days Money-Back Guarantee"
    }
];

// Sidebar User
const sidebarData = [
    {
        name: "dashboard",
        icon: <BsGrid1X2Fill />,
        link: "dashboard"
    },
    {
        name: "order history",
        icon: <BsArrowRepeat />,
        link: "order-history"
    },
    {
        name: "wishlist",
        icon: <BsHeart />,
        link: "wishlist"
    },
    {
        name: "shopping cart",
        icon: <BsHandbag />,
        link: "shopping-cart"
    },
    {
        name: "settings",
        icon: <BsGear />,
        link: "settings"
    },
    {
        name: "log-out",
        icon: <BsBoxArrowRight />,
        link: "log-out"
    },
]

const tableThead = [
    {
        title: "Order History",
        element: [
            {
                name: "order id",
            },
            {
                name: "date",
            },
            {
                name: "total",
            },
            {
                name: "status",
            },
            {
                name: "",
            },
        ]
    },
    {
        title: "Order Details",
        element: [
            {
                name: "product",
            },
            {
                name: "price",
            },
            {
                name: "quantity",
            },
            {
                name: "subtotal",
            },
        ]
    },
]

const dashboardHistoryOrder = [
    { id: '#738', date: '8 Sep, 2020', total: '$135.00', products: 5, status: 'Processing' },
    { id: '#703', date: '24 May, 2020', total: '$25.00', products: 1, status: 'On the way' },
    { id: '#130', date: '22 Oct, 2020', total: '$250.00', products: 4, status: 'Completed' },
    { id: '#561', date: '1 Feb, 2020', total: '$35.00', products: 1, status: 'Completed' },
    { id: '#536', date: '21 Sep, 2020', total: '$578.00', products: 13, status: 'Completed' },
    { id: '#492', date: '22 Oct, 2020', total: '$345.00', products: 7, status: 'Completed' },
];

const historyOrder = [
    { id: '#738', date: '8 Sep, 2020', total: '$135.00', products: 5, status: 'Processing' },
    { id: '#703', date: '24 May, 2020', total: '$25.00', products: 1, status: 'On the way' },
    { id: '#130', date: '22 Oct, 2020', total: '$250.00', products: 4, status: 'Completed' },
    { id: '#561', date: '1 Feb, 2020', total: '$35.00', products: 1, status: 'Completed' },
    { id: '#536', date: '21 Sep, 2020', total: '$578.00', products: 13, status: 'Completed' },
    { id: '#492', date: '22 Oct, 2020', total: '$345.00', products: 7, status: 'Completed' },
    { id: '#738', date: '8 Sep, 2020', total: '$135.00', products: 5, status: 'Processing' },
    { id: '#703', date: '24 May, 2020', total: '$25.00', products: 1, status: 'On the way' },
    { id: '#130', date: '22 Oct, 2020', total: '$250.00', products: 4, status: 'Completed' },
    { id: '#561', date: '1 Feb, 2020', total: '$35.00', products: 1, status: 'Completed' },
    { id: '#536', date: '21 Sep, 2020', total: '$578.00', products: 13, status: 'Completed' },
    { id: '#492', date: '22 Oct, 2020', total: '$345.00', products: 7, status: 'Completed' },
];

const detailOrderItems = [
    {
        id: 1,
        name: "Red Capsicum",
        image: "image_1",
        price: 14.0,
        quantity: 5,
        subtotal: 14.0 * 5,
    },
    {
        id: 2,
        name: "Green Capsicum",
        image: "image_2",
        price: 14.0,
        quantity: 2,
        subtotal: 14.0 * 2,
    },
    {
        id: 3,
        name: "Green Chili",
        image: "image_3",
        price: 26.7,
        quantity: 10,
        subtotal: 26.7 * 10,
    },
];

const stepsOrder = [
    { label: "Order received", number: "01" },
    { label: "Processing", number: "02" },
    { label: "On the way", number: "03" },
    { label: "Delivered", number: "04" },
];

const faqData = [
    {
        title: "In elementum est a ante sodales iaculis.",
        content:
            "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros...",
    },
    {
        title: "Etiam lobortis massa eu nibh tempor elementum.",
        content: "Isi jawaban kedua...",
    },
    {
        title: "Aenean quis quam nec lacus semper dignissim.",
        content: "Isi jawaban ketiga...",
    },
    {
        title: "Nulla tincidunt eros id tempus accumsan.",
        content: "Isi jawaban keempat...",
    },
];

const teamData = [
    {
        name: "Jenny Wilson",
        role: "CEO & Founder",
        image: "image_1",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Jane Cooper",
        role: "Worker",
        image: "image_2",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Cody Fisher",
        role: "Security Guard",
        image: "image_3",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Robert Fox",
        role: "Senior Farmer Manager",
        image: "image_4",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Jane Cooper",
        role: "Worker",
        image: "image_2",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Cody Fisher",
        role: "Security Guard",
        image: "image_3",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
    {
        name: "Robert Fox",
        role: "Senior Farmer Manager",
        image: "image_4",
        social: {
            facebook: "#",
            twitter: "#",
            pinterest: "#",
            instagram: "#",
        },
    },
]

const blogTagCategories = [
    { id: 1, name: "Healthy" },
    { id: 2, name: "Low fat" },
    { id: 3, name: "Vegetarian" },
    { id: 4, name: "Bread" },
    { id: 5, name: "Kid foods" },
    { id: 6, name: "Vitamins" },
    { id: 7, name: "Snacks" },
    { id: 8, name: "Tiffin" },
    { id: 9, name: "Meat" },
    { id: 10, name: "Launch" },
    { id: 11, name: "Dinner" }
]
const filterTopCategories = [
    { name: "Fresh Fruit", count: 150 },
    { name: "Vegetables", count: 54 },
    { name: "Cooking", count: 47 },
    { name: "Snacks", count: 43 },
    { name: "Beverages", count: 38 },
    { name: "Beauty & Health", count: 134 },
    { name: "Bread & Bakery", count: 15 },
];

const iconAboutPage = [
    {
        title: "100% Organic food",
        desc: "100% healthy & Fresh food.",
        icon: LuLeaf,
    },
    {
        title: "Great Support 24/7",
        desc: "Instant access to Contact",
        icon: LuHeadset,
    },
    {
        title: "Customer Feedback",
        desc: "Our happy customer",
        icon: LuStar,
    },
    {
        title: "100% Sucure Payment",
        desc: "We ensure your money is save",
        icon: LuShoppingBag,
    },
    {
        title: "Free Shipping",
        desc: "Free shipping with discount",
        icon: LuTruck,
    },
    {
        title: "100% Organic Food",
        desc: "100% healthy & Fresh food.",
        icon: LuPackage,
    },
];
export {
    navbarData,
    countdownData,
    bannerData,
    footerCopyright,
    footerData,
    categoriesData,
    productsData,
    testimonialsData,
    newsData,
    supportData,
    advantageData,
    sidebarData,
    dashboardHistoryOrder,
    tableThead,
    historyOrder,
    detailOrderItems,
    stepsOrder,
    faqData,
    teamData,
    blogTagCategories,
    filterTopCategories,
    iconAboutPage
}