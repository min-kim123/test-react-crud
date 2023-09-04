import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_API_URL } from "../App";

/* eslint-disable react/prop-types */
const TableProduct = ({ index, product, getProducts }) => {
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
    <>
      <tr key={index} className="max-h-10">
        <td className="p-4 border-b text-sm">
          <img src={product.image} className="w-full " />
        </td>
        <td  className=" p-4 border-b text-sm">{product.name}</td>

        <td className="p-4 border-b text-sm">{product.quantity}</td>
        <td className="p-4 border-b text-sm">${product.price}</td>
        <td className="p-4 border-b text-sm">{product.slug}</td>
        <td className="p-4 border-b text-sm">{product.category}</td>
        <td className="p-4 border-b text-sm">{product.brand}</td>
        <td className="p-4 border-b text-sm">
          {product.description}
        </td>
        <td className="p-4 border-b text-sm overflow-scroll">{product._id}</td>

        <td className="p-4 border-b text-sm">
          <div className="flex gap-2">
            <Link
              to={`/edit/${product._id}`}
              className="inline-block text-sm text-white px-2 py-1 bg-gray-300 rounded hover:bg-blue-600"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteProduct(product._id)}
              className="inline-block text-sm text-white px-2 py-1 bg-gray-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableProduct;