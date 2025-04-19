import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import banner from "../assets/All Product  Banner.JPG";
import ProductCard from "../Component/ProductCard";
import Loader from "../Local/Loader";

const CategorywiseProducts = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const loadProduct = async () => {
    const response = await axios.get(
      `https://hat-bazar-server.onrender.com/products/${category}`
    );

    const data = response.data;
    setProducts(data);
    setloading(false);
  };

  useEffect(() => {
    loadProduct();
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  if (products.length === 0) {
    return (
      <div className="h-[400px] flex flex-col justify-center items-center gap-2">
        <h1 className="text-center text-2xl font-bold ">Sorry This Category Not Available Now </h1>
        <Link className="bg-main px-4 py-2 rounded-2xl text-white text-base"  to={"/"}> Go to Home</Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-[50px] px-2 ">
      <div className="relative rounded-2xl overflow-hidden">
        <img className="w-full object-cover" src={banner} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end">
          <h1
            className="bg-main px-5 md:px-6 md:py-1 lg:px-8 lg:py-2 text-white font-lato lg:text-xl "
            style={{
              clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)",
            }}
          >
            {category}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategorywiseProducts;
