/* eslint-disable react/prop-types */

import TableProduct from "./TableProduct";

const Table = ({ products, getProducts }) => {
  return (
    <>
      <div className="mt-6 mx-4 overflow-auto antialiased shadow-md bg-white">
        <header className="px-5 py-4 border-b ">
          <h2 className="font-semibold text-gray-800">Products</h2>
        </header>
        <div className="p-3 overflow-x-auto">
          <table className="bg-white ">
            <thead className="text-xs font-semibold uppercase text-gray-600 bg-gray-100">
              <td className="w-10 px-4 py-2">Image</td>
              <td className="text-left px-4 py-2 w-40">Name</td>

              <td className="text-left px-4 py-2 ">Units</td>
              <td className="text-left px-4 py-2 w-10">Price</td>
              <td className="text-left px-4 py-2 w-30">Slug</td>
              <td className="text-left px-4 py-2 w-30">Category</td>
              <td className="text-left px-4 py-2 w-30">Brand</td>
              <td className="text-left px-4 py-2 w-50">Description</td>
              <td className=" text-left px-4 py-2 w-30">ID</td>
              <td className="text-left px-4 py-2 w-30">Action</td>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {products.map((product, index) => {
                return (
                  <>
                    <TableProduct
                      key={index}
                      product={product}
                      getProducts={getProducts}
                    />
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;