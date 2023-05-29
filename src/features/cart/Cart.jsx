import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCartItemIds, selectCartItems } from "./cartSlice";
import { Link } from "react-router-dom";
import { selectAllProducts } from "../product/productSlice";
import AddToCart from "../utility/AddToCart";

export default function Cart({ showCart, setShowCart }) {
  const products = useSelector(selectAllProducts);
  const cartItemIds = useSelector(selectAllCartItemIds);
  const inCart = useSelector(selectCartItems);
  const cart = products.filter((item) => cartItemIds.includes(item.id));
  let total = 0;

  let content;
  let hide = showCart ? "" : "d-none";
  const cartClasses =
    "col-lg-3 col-md-4 sticky-sm-top border text-center " + hide;

  if (cart.length > 0) {
    const liClasses = "list-group-item fs-5 ";
    content = (
      <div className="mt-5">
        <h3 className="fs-4 text-center mb-3">Items</h3>
        <ul className="list-group list-group-flush text-start">
          <li className={liClasses}>
            <div className="d-flex justify-content-between align-items-center py-2">
              <p>Name</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
          </li>
          {cart.map((item, idx) => {
            let currentCount = inCart.find(x => x.productId === item.id).count;
            let currentPrice = currentCount * item.price;
            total += currentPrice;

            return (
              <li className={liClasses} key={idx}>
                <div className="d-flex justify-content-between align-items-center py-2 gap-1">
                  <div
                    className="gap-3 d-flex justify-content-between"
                    style={{ flexBasis: "70%" }}
                  >
                    <Link to={item.id + "/"} className="text-decoration-none">
                      {item.name}
                    </Link>
                    <AddToCart productId={item.id} />
                  </div>
                  <p className="m-0">₹{currentPrice}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <h3 className="mt-5">Total: ₹{total}</h3>
      </div>
    );
  } else {
    content = (
      <div className="mt-5">
        <img
          className="img-fluid px-5"
          src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
          alt=""
        />
        <h4>Your Cart is Empty</h4>
      </div>
    );
  }

  return (
    <div className={cartClasses}>
      <div className="d-flex align-items-center py-3 gap-3">
        <button
          onClick={() => setShowCart(false)}
          className="rounded-circle btn btn-light"
          style={{
            height: "40px",
            width: "40px",
            backgroundSize: "25px",
            backgroundPosition: "center",
            backgroundImage:
              "url('https://img.icons8.com/?size=512&id=9433&format=png')",
          }}
        />
        <p className="fs-4 fw-bold m-0">Your Cart</p>
      </div>
      {content}
    </div>
  );
}
