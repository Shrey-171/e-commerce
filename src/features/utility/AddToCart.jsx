import React from "react";
import { reduceProductStock, selectProductById, addProductToStock } from "../product/productSlice";
import { addProductToCart, selectCartItemById, reduceProductFromCart } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCart({ productId }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => selectCartItemById(state, productId))
  const product = useSelector(state => selectProductById(state, productId))

  const buttonSize = {height: "30px", width: "30px"}
  const buttonStyles = "d-flex justify-content-center align-items-center rounded-circle fs-4 pb-2 btn "
  let content = (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleClickAdd}
      disabled={product.count < 1}
    >
      Add to Cart
    </button>
  );

  function handleClickAdd() {
    dispatch(reduceProductStock({ id: productId }));
    dispatch(
      addProductToCart({
        productId: productId
      })
    );
  }

  function handleClickRemove() {
    dispatch(reduceProductFromCart({ productId }));
    dispatch(addProductToStock({ productId }));
  }

  if (inCart) {
    content = 
    <div className="d-flex align-items-center gap-3" style={{maxWidth: "100px"}}>
      <button className= { buttonStyles + "btn-danger"} style={buttonSize} onClick={handleClickRemove}>-</button>
      <p className="m-auto fs-5">{inCart.count}</p>
      <button className= { buttonStyles + "btn-success"} style={buttonSize} disabled={product.count < 1} onClick={handleClickAdd}>+</button>
    </div>;
  }

  return <>{content}</>;
}
