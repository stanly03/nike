import {
  CustomerReviews, Footer, Hero,
  PopularProduct, Service, SpicialOffer,
  Subscribe, SuperQuality
} from "./sections"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <div className="flex justify-center items-center text-2xl font-bold font-palanquin my-3 animate-bounce">
        <h1>This website created by
          <span className="text-coral-red"> "STANLY" </span>
        </h1>

      </div>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="padding">
        <SpicialOffer />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App