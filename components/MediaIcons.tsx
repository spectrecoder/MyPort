import { socialMedia } from "../data"

export default function MediaIcons() {
  return (
    <div className="relative">
      <div className="w-[40%] left-[30%] z-1 top-[9px] absolute social-border">
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full border-[1px] border-[#777777] border-solid top-[-4px]"></div>
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full border-[1px] border-[#777777] border-solid top-[-4px] right-0"></div>
      </div>
      <div className='flex w-[20%] m-auto relative z-2 bg-white gap-5 items-center justify-center mt-7'>
        {socialMedia.map(({ id, Icon, mediaUrl }) => (
          <a rel="noreferrer" href={mediaUrl} target="_blank" key={id}>
            <Icon className="text-gray-500 text-3xl transition-all duration-300 hover:text-[#404040] cursor-pointer" />
          </a>
        ))}
      </div>

    </div>
  )
}
