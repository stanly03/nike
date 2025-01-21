import { arrowRight } from "../assets/icons"

const Buttons = ({ label,iconURL,backgroundColor,borderColor,textColor,fullwidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2
         px-7 py-4 border font-montserrat text-lg leading-none

         ${backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         :"bg-coral-red border-coral-red text-white "
         } rounded-full ${fullwidth && 'w-full'}"}`}>
      {label}
      <img
        src={arrowRight}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Buttons