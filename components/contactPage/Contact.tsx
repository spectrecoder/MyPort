import Title from "../Title"
import ContactForm from "./ContactForm"
import Location from "./Location"
import Contacts from "./MyActivity"


export default function Contact() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="get in touch" />
      <Contacts />
      <Title name="Mail me" />
      <ContactForm />
    </section>
  )
}
