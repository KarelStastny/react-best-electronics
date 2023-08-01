import React from "react";
import Banner from "../Front-End/Header/Banner"
import AdSlider from "../Front-End/Header/AdSlider"
import Sale from "../Front-End/Header/Sale"
import NewProductSlider from "../Front-End/Main/NewProductSlider"
import AllCategory from "../Front-End/Main/AllCategory"

const Home = () => {
  return (
    <div className="home px-5 lg:px-16">
      {/* Horní sekce popisu a slideru */}
      <section className=" bg-white flex justify-center items-center flex-col md:flex-row  ">
        <div className="bg-pink-200 w-full"><Banner/></div>
        <div className="bg-pink-500 w-full"><AdSlider/></div>
      </section>

      {/* Slevy banner */}
      <section className="flex justify-center items-center"><Sale/></section>

      {/* Slider nové produkty */}
      <section className="flex justify-center items-center"><NewProductSlider/></section>

      {/* Hlavní kategorie */}
      <section className="flex items-center justify-center"><AllCategory/></section>
    </div>
  );
};

export default Home;
