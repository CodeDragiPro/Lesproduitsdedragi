import React from 'react';

const HomeCard = ({ buttonText, backgroundImage }) => {
  return (
    <div className="relative w-60 h-60  bg-cover bg-center m-4 shadow-md" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className='p-2 border-2 border-white text-xl'>
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
