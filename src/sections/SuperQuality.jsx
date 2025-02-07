import { shoe8 } from "../assets/images"
import Buttons from "../components/Buttons"

const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg ">
          Ensuring premium confort and style, our meticulously crafted footwear is
          designed to elevate your experience, providing you with unmatched quality, innovation and a touch elegance
        </p>
        <p className="info-text mt-5 lg:max-w-lg mb-3 ">
          Our dedication to detail an dexcellence ensure your satisfaction
        </p>
       <div className="mt-14">
       <Buttons label="View Details"
        />
       </div>
       </div>

       <div className="flex-1 flex justify-center items-center">
         <img
         src={shoe8}
         alt="shoe8"
         width={570}
         height={522}
         className="object-contain"/>
       </div>

    </section>
  )
}

export default SuperQuality