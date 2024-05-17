import AboutMe from "./AboutMe"
import MyServices from "./MyServices"
import MySkills from "./MySkills"
import Testimonials from "./Testimonials"
import Title from "../Title"

export default function About() {
  return (
    <section className="h-full overflow-y-scroll rounded-[10px] myScroll pb-[10px] ">
      <Title name="about me" />
      <AboutMe />
      <Title name="my services" />
      <MyServices />
      <Title name="my skills" />
      <MySkills />
      <Title name="feedbacks" />
      <Testimonials />
    </section>
  )
}
