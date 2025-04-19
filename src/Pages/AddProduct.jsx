import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import banner from "../assets/All Product  Banner.JPG";
import useAuth from "../Hooks/useAuth";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const email = user.email;

  const onSubmit = async (data) => {
    const updatedata = { ...data, createAt: new Date(), email };

    try {
      const response = await axios.post("https://hat-bazar-server.onrender.com/add-product", {
        updatedata,
      });

      const data = await response.data;

      if (data.insertedId) {
        Swal.fire({
          title: "Sussess",
          text: `Product add successfully`,
          icon: "success",
          confirmButtonText: "Ok",
        });
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    reset();
  };
  return (
    <div className="container mx-auto mt-5 md:mt-7 lg:mt-[50px] px-2">
      <div className="relative rounded-2xl overflow-hidden">
        <img className="w-full object-cover" src={banner} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end">
          <h1
            className="bg-main px-5 md:px-6 md:py-1 lg:px-8 lg:py-2 text-white font-lato lg:text-xl "
            style={{
              clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)",
            }}
          >
            Add Product
          </h1>
        </div>
      </div>
      <div className="bg-[#f3f3f3] my-10 px-10 py-10 rounded-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          <div>
            <input
              {...register("name", { required: "This Field is Required" })}
              placeholder="Product Name"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="text"
            />

            {errors.name && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("image", { required: "This Field is Required" })}
              placeholder="Image URL"
              className="w-full px-4 py-2 outline-none rounded bg-[#ffffff]"
              type="text"
            />
            {errors.image && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("price", {
                required: "This Field is Required",
                valueAsNumber: true,
                min: { value: 1, message: "Price must be at least 1" },
              })}
              placeholder="Price"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="number"
            />
            {errors.price && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("unit", { required: "This Field is Required" })}
              placeholder="Unit (e.g. kg, liter)"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="text"
            />
            {errors.unit && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.unit.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("stock", {
                required: "This Field is Required",
                valueAsNumber: true,
                min: { value: 1, message: "Price must be at least 1" },
              })}
              placeholder="Stock"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="number"
            />
            {errors.stock && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.stock.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register("category", { required: "This Field is Required" })}
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
            >
              <option value="">Select Category</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Meat">Meat</option>
              <option value="Milk">Milk</option>
              <option value="Fish">Fish</option>
              <option value="Fruits">Fruits</option>
              <option value="Bakery">Bakery</option>
              <option value="Beverages">Beverages</option>
            </select>
            {errors.category && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              {...register("description", {
                required: "This Field is Required",
              })}
              placeholder="Product Description"
              className="  w-full px-4 py-2 bg-[#ffffff] resize-none outline-none rounded"
              rows={4}
            ></textarea>
            {errors.description && (
              <p className="text-red-600 absolute text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-main text-white px-6 py-2 rounded hover:bg-green-600 md:col-span-2"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
