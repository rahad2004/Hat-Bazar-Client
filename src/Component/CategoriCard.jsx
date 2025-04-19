import React from "react";
import { Link } from "react-router";

const CategoriCard = ({ categori }) => {
  const { name, image, description } = categori;
  return (
    <Link to={`/products/${name.toLowerCase()}`}>
      <div className="relative shadow-2xl rounded-2xl overflow-hidden">
        <img className="h-[240px] w-full object-cover" src={image} alt={name} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <p className="text-white font-lato text-xl font-semibold">{name}</p>
            <p className="text-center text-white font-lato font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriCard;
