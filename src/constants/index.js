import {
  backend,
  betterworks,
  carrent,
  creator,
  css,
  docker,
  git,
  html,
  javascript,
  jio,
  jobit,
  mobile,
  mongodb,
  nodejs,
  openFabric,
  postgres,
  python,
  reactjs,
  redux,
  tailwind,
  tripguide,
  typescript,
  vasizebron,
  web,
  zoho,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Data Engineering",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Coding and Teaching",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
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
    name: "PostgresSQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "Vasizebron",
    icon: vasizebron,
    iconBg: "#383E56",
    date: "Nov 2023 - current",
    points: [
      "Transforming Futures, Empowering Growth",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "passionate about bridging the gap between education and the professional world. Our dedicated team specializes in providing comprehensive placement services for colleges, connecting talented students with exciting career opportunities in leading industries.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "BetterWorks",
    icon: betterworks,
    iconBg: "#383E56",
    date: "July 2021 - Oct 2023",
    points: [
      "Developing and maintaining web applications using Vue Js, Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Reverie (A JIO Company)",
    icon: jio,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Zoho",
    icon: zoho,
    iconBg: "#383E56",
    date: "May 2019 - June 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vasanth is an excellent colleague and a friend to have in your corner. I really admire his dedication to seeing all the tasks to fruition",
    name: "Sagar",
    designation: "SSE",
    company: "BetterWorks",
    image:
      "https://media.licdn.com/dms/image/D5603AQGvEukcCVSGVg/profile-displayphoto-shrink_100_100/0/1700209591001?e=1719446400&v=beta&t=DNYjyMySMYd0waUx9fiRTh-LFnp5Lk7AMwt4AEd2tw4",
  },
  {
    testimonial:
      "I have worked directly with Vasanth. He is always love to work and open to learn new technologies. He is also a good team player",
    name: "Nandhakumar",
    designation: "SSE",
    company: "Blazeclan",
    image:
      "https://media.licdn.com/dms/image/C5103AQGeAFynbY7Ohg/profile-displayphoto-shrink_100_100/0/1544090854927?e=1719446400&v=beta&t=sAwsomDsv-Q9SZF8QqQQ_D4PQK_wNccEvy_Trlo2e9M",
  },
  {
    testimonial:
      "Vasanth is an outstanding professional who consistently goes above and beyond to deliver results.",
    name: "Praveen",
    designation: "SASE",
    company: "Vegabird",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHCw3uYiWAgNA/profile-displayphoto-shrink_100_100/0/1693392340171?e=1719446400&v=beta&t=Dn5eptjfm2blspB7kZAj-85Lzc1pAqVdqNpIztdHqxY",
  },
];

const projects = [
  {
    name: "Ethroids",
    description:
      "Web-based platform that allows users to buy, sell and bid NFT products online all over the world",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vasanthkumar10/ethdroids",
  },
  {
    name: "Namaste NFT",
    description:
      "Web-based platform that allows users to buy, sell and bid NFT products online all over the world",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vasanthkumar10/Namaste-NFT",
  },
  {
    name: "Z Chat",
    description:
      "A comprehensive chat application that allows users to interact with other users and authenticated users with a variety of features",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vasanthkumar10/Zchat",
  },
];

export { services, technologies, experiences, testimonials, projects };
