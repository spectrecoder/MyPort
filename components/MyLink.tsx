import { IconType } from "react-icons"

interface Props {
  name: string
  border?: boolean
  Icon: IconType
  url: string
}

export default function MyLink({ name, Icon, border, url }: Props) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={url}
      className={`w-1/2 ${
        border ? "vCustomLine relative before:right-0" : ""
      } h-full flex justify-center items-center gap-4 text-xl text-gray-300 font-semibold uppercase cursor-pointer group`}
    >
      <span className="group-hover:mx-2 group-hover:text-main-orange transition-all duration-300">
        {name}
      </span>
      <Icon className="text-3xl group-hover:text-main-orange transition-all duration-300" />
    </a>
  )
}
