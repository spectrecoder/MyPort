import { IconType } from "react-icons"
interface Props {
  Icon: IconType
  size?: string
}

export default function MyIcon({ Icon, size }: Props) {
  return (
    <div
      className={`icon ${size ? size : "w-[50px] h-[50px]"
        } rounded-full border-2 ml-[-10px] border-[#4040409f] border-solid flex items-center justify-center`}
    >
      <Icon className="text-5xl text-[#4040409f]" />
    </div>
  )
}
