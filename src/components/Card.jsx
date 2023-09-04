import CardProduct from "./CardProduct";

/* eslint-disable react/prop-types */
const Card = ({ products, getProducts }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-5 antialiased">
      {products.map((product, index) => {
        return (
          <>
            <CardProduct
              key={index}
              product={product}
              getProducts={getProducts}
            />
          </>
        );
      })}
    </div>
  );
};

export default Card;