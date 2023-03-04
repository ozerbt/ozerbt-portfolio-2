import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    peel9,
    vue,
    sql,
    angular,
    mongodb,
    python,
    figma,
    itsc,
    peel9img,
    osdp,
    nathan,
    yumar,
    pni,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "UI/UX",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Avid Learner",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Fullstack Web Developer",
        company_name: "Peel9",
        icon: peel9,
        iconBg: "#383E56",
        date: "Aug 2019 - Mar 2021",
        points: [
            " Facilitated the design and implementation of a speech navigation system using Express, MySQL, and jQuery to help officers stay alert when travelling in high-risk areas, increasing user safety by 60%.",
            "Integrated call management systems, allowing officers to see incoming non-emergency phone calls in one place, which resulted in a 23% increase in user engagement.",
            "Collaborated with 5+ departments and local government to ensure that software is compliant with the latest CJIS policies, exhibiting excellent collaboration skills.",
            "Led a complete design overhaul of the entire application and utilized common design systems to uplift the legacy look of the application, resulting in a more simplified user experience.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Place Network Investigations",
        icon: pni,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Created wireframes and mock designs using industry-standard design patterns, which resulted in a 30% increase in user retention and engagement, ensuring seamless operations, showcasing key problem-solving skills",
            "Ensured optimal performance and user experience on various devices and screen sizes using a mobile-first and responsive design approach, increasing customer satisfaction by 45%",
            "Conducted SEO optimization to bring in more users to the PNI website via organic search, increasing website traffic by 3x",
            "Coordinated and managed 100% of engineering, testing, implementation, and maintenance of both code and codebases.",
        ],
    },
    {
        title: "Fullstack Web Developer",
        company_name: "IT Solutions Center",
        icon: itsc,
        iconBg: "#383E56",
        date: "Aug 2022 - Feb 2023",
        points: [
            "Trained 7+ incoming developers on technical topics such as REST APIs, MVC architecture, OOP, and JavaScript fundamentals.",
            "Partner closely with 50+ clients to understand the need for improved functionality, and communicate with 10+ engineers to develop enhancements that increased client satisfaction by 34%",
            "Design new endpoints utilizing a REST architecture with accompanying controllers and services built using Node.js and Express, ensuring a clear separation of concerns and modular design.",
            "Develop a fully interactive internal system to manage user permissions and settings which saved 50+ hours of development time monthly, portraying strong attention to detail.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Behcet's technical aptitude and commitment to delivering quality work makes him a valuable asset to any software development team.",
        name: "Nathan Wick",
        designation: "Software Engineer",
        company: "ITSC",
        image: nathan,
    },

];

const projects = [
    {
        name: "Peel9",
        description:
            "Web-based RMS platform with a focus on assisting the local police agencies across the tri-state area. The platform allows officers to manage their daily tasks, such as managing their schedule, submitting reports, and managing their vehicles while providing mission critical analytical data.",
        tags: [
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "handlebars",
                color: "green-text-gradient",
            },
            {
                name: "vanilla JS",
                color: "pink-text-gradient",
            },
        ],
        image: peel9img,
        source_code_link: "https://github.com/",
    },
    {
        name: "OSDP",
        description:
            "OSDP is an enterprise web application that allows judicial members to swiftly create and manage court cases. These cases are then analyzed and evaluated to display insightful analytical information to the user.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "mongoDB",
                color: "text-[#E3E902]",
            },
        ],
        image: osdp,
        source_code_link: "https://github.com/",
    },
    {
        name: "YumAR",
        description:
            "YumAR is an augmented reality food application that displays food in a new dimension to its users. This project was started by me in early 2022 and recently is picking up pace within the restaurant industry.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "tRPC",
                color: "text-[#E3E902]",
            },
        ],
        image: yumar,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };