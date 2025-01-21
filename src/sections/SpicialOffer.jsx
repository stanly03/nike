import { offer } from "../assets/images"
import Buttons from "../components/Buttons"

const SpicialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className=" flex-1 ">
        <img src={offer}
          width={773}
          height={687}
          className="object-contain w-full" />
      </div>


      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          
          <span className="text-coral-red inline-block mt-3">Special</span>  Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg ">
          Embark on a shopping journy that redefines experience with unbeatable deals. From premier selections to incredible savings, we offer unperalleled
          value that sets us apart
        </p>
        <p className="info-text mt-5 lg:max-w-lg mb-3 ">
          Navigate a realm of possiblities desined to fulfill our unique desires ,surpassing the loftiest expectations. Your journy with us nothing short of exceptional
        </p>
        <div className="mt-14 flex flex-wrap gap-4">
          <Buttons label="Shop Now"/>
          <Buttons label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpicialOffer