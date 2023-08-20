import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import CustomerReview from "./sections/CustomerReview";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className=" xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className=" padding">
          <PopularProducts />
        </section>
        <section className=" padding">
          <SuperQuality />
        </section>
        <section className=" padding">
          <Services />
        </section>
        <section className=" padding">
          <SpecialOffer />
        </section>
        <section className=" padding">
          <CustomerReview />
        </section>
        <section className="w-full py-16 padding-x sm:py-32">
          <Subscribe />
        </section>
        <section className="pb-8 bg-black padding padding-x padding-t">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
