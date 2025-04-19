import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  console.log(product);
  const {
    unit,
    stock,
    _id,
    rating,
    price,
    name,
    image,
    description,
    category,
  } = product;

  return (
    <Link to={`/products/details/${_id}`}>
      <div className="border-2 border-[#dad5d5] shadow p-3  space-y-4">
        <div className="rounded-xl overflow-hidden">
          <img
            className="w-full h-[225px] object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-lato text-base font-bold">{name}</h1>
          <p className="text-main font-bold flex justify-center items-center ">
            <TbCurrencyTaka className="text-2xl"></TbCurrencyTaka> {price}{" "}
            <span className="ml-2 text-sm">per {unit}</span>
          </p>
          <button className="bg-main text-white font-lato px-4 py-2 rounded-2xl">
            + Add to Bag
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
