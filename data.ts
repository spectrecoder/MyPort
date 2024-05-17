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
