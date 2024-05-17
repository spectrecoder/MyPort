import { AiFillGithub } from "react-icons/ai"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { ProfileData } from "../types"
import MediaIcons from "./MediaIcons"
import MyLink from "./MyLink"
import Slide from "./Slide"
import Typing from "./Typing"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
interface Props {
  profileData: ProfileData
}

export default function ProfileCard({ profileData }: Props) {
  return (
    <div className="px-12 py-10">
      <div className="flex items-center gap-[20px]">
        <div>
          <img
            src={profileData.ownersPhoto.url}
            alt="userPic"
            className="gray-image cursor-pointer duration-500 w-[200px] block p-0 z-20 relative shadow-lg  rounded-full border-4 border-white border-solid"
          />
          {/* <Typing /> */}
        </div>
        <article className="pt-[20px] prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
          <div className="text-[17px] font-bold text-[#404040]">
            Hello! I am Cheng Jun Kai from Singapore
          </div>
          <ReactMarkdown className="text-gray-500" remarkPlugins={[remarkGfm]} >
            I help startups, enterprises and individuals to implement their idea into reality with my knowledge and experience.
          </ReactMarkdown>
        </article >
      </div>
      <MediaIcons />
    </div >

  )
}
