import Image from "next/image"
import { FaPlus } from "react-icons/fa"
import { motion } from "framer-motion"

interface Props {
  workData: workProps
  setCurrentWork: (v: number) => void
  setShowWork: (v: boolean) => void
}
interface workProps {
  id?: number
  title?: string,
  description: string,
  imageUrl?: string,
  live?: string,
  repo?: string
  stacks?: string[],
  features?: {
    title: string,
    description: string
  }[],
  challenge?: string
}
export default function Work({ workData, setCurrentWork, setShowWork }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout="position"
      onClick={() => {
        setCurrentWork(workData.id ?? 0)
        setShowWork(true);
      }}
      className={`pb-12 px-12`}
    >
      <div className="group  cursor-pointer">
        <div className={`relative w-full h-[35rem] lg:h-72 work`}>
          {/* <FaPlus className="text-gray-500 text-5xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" /> */}
          <Image
            src={workData.imageUrl ?? ''}
            alt="project"
            objectFit="cover"
            layout="fill"
            className=" group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <p className="capitalize text-gray-500 text-2xl text-center mt-6 mb-4 tracking-wide group-hover:text-[#404040] pt-[10px] transition-all duration-150">
          {workData.title}
        </p>
        {/* <p className="text-gray-500 text-xl text-center tracking-wide capitalize">
          project
        </p> */}
      </div>
    </motion.li>
  )
}
