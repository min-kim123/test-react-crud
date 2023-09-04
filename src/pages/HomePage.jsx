import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_API_URL } from "../App";
import Table from "../components/Table";
import Card from "../components/Card";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedView, setSelectedView] = useState("table-view");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${VITE_API_URL}/api/products`);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const VIEWS = {
    "table-view": <Table products={products} getProducts={getProducts} />,
    "card-view": <Card products={products} getProducts={getProducts} />,
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <label>
        <select
          name="view"
          defaultValue="apple"
          className="mt-4 block px-2 py-1 border border-gray-300 text-gray-900 text-sm rounded-md"
          onChange={(e) => setSelectedView(e.target.value)}
        >
          <option value="table-view">Table View</option>
          <option value="card-view">Card View</option>
        </select>
      </label>

      {isLoading ? (
        "Loading"
      ) : (
        <>
          {products.length > 0 /*if there are any products */ ? (
            <>{VIEWS[selectedView]}</>
          ) : (
            <div className="mt-4 bg-gray-800 text-white font-serif p-4">
              There is no product
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Homepage;