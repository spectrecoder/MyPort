interface Props {
  name: string
  currentMenu?: string
  setCurrentMenu?: (v: string) => void
}

interface TabsQuery {
  workTabs: { tab: string }[]
}

export default function Title({ name, currentMenu, setCurrentMenu }: Props) {
  const menus = {
    workTabs: [
      {
        tab: 'new'
      },
      {
        tab: 'new1'
      },
      {
        tab: 'new2'
      },
    ]
  }
  return (
    <div className="animation-element appear text-center relative before:bottom-0 borderLeft z-20 py-10 flex flex-wrap gap-8 justify-center sm:justify-between items-center">
      <div className="text-[#5c5c5c] relative w-full tracking-wide capitalize text-3xl text-gray-300 font-medium">
        {name}
      </div>
      <div className="w-full">
        <img src="/images/divider.png" alt="divider " className="w-[150px] mt-[-15px] h-[15px] opacity-30 m-auto" />
      </div>
      {currentMenu && menus && (

        <ul className="flex flex-wrap items-center gap-6 mr-12 ml-12">
          {menus.workTabs.map((menu, idx) => (
            <li
              key={idx}
              onClick={() => {
                if (setCurrentMenu !== undefined) {
                  setCurrentMenu(menu.tab)
                }
              }}
              className={`text-[1.4rem] cursor-pointer tracking-wide ${currentMenu === menu.tab ? "text-[#373737]" : "text-gray-500"
                }`}
            >
              {menu.tab}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
