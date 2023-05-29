import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../utility/AddToCart";

export default function ProductCard({ product }) {

  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={product.imageUrl}
          className="card-img-top px-5 py-4 img-fluid"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <Link to={product.id + "/"} className="card-title fw-bold fs-5">
            {product.name}
          </Link>
          <p>By: {product.manufacturer}</p>
          <p className="fw-bold mt-auto">Stock: {product.count}</p>
          <div className="d-flex gap-3 align-items-center">
            <h5 className="m-0">₹{product.price}</h5>
            <AddToCart productId={product.id} />
          </div>
        </div>
      </div>
    </>
  );
}
