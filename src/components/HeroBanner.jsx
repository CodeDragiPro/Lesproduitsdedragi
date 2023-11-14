import React from 'react';
import hero from '../assets/hero.png';

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2  mt-8 md:mt-0 text-white text-left md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Explorez l'Élégance, Adoptez la commodité.</h1>
            <p className="text-xl">Découvrez une expérience de shopping en ligne exceptionnelle où le style rencontre la simplicité. Parcourez notre collection exclusive et offrez-vous le luxe de la facilité, car chaque clic devrait être une découverte.</p>
        </div>

        <img
        src={hero}
        alt="Description de l'image"
        className="w-full md:w-1/2 h-auto object-cover"
        />
    </div>
  );
};

export default HeroBanner;
