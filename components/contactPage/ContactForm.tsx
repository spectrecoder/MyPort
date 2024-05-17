import { useForm, SubmitHandler } from "react-hook-form"
import { AiOutlineSwapRight } from "react-icons/ai"
import contactOperations from "../../graphqlOperations/contact"
import toast from "react-hot-toast"
import { useState } from "react"

interface Inputs {
  fullName: string
  email: string
  message: string
}

interface ContactMutation {
  createContact: {
    fullName: string
  }
}

const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  function handleEmailValidation(email: string) {
    const isValid = isValidEmail(email)
    return isValid
  }

  const handleSend = async () => {
    if (!handleEmailValidation(email)) {
      toast.error(`Email address is not valid`, {
        duration: 5000,
      })
      return;
    }
    if (fullName === '') {
      toast.error(`Input your name please`, {
        duration: 5000,
      })
      return;
    }
    if (message === '') {
      toast.error(`Input your message please`, {
        duration: 5000,
      })
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`Thanks for contacting me`, {
        duration: 5000,
      })
    }, 1000);

  }

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 gap-8">
        <input
          onChange={({ target: { value } }) => setFullName(value)}

          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-[#404040] text-2xl py-4 focus:border-[#404040] focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-[1px] border-gray-500"
        />

        <input
          onChange={({ target: { value } }) => setEmail(value)}
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-[#404040] text-2xl py-4 focus:border-[#404040] focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-[1px] border-gray-500"
        />
      </div>

      <textarea
        onChange={({ target: { value } }) => setMessage(value)}
        placeholder="Your Message"
        className="w-full resize-y h-60 bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-[#404040] text-2xl py-4 focus:border-[#404040] focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-[1px] border-gray-500"
      ></textarea>
      <div className="w-[30%] m-auto flex justify-center">
        <div className="w-full h-20 bg-[#0e1422d9] flex justify-center items-center gap-3 text-gray-300 group mt-6 rounded-lg cursor-pointer">
          <button
            onClick={handleSend}
            className={`${loading ? "pointer-events-none" : "group-hover:text-white"
              } uppercase text-2xl font-semibold group-hover:mx-2 transition-all duration-300`}
          >
            {loading ? "sending..." : "send message"}
          </button>

          <AiOutlineSwapRight
            className={`text-4xl group-hover:text-white transition-all duration-300 ${loading ? "hidden" : "block"
              }`}
          />
        </div>
      </div>

    </div>
  )
}
