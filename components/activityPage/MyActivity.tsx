import MyItem from "./Item"
import { activities } from "../../data"
import { ServiceData } from "../../types"

export default function MyItems() {
    return (
        <ul className="grid grid-cols-1 px-[20px] gap-[10px]">
            {activities.map((s: ServiceData, idx) => (
                <MyItem
                    key={s.id}
                    name={s.title}
                    desc={s.description}
                    Icon={s.Icon}
                    border={false}
                    last={idx === activities.length - 1}
                />
            ))}
        </ul>
    )
}
