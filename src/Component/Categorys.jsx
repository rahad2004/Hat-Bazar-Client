import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriCard from "./CategoriCard";

const Categorys = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoriData();
  }, []);

  const categoriData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cetegories");
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="mt-[100px] my-8 px-4 space-y-2">
      <h1 className="text-center text-main font-lato text-xl md:text-2xl font-bold">
        Browse Our Categories
      </h1>
      <p className="text-center md:w-3/4 lg:w-1/2 mx-auto font-lato text-lg text-[#737373]">
        {" "}
        Easily explore our wide range of fresh groceries categorized just for
        your convenience.From vegetables to meat, milk, and more – find
        everything you need in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        {categories.map((categori) => (
          <CategoriCard key={categori._id} categori={categori}></CategoriCard>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
