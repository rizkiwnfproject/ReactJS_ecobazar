import { FaPinterestP, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsFilterRight, BsTruck, BsHeadset, BsBagCheck, BsBoxSeam } from "react-icons/bs";

// Navbar
const navbarData = [
    {
        title: "Shop",
        link: "",
    },
    {
        title: "Pages",
        link: "",
    },
    {
        title: "Blog",
        link: "",
    },
    {
        title: "About Us",
        link: "",
    },
    {
        title: "Contact Us",
        link: "",
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
                link: ""
            },
            {
                name: "Order History",
                link: ""
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
                link: ""
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
                link: ""
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
}