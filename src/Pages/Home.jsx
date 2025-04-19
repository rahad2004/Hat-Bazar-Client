import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../Component/Banner";
import Categorys from "../Component/Categorys";
import Loader from "../Local/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriData();
  }, []);

  const categoriData = async () => {
    try {
      const response = await axios.get("https://hat-bazar-server.onrender.com/cetegories");
      const data = response.data;
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Categorys categories={categories}></Categorys>
    </div>
  );
};

export default Home;
