import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import banner from "../assets/All Product  Banner.JPG";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:5000/products/details/${id}`
    );
    const data = await response.data;
    setProduct(data);
    reset({
      name: data.name || "",
      image: data.image || "",
      price: data.price || 0,
      unit: data.unit || "",
      stock: data.stock || 0,
      category: data.category || "",
      description: data.description || "",
    });
  };

  useEffect(() => {
    fetchData();
  }, [id, reset]);

  const onSubmit = async (formdata) => {
    const response = await axios.patch(
      `http://localhost:5000/update-product/${id}`,
      formdata
    );
    const updatedata = await response.data;
    if (updatedata.modifiedCount === 1) {
      Swal.fire({
        title: "Success",
        text: `Product updated successfully`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
    fetchData();
  };

  return (
    <div className="container mx-auto mt-5 md:mt-7 lg:mt-[50px] px-2">
      <div className="relative rounded-2xl overflow-hidden">
        <img className="w-full object-cover" src={banner} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end">
          <h1
            className="bg-main px-5 md:px-6 md:py-1 lg:px-8 lg:py-2 text-white font-lato lg:text-xl"
            style={{ clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)" }}
          >
            Update Product
          </h1>
        </div>
      </div>

      <div className="bg-[#f3f3f3] my-10 px-10 py-10 rounded-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">
              Product Name :
            </label>
            <input
              {...register("name")}
              placeholder="Product Name"
              id="name"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="text"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="image">
              Image URL :
            </label>
            <input
              {...register("image")}
              placeholder="Image URL"
              id="image"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="text"
            />
            {errors.image && (
              <p className="text-red-600 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="price">
              Price :
            </label>
            <input
              {...register("price", {
                valueAsNumber: true,
                min: { value: 1, message: "Price must be at least 1" },
              })}
              placeholder="Price"
              id="price"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="number"
            />
            {errors.price && (
              <p className="text-red-600 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="unit">
              Unit :
            </label>
            <input
              {...register("unit")}
              placeholder="Unit (e.g. kg, liter)"
              id="unit"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="text"
            />
            {errors.unit && (
              <p className="text-red-600 text-sm mt-1">{errors.unit.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="stock">
              Stock :
            </label>
            <input
              {...register("stock", {
                valueAsNumber: true,
                min: { value: 1, message: "Stock must be at least 1" },
              })}
              placeholder="Stock"
              id="stock"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
              type="number"
            />
            {errors.stock && (
              <p className="text-red-600 text-sm mt-1">
                {errors.stock.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="category">
              Category :
            </label>
            <select
              {...register("category")}
              id="category"
              className="w-full px-4 py-2 bg-[#ffffff] outline-none rounded"
            >
              <option value="">Select a category</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Meat">Meat</option>
              <option value="Milk">Milk</option>
              <option value="Fish">Fish</option>
              <option value="Fruits">Fruits</option>
              <option value="Bakery">Bakery</option>
              <option value="Beverages">Beverages</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium" htmlFor="description">
              Description :
            </label>
            <textarea
              {...register("description", {
                required: "This Field is Required",
              })}
              placeholder="Product Description"
              id="description"
              className="w-full px-4 py-2 bg-[#ffffff] resize-none outline-none rounded"
              rows={4}
            ></textarea>
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-main text-white px-6 py-2 rounded hover:bg-green-600 md:col-span-2"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
