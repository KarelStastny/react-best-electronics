import React from "react";
import Banner from "../Front-End/Header/Banner";
import AdSlider from "../Front-End/Header/AdSlider";
import Sale from "../Front-End/Header/Sale";
import NewProductSlider from "../Front-End/Main/NewProductSlider";
import AllCategory from "../Front-End/Main/AllCategory";
import Header from "../Front-End/Header/Header";

const Home = () => {
  return (
    <main>
  
      <div className="home px-5 lg:px-16">
        {/* Horní sekce popisu a slideru */}
        <section className=" flex justify-center items-center flex-col md:flex-row  ">
          <div className="w-full">
            <Banner />
          </div>
          <div className="w-full">
            <AdSlider />
          </div>
        </section>

        {/* Slevy banner */}
        <section className="flex justify-center items-center">
          <Sale />
        </section>

        {/* Slider nové produkty */}
        <section className="flex justify-center items-center">
          <NewProductSlider />
        </section>

        {/* Hlavní kategorie */}
        <section className="flex items-center justify-center">
          <AllCategory />
        </section>
      </div>
    </main>


   
  );
};

export default Home;
