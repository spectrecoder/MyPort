import MyService from "./MyService"
import { services } from "../../data"
import { ServiceData } from "../../types"

export default function MyServices() {
  return (
    <ul className="grid grid-cols-2 px-[20px] gap-[10px]">
      {services.map((s: ServiceData, idx) => (
        <MyService
          key={idx}
          index={idx}
          name={s.title}
          desc={s.description}
          Icon={s.Icon}
          border={false}
          last={idx === services.length - 1}
        />
      ))}
    </ul>
  )
}
