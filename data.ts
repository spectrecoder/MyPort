import { AiFillLinkedin, AiOutlineGithub, AiFillGithub } from "react-icons/ai";
import { SiBlueprint } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";

import { GrWorkshop } from "react-icons/gr";

import { FaPalette } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import { FaTelegramPlane } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import { GiPingPongBat } from "react-icons/gi";
import { IoIosTennisball } from "react-icons/io";

import { IoIosMail } from "react-icons/io";

import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from "react-icons/fa";
import About from "./components/aboutPage/About";
import Contact from "./components/contactPage/Contact";
import Resume from "./components/resumePage/Resume";
import Activity from "./components/activityPage/Activity";
import Works from "./components/worksPage/Works";
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types";
import { BiTennisBall } from "react-icons/bi";
export const worksData = [
  {
    id: 1,
    title: "Online hotdog bar",
    description: "Onlike platform for hotdog lovers.",
    stacks: [
      "React",
      "Golang(gin)",
      "socket.io",
      "GraphQL",
      "MongoDB",
      "Stripe",
      "SendGrid",
      "Google Map",
      "Google Tag manager",
    ],
    features: [
      {
        title: "Ordering Management",
        description:
          "The ordering management feature facilitates various aspects of handling orders within the project. It enables customers to place orders conveniently online for dine-in, takeout, or delivery options. The menus are customizable, allowing for item descriptions, prices, and images to be displayed, enhancing the user experience. Additionally, both customers and staff benefit from order tracking and status updates, ensuring transparency and efficiency in the order fulfillment process. The system also accommodates special requests and modifications, providing flexibility to meet specific customer preferences or dietary requirements.",
      },
      {
        title: "guest management",
        description: "",
      },
      {
        title: "live chatting between receptionists and guests",
        description:
          "The live chatting feature fosters seamless communication between receptionists and guests by combining AI-driven interactions with real-time messaging capabilities. This allows for swift handling of inquiries, reservation adjustments, or special requests, enhancing guest satisfaction. Integrated with the reservation system, receptionists can conveniently access upcoming bookings and availability information during chat sessions. Furthermore, the system maintains a comprehensive chat history and logging mechanism, serving as a reference and ensuring quality assurance by enabling review and analysis of past interactions.",
      },
      {
        title: "Payment integration with Stripe",
        description: "",
      },
      {
        title: "SendGrid mail service",
        description: "",
      },
    ],
    challenge: `
    At first, we started to develop RESTful APIs for our Backend, but it was the nerviest problem for backend developers and frontend developers because it has so many API methods and complex relations between them.
    So, I suggested using Apollo GraphQL to solve this problem, and we refactored our backend and frontend parts.
    After this, we could reduce the backend developer’s effort and they could focus on business logic.
    And also frontend developers could simplify our frontend code and we could increase development speed further.
    Solving this problem, I realized that choosing tech stacks before development is the most important problem in making stable and reliable products and accelerating dev speed.`,
    imageUrl: "/images/project/hotdog.png",
    live: "https:github.com/AppleSeed95",
    repo: "https:github.com/AppleSeed95",
    workTabs: ["FullStack"],
  },
  {
    id: 2,
    title: "Matching system",
    imageUrl: "/images/project/matching.png",
    stacks: [
      "Next.js",
      "My Sql",
      "socket.io",
      "Stripe",
      "SendGrid",
      "Google Tag manager",
      "Linux Xserver",
    ],
    features: [
      {
        title: "Three roles in the system",
        description:
          "There is three roles in the system : company, influencer, administrator.",
      },
      {
        title: "Company Apply",
        description: "",
      },
      {
        title: "Influencer Apply",
        description: "",
      },
      {
        title: "Socket.io chatting for companies and influencers",
        description:
          "Real time communication between companies and influencers.",
      },
      {
        title: "Payment integration with Stripe",
        description: "",
      },
      {
        title: "SendGrid mail service",
        description: "",
      },
    ],
    challenge: `
    Because I had to deploy two servers(Nextjs server and Chatting server) on One Xserver Vps, there was few challenges.
    I had to deal with resource allocation,network configuration,security,backup and recovery problems.
    `,
    repo: "https://github.com/AppleSeed95/next-company-influencer-matching",
    live: "https:influencer-meguri.jp",
    workTabs: ["FullStack"],
  },
  {
    id: 3,
    title: "Metasnails frontend",
    imageUrl: "/images/project/metasnails.png",
    stacks: ["React.js", "Typescript", "Styled-Components", "Web3.js"],
    features: [
      {
        title: "NTF",
        description: "",
      },
      {
        title: "Charts",
        description: "",
      },
      {
        title: "Documents",
        description: "",
      },
    ],
    challenge: `
    During the project, I learned that it is very difficult to satisfy the requirements of customers with diverse aesthetic views.
    `,
    repo: "https://github.com/AppleSeed95/metasnail-frontend",
    live: "https://metasnail.mosesmawuru.pro",
    workTabs: ["Frontend"],
  },
  {
    id: 4,
    title: "Tatto NFT",
    imageUrl: "/images/project/tattoo.png",
    stacks: ["React.js", "Typescript", "Styled-Components", "Web3.js"],
    features: [
      {
        title: "Artists",
        description: "",
      },
      {
        title: "Roadmap",
        description: "",
      },
      {
        title: "Team",
        description: "",
      },
      {
        title: "Community",
        description: "",
      },
    ],
    challenge: `
    This project was successfully completed without any disagreement between the customer and me.😊
    `,
    repo: "https://github.com/AppleSeed95/tatto",
    live: "https://tattoo.mosesmawuru.pro/",
    workTabs: ["Frontend"],
  },

  {
    id: 5,
    title: "CryptoNitro",
    imageUrl: "/images/project/nitro.png",
    stacks: [
      "React.js",
      "Typescript",
      "Web3.js",
      "BSC Chain",
      "Smart Contract",
      "Solidity",
    ],
    features: [
      {
        title: "Marketplace",
        description: "globla marketplace for token and nfts.",
      },
      {
        title: "Metarverse",
        description:
          "This is a new concept of Competitive Game, using blockchain technology.",
      },
      {
        title: "Collection",
        description: "",
      },
      {
        title: "Token Info",
        description: "",
      },
      {
        title: "Community",
        description: "",
      },
    ],
    challenge: `
    Ensuring that the smart contract code is secure through thorough audits was really time-consuming and expensive.
    also compliance with Standards was challenging.
    Our team had to ensure that our NFT and token contracts comply with standards (ERC-721 for NFTs and BEP-20 for tokens) to guarantee compatibility with wallets and other platforms.

    `,
    repo: "",
    live: "https://www.cryptonitro.io",
    workTabs: ["Blockchain"],
  },
  {
    id: 6,
    title: "Hayami NFT",
    imageUrl: "/images/project/hayami.png",
    stacks: [
      "React.js",
      "Typescript",
      "Styled Components",
      "ERC721A",
      "NFT",
      "Smart Contract",
    ],
    features: [
      {
        title: "The realm",
        description: "",
      },
      {
        title: "Gate key",
        description: "",
      },
      {
        title: "Roadmap",
        description: "",
      },
      {
        title: "Team",
        description: "",
      },
      {
        title: "Social",
        description: "",
      },
    ],
    challenge: `
    We ensured the contract is secure against common vulnerabilities such as reentrancy attacks, overflows, and underflows.
    also, We had to designe the contract to handle a large number of NFTs and transactions efficiently.
    `,
    repo: "",
    live: "https://hayami-nft.vercel.app/",
    workTabs: ["Blockchain"],
  },
  {
    id: 7,
    title: "Hayami NFT",
    imageUrl: "/images/project/solana.png",
    stacks: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Firebase",
      "Solona wallet",
      "Smart Contract",
    ],
    features: [
      {
        title: "Swap",
        description: "",
      },
      {
        title: "Staking",
        description: "",
      },
      {
        title: "NFT",
        description: "",
      },
      {
        title: "Wallet integration",
        description: "",
      },
    ],
    challenge: `
    I had some trouble understanding and leveraging Rust.
    Rust is a more complex language compared to Solidity, with a steeper learning curve. It includes advanced concepts like ownership, borrowing, and lifetimes, which can be challenging for newcomers.
    but it was an opportunity for me.
    `,
    repo: "",
    live: "https://parasol.finance/",
    workTabs: ["Blockchain"],
  },
  {
    id: 8,
    title: "title",
    imageUrl: "/images/g-9.jpg",
    workTabs: ["new1"],
  },
];
export const menus: MenuData[] = [
  {
    id: 3,
    label: "works",
    Icon: FaCode,
    Component: Works,
  },

  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },

  {
    id: 4,
    label: "activity",
    Icon: FaVolleyballBall,
    Component: Activity,
  },
  {
    id: 6,
    label: "contact",
    Icon: FaTelegramPlane,
    Component: Contact,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: IoIosMail,
    label: "mail",
    logoColor: "black",
    mediaUrl: "https://mail.google.com/",
    info: "Mail me!",
  },
  {
    id: 2,
    Icon: AiFillGithub,
    label: "github",
    logoColor: "#3b5998",
    mediaUrl: "https://github.com/AppleSeed95",
    info: "Follow me on github!",
  },
  {
    id: 5,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's chat on Discord. My username - Tyrant#4185",
  },
  {
    id: 6,
    Icon: FaTelegramPlane,
    label: "Telegram",
    logoColor: "#00b22d",
    mediaUrl: "https://telegram.me/chengjunkai95",
    info: "Let`s chat!",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Frontend",
    Icon: FaPalette,
    description:
      "Modern frontend development supporting user friendly, mobile friendly.",
  },
  {
    id: 2,
    title: "Backend",
    Icon: SiBlueprint,
    description:
      "Building backend sytem supporting large scalability, high performance, robust security.",
  },
  {
    id: 3,
    title: "BlockChain",
    Icon: SiHiveBlockchain,
    description:
      "Blockchain development on Ethereum, Solana supporting Web3 integration, Smart contracts, dApps",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    Icon: GiBrain,
    description:
      "Machine learning, natural language processing, computer vision, and other AI techniques.",
  },
];
export const activities: ServiceData[] = [
  {
    id: 4,
    title: "Coding",
    Icon: FaCode,
    description:
      "Find a job you enjoy doing, and you will never have to work a day in your life.",
  },
  {
    id: 1,
    title: "Football",
    Icon: IoFootballOutline,
    description:
      "I love skill and athleticism of the players,strategic aspects of the sport",
  },
  {
    id: 2,
    title: "Volleyball",
    Icon: FaVolleyballBall,
    description:
      "The intensity of the moment, the speed of the ball is thrilling",
  },
  {
    id: 4,
    title: "Tennis",
    Icon: BiTennisBall,
    description:
      "I love the intense in powerful serves, precise shots, and strategic rallies",
  },
];
export const contacts: ServiceData[] = [
  {
    id: 4,
    title: "Gmail",
    Icon: IoIosMail,
    description: "Mail me. my address is chengjunkai74@gmail.com.",
  },
  {
    id: 1,
    title: "Discord",
    Icon: FaDiscord,
    description:
      "I love chatting with co-workers via discord. my username is @chengjunkai95",
  },
  {
    id: 2,
    title: "Telegram",
    Icon: FaTelegramPlane,
    description:
      "Dm to @chengjunkai95. I am always open for co-work, communiction",
  },
  {
    id: 4,
    title: "Github",
    Icon: AiFillGithub,
    description:
      "My GitHub username is AppleSeed95. I would like to collaborate with you.",
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
];

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Love what you do and do what you love. Don't listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life.",
  userName: "Ray Bradbury",
  userProfession: "author",
  userImage: { url: "/images/3.png" },
};
export const favouriteWord: TestimonialData = {
  id: "quote",
  quote:
    "Your love for what you do and willingness to push yourself where others aren't prepared to go is what will make you great.",
  userName: "C. Ronaldo",
  userProfession: "Football player",
  userImage: { url: "/images/4.png" },
};

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
];
