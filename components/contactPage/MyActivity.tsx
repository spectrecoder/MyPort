import MyItem from "./Item"
import { contacts } from "../../data"
import { ServiceData } from "../../types"

export default function Contacts() {
    return (
        <ul className="grid grid-cols-1 px-[20px] gap-[10px]">
            {contacts.map((s: ServiceData, idx) => (
                <MyItem
                    key={s.id}
                    name={s.title}
                    desc={s.description}
                    Icon={s.Icon}
                    border={false}
                    last={idx === contacts.length - 1}
                />
            ))}
        </ul>
    )
}
