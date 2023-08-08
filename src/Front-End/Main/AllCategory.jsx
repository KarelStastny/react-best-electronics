import React from "react";
import { category } from "../../Back-End/DataCategory";

const AllCategory = () => {
  // return (
  //   <div className="flex flex-col items-center justify-center bg-gray-200 p-6 w-1/4">
  //   <div className="relative h-4/5 w-4/5 bg-blue-500 rounded-full flex items-center justify-center mb-4 overflow-hidden">
  //     <div
  //       className="absolute inset-0 rounded-full"
  //       style={{
  //         backgroundImage: "https://hradec.rozhlas.cz/sites/default/files/images/063e49afff550bde4fe6a9a94bab38d3.jpg", // Sem vlož URL obrázku pro kruh
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     />
  //   </div>
  //   <h3 className="text-xl font-bold">NADPIS</h3> {/* Sem vložíš nadpis */}
  // </div>
   
  // );
  return (
    <div className="allCategory">
      <div className=" flex items-center justify-center  ">
        {/* OneCategory */}

        {category?.map((i) => {
          return <div key={i.key} className="border w-1/2 ">
            <div className="bg-orange-400 relative  w-full h-[100px] flex items-center ">
              <img className="object-cover p-5 absolute bottom-4" src={i.img} alt={i.title} />
            </div>

            <h3>{i.title}</h3>
          </div>;


        })}


      </div>

      
    </div>
  );
};

export default AllCategory;
