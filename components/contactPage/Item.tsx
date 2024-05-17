import { IconType } from "react-icons"
import MyIcon from "../MyIcon"
import Image from "next/image"
interface Props {
  name: string
  border: boolean
  desc: string
  Icon: IconType
  last: boolean
}

export default function MyItem({ name, Icon, desc, last }: Props) {
  return (
    <li
      className={`before:bottom-0 relative relative customBorder`}
    >
      <div className="py-[10px] px-12">
        <div className="flex items-center gap-[10px]">
          <MyIcon Icon={Icon} />

          <h2 className="capitalize text-[1.6rem] text-[#404040] font-semibold pb-2 pt-4">
            {name}
          </h2>
        </div>

        <p className="mt-[10px] text-2xl text-gray-500 leading-[1.8] tracking-wide ">
          {desc}
        </p>
      </div>
    </li>
  )
}
