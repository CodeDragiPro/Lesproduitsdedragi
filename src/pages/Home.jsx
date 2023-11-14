import React from "react";
import HomeCard from "../components/HomeCard";

import VetementImg from "../assets/HomeImages/vetements.png";
import ConfiserieImg from "../assets/HomeImages/confiserie.jpg";
import ChaussuresImg from "../assets/HomeImages/chaussures.jpg";
import ParfumImg from "../assets/HomeImages/parfums.jpg";
import MaquillageImg from "../assets/HomeImages/maquillage.jpg";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const data = [
    { text: "Vêtements", image: VetementImg },
    { text: "Confiseries", image: ConfiserieImg },
    { text: "Chaussures", image: ChaussuresImg },
    { text: "Parfums", image: ParfumImg },
    { text: "Maquillage", image: MaquillageImg },
  ];

  return (
    <div className="">
      <div>
        <HeroBanner />
      </div>

      <div className="mt-20">
        <h1 className="md:4xl text-2xl text-white font-bold mb-4">Découvrez nos catégories de produits.</h1>
        <div className="flex flex-wrap  justify-center  items-center flex-row">
          {data.map((item, index) => (
            <HomeCard
              key={index}
              backgroundImage={item.image}
              buttonText={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
