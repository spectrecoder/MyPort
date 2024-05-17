import Testimonial from "../Testimonial"
import Title from "../Title"
import MyActivity from "./MyActivity"
import { favouriteWord } from "../../data"

export default function Activity() {
    return (
        <section className="h-full overflow-y-scroll myScroll">
            <Title name="activity" />
            <MyActivity />
            <Title name="quote" />
            <Testimonial testimonial={favouriteWord} />
        </section>
    )
}
