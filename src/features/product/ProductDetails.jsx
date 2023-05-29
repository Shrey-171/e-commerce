import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { reduceProductStock } from "./productSlice";
import { addProductToCart } from "../cart/cartSlice";
import AddToCart from "../utility/AddToCart";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.product.find((x) => x.id === Number(productId))
  );

  // function handleClick() {
  //   dispatch(reduceProductStock({ id: product.id }));
  //   dispatch(
  //     addProductToCart({
  //       productId: product.id,
  //       productName: product.name,
  //       price: product.price,
  //     })
  //   );
  // }

  return (
    <section className="col p-5 d-flex flex-column align-items-center">
      <img
        src={product.imageUrl}
        className="img-fluid w-25"
        alt=""
        style={{ maxWidth: "300px" }}
      />
      <h1 className="mb-5 text-center">{product.name}</h1>
      <div className="fs-5 w-75 mx-auto">
        <p>
          <span className="fw-bold">Description</span>
          {product.description}
        </p>
        <p>Manufactured By: {product.manufacturer}</p>
        <p className="fw-bold">Stock: {product.count}</p>
        <h4>Price: ₹{product.price}</h4>
        <div className="d-flex align-items-center gap-2">
          <p className="m-0">In Cart:</p>
          <AddToCart productId={product.id} />
        </div>
      </div>
    </section>
  );
}
