import React from "react";
import Banner from "../Front-End/Header/Banner";
import AdSlider from "../Front-End/Header/AdSlider";
import Sale from "../Front-End/Header/Sale";
import NewProductSlider from "../Front-End/Main/NewProductSlider";
import AllCategory from "../Front-End/Main/AllCategory";

const Home = () => {
  return (
    <main>
      <div className="home px-5 lg:px-16">
        {/* Hlavní kategorie */}
        <section className="flex items-center justify-center max-w-[1400px] m-auto mt-4">
          <AllCategory />
        </section>

        {/* Horní sekce popisu a slideru */}
        <section className=" flex justify-center items-center flex-col md:flex-row gap-4 pt-8 max-w-[1400px] m-auto">
          <div className="w-full h-[350px] ">
            <Banner />
          </div>
          <div className="w-full h-[350px] ">
            <AdSlider />
          </div>
        </section>

        {/* Slevy banner */}
        <section className="flex justify-center items-center max-w-[1400px] m-auto pt-4">
          <Sale />
        </section>

        {/* Slider nové produkty */}
        <h2 className=" text-center md:text-lg uppercase font-semibold tracking-wide mt-5 mb-3">
          Nejnovější produkty
        </h2>
        <section className="flex justify-center items-center max-w-[1400px] m-auto mt-4">
          <NewProductSlider />
        </section>
      </div>
    </main>
  );
};

export default Home;
