import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VITE_API_URL } from "../App";

const EditPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    //initial values
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${VITE_API_URL}/api/products/${id}`);
      setProduct({
        //replace original values instead of changing them
        name: response.data.name,
        slug: response.data.slug,
        category: response.data.category,
        brand: response.data.brand,
        description: response.data.description,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`${VITE_API_URL}/api/products/${id}`, product);
      alert("Product updated");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <form onSubmit={updateProduct}>
          <div className="max-w-xl bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-xl mb-4 block text-center">
              Update Product
            </h2>
            <div className="space-y-2">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Slug</label>
                <input
                  type="text"
                  value={product.slug}
                  onChange={(e) =>
                    setProduct({ ...product, slug: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Brand</label>
                <input
                  type="text"
                  value={product.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="text"
                  value={product.quantity}
                  onChange={(e) =>
                    setProduct({ ...product, quantity: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  value={product.image}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                  className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <button className="w-full block  py-2 bg-blue-400 rounded-sm text-white font-bold">Save</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPage;