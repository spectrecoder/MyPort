import { useState } from "react"
import MenuBtn from "./MenuBtn"
import { BsBookHalf } from "react-icons/bs"
import { menus } from "../data"
import SideMenuLb from "./SideMenuLb"

interface Props {
  setActivePage: (page: any) => void
  showSideMenu?: boolean
  activePage: Number
}

export default function Menus({ showSideMenu, setActivePage, activePage }: Props) {

  return (
    <header className="xl:w-[7.2rem] lg:w-[7rem] py-6 h-full mr-4 hidden lg:flex flex-col justify-center">
      <div className="overflow-hidden rounded-lg">
        {menus.slice(0, 5).map((m, i) => (
          <MenuBtn
            setActivePage={setActivePage}
            key={m.id}
            menu={m}
            noBorder={i + 1 === menus.length}
            active={activePage === m.id}
          />
        ))}
      </div>
    </header>
  )
}
