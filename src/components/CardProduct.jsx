import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_API_URL } from "../App";

/* eslint-disable react/prop-types */
const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${VITE_API_URL}/api/products/${id}`);
      alert("Product deleted");
      getProducts();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden  p-2 mx-1 ">
      <img src={product.image} className="h-40 rounded-2xl w-full object-cover" />
      <div className="px-4 pt-2 pb-1">
        <h2 className="text font-semibold">{product.name} </h2>
        <h2>Units: {product.quantity} </h2>
        <h2 className="text">Price: ${product.price} </h2>
        <div className="mt-2 flex gap-2">
          <Link
            to={`/edit/${product._id}`}
            className="inline-block w-full text-center  text-sm bg-gray-300 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center  text-sm bg-gray-500 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;