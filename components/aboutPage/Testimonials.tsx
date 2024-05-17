import Testimonial from "../Testimonial"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"

const data =
  [
    {
      id: "1",
      userName: "Narjes",
      userProfession: "One Trust",
      quote: "Cheng gave this job everything it needed and more! Our company was able to meet its goals one month ahead of schedule thanks to the research cheng put together. We would contract him for freelance work again.",
      userImage: { url: "/images/2.png" }
    },
    {
      id: "1",
      userName: "Exabytes",
      userProfession: "Ruben arnold",
      quote: "It has been a great Experience working with him. He has a great knowledge and it is pretty organize to execute tasks in rapid way and understands the needs of the business offering his technical view in each use case. Happy to work with him again.",
      userImage: { url: "/images/1.png" }
    }
  ]


export default function Testimonials() {



  return (
    <div className="testimonials">
      <Swiper pagination={true} modules={[Pagination]}>
        {data.map((t) => (
          <SwiperSlide key={t.id}>
            <Testimonial testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
