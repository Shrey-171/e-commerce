import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "./productSlice";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector(selectAllProducts);
  let content = products.map((x, idx) => <ProductCard key={idx} product={x} />);
  
  return (
    <section className="p-0">
      <div className="d-flex gap-3 my-5 mx-2 flex-wrap justify-content-center">
        {content}
      </div>
    </section>
  );
}
