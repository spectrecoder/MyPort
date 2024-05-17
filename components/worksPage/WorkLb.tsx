import Image from "next/image"
import { MouseEvent, useEffect, useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { HiOutlineViewGridAdd } from "react-icons/hi"
import { animate, motion } from "framer-motion"
import { SingleWorkData } from "../../types"
import Loader from "../Loader"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { BsGithub } from "react-icons/bs"
import { worksData } from "../../data"
import { RiChatPrivateFill } from "react-icons/ri";

import { FaCheck } from "react-icons/fa";

interface SingleWorkQuery {
  work: SingleWorkData
}

interface SingleWorkVariables {
  projectId: string,
}
interface workProps {
  id: number
  setShowWork: (v: boolean) => void
}
export default function WorkLb({ id, setShowWork }: workProps) {
  const [workData, setWorkData] = useState(Object)
  useEffect(() => {
    setWorkData(worksData.filter((a) => a.id === id)[0])
  }, [id])
  // function closeLb(e: MouseEvent): void {
  //   setShowWord(false)
  // }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      // onClick={closeLb}
      className={`lb fixed top-0 left-0 w-screen h-screen   bg-gray-900/70 z-50 flex justify-center transition-all duration-200`}
    >
      <main className="h-[80rem] rounded-[20px] m-auto w-[70rem] max-w-[90%] bg-white flex justify-center items-center">
        {workData === undefined ? (
          <Loader />
        ) : (
          <div className="w-full h-full max-h-full overflow-y-scroll myScroll rounded-[20px]">
            <div className="w-full relative h-[45rem]">
              <AiFillCloseCircle
                onClick={() => setShowWork(false)}
                className="absolute z-10 text-5xl  cursor-pointer top-6 right-8 text-gray-900"
              />
              <Image
                src={workData?.imageUrl ?? ''}
                alt="project description"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <section className="py-14 px-14">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-4 text-4xl font-semibold tracking-wide text-[#404040] capitalize">
                {workData.title}

                <div className="flex  items-center gap-x-4">
                  <a
                    rel="noreferrer"
                    href={workData.live}
                    target="_blank"
                    className="cursor-pointer text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize hover:bg-sky-600 transition-all duration-300 text-white bg-sky-500"
                  >
                    view
                    <HiOutlineViewGridAdd className="text-3xl" />
                  </a>

                  {workData.repo !== '' && <a
                    rel="noreferrer"
                    href={workData.repo}
                    target="_blank"
                    className="cursor-pointer text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize shadow-lg hover:bg-gray-700 transition-all duration-300 text-white bg-gray-900"
                  >
                    github
                    <BsGithub className="text-3xl" />
                  </a>}
                  {workData.repo === '' && <span
                    className="cursor-pointer text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize shadow-lg hover:bg-gray-700 transition-all duration-300 text-white bg-gray-900"
                  >
                    private
                    <RiChatPrivateFill className="text-3xl" />
                  </span>}
                </div>
              </div>
              <p className="text-xl tracking-wide text-gray-500">
                {workData.description}
              </p>
              <div className="flex flex-wrap gap-[10px] py-[20px]">
                {workData.stacks?.map((a: any, idx: any) => (
                  <div key={idx} className="px-[10px] hover:bg-gray-500 cursor-pointer duration-500 hover:text-white border-gray-500 shadow-sm text-gray-500 py-[8px] border-solid border-[1px] flex items-center gap-[8px] rounded-[20px]">
                    {a ?? ''}
                  </div>
                ))}
              </div>
              <div className="text-[#404040] text-[17px]">Features</div>
              <div className="flex flex-wrap flex-col gap-[10px] py-[20px]">
                {workData.features?.map((a: any, idx: any) => (
                  <div key={idx}>
                    <div className="flex gap-[10px] py-[10px] items-center text-[15px]">
                      <FaCheck />{a.title}
                    </div>
                    <div className="text-[14px] text-gray-500">
                      {a.description.split('.').map((sentence: any, idx: any) => idx !== a.description.split('.').length - 1 && <div key={idx}>{sentence.trim() + '.'}</div>)}

                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#404040] text-[17px] py-[10px]">Challenge</div>
              <div className="text-[14px] text-gray-500">
                {workData.challenge?.split('.').map((sentence: any, idx: any) => idx !== workData.challenge.split('.').length - 1 && <div key={idx}>{sentence.trim() + '.'}</div>)}
              </div>
            </section>
          </div>
        )}
      </main>
    </motion.section>
  )
}
