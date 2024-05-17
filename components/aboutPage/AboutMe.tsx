
import { FaCalendar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import ProfileCard from "../ProfileCard";
const profileData = {
  id: "Cheng JunKai",
  cv: "",
  name: "Cheng JunKai",
  ownersPhoto: { url: "/images/pic4.png" },
  bgImages: [{ url: "/images/g-7.jpg" }, { url: "/images/g-9.jpg" }]
}




export default function AboutMe() {


  return (
    <ProfileCard profileData={profileData} />
  )
}
