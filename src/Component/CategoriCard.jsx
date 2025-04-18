import React from "react";

const CategoriCard = ({ categori }) => {
  const { name, image } = categori;
  return (
    <div>
      <img className="h-[240px] w-full object-cover" src={image} alt="" />
    </div>
  );
};

export default CategoriCard;
