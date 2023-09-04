import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../App";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      slug === "" ||
      category === "" ||
      brand === "" ||
      description === "" ||
      quantity === "" ||
      price === "" ||
      image === ""
    ) {
      alert("Please fill out all input completely");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/api/products`, {
        name: name,
        slug: slug,
        category: category,
        brand: brand,
        description: description,
        quantity: quantity,
        price: price,
        image: image,
      });

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <div className="font-semibold text-xl mb-4 block text-center">New Product</div>
      <form onSubmit={saveProduct}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>
            <label>Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"

            ></input>
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>
            <label>Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>

          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border p-1 text-gray-600 rounded focus:outline-none  focus:border-blue-200"
            ></input>
          </div>
          <div>{!isLoading && <button className="w-full block  py-2 bg-blue-400 rounded-sm text-white font-bold">Save</button>}</div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;