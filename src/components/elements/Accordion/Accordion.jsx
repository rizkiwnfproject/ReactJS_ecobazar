import { useState } from "react";

const AccordionCustom = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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

    return (
        <div className="space-y-2">
            {faqData.map((faq, index) => (
                <div
                    key={index}
                    tabIndex={0}
                    className={`collapse collapse-plus bg-base-100 border ${activeIndex === index ? "border-green-500" : "border-base-300"
                        }`}
                    onClick={() => toggleAccordion(index)}
                >
                    <div className="collapse-title font-semibold">{faq.title}</div>
                    <div
                        className={`collapse-content text-sm ${activeIndex === index ? "block" : "hidden"
                            }`}
                    >
                        {faq.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionCustom;