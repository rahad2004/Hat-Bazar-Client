import { Link } from "react-router";
import img from "../assets/404.png";

const Errorpage = () => {
  return (
    <div>
      <div className="container mx-auto h-dvh flex justify-center items-center flex-col gap-4">
        <img className="animate-pulse" src={img} alt="" />
        <Link className="bg-main text-white py-2 px-4 rounded-2xl" to={"/"}> Back Home</Link>
      </div>
    </div>
  );
};

export default Errorpage;
