import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router";
import Loader from "../Local/Loader";
import useAxiosSecure from "../Hooks/useAxiosSucure";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { id } = useParams();
  const AxiosSecure = useAxiosSecure();

  const loadProductDetails = async () => {
    const res = await AxiosSecure.get(`products/details/${id}`);

    return res.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singelProduct"],
    queryFn: loadProductDetails,
  });

  // useEffect(() => {
  //   AxiosSecure.get(`products/details/${id}`)
  //     .then((res) => {
  //       setProduct(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching product details:", error);
  //       setLoading(false);
  //     });
  // }, [id]);

  if (isLoading) return <Loader></Loader>;
  if (isError) return <p>{error.message}</p>;


  const { name, image, price, unit, stock, rating, category, description } =
    data;

  return (
    <div className=" min-h-[calc(100vh-292px)] flex items-center px-4 py-8 max-w-5xl mx-auto ">
      <div className="grid md:grid-cols-2 gap-10 bg-[#e0dddd] p-4 shadow-2xl rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <div className="space-y-4">
          <h1 className="text-2xl font-bold font-lato">{name}</h1>
          <p className="text-gray-600">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="flex items-center text-main text-xl font-bold">
            <TbCurrencyTaka className="text-2xl" /> {price}{" "}
            <span className="ml-2 text-sm">per {unit}</span>
          </p>
          <p>
            Available Stock: {stock} {unit}
          </p>
          <p>Rating: ⭐ {rating}/5</p>
          <p className="text-gray-700 leading-6">{description}</p>

          <button className="bg-main text-white font-lato px-5 py-3 rounded-lg mt-4">
            + Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
