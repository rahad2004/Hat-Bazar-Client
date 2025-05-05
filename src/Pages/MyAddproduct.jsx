import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyAddproduct = () => {
  const { user } = useAuth();
  const email = user?.email;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    try {
      const response = await axios(
        `http://localhost:5000/myadd-products/${email}`
      );
      const data = await response.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [email]);

  const handelDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    console.log(result);

    if (result.isConfirmed) {
      const result = await axios.delete(
        `http://localhost:5000/removeproduct/${id}`
      );
      const data = result.data;
      loadProduct();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={product?.image} alt="product" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.name}</div>
                      <div className="text-sm opacity-50">
                        {product?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product?.stock}</td>
                <td>{product?.price}</td>
                <td>
                  <Link
                    to={`/products/update/${product?._id}`}
                    className="btn btn-ghost "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handelDelete(product?._id)}
                    className="btn btn-ghost "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddproduct;
