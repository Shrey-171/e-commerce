import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ setShowCart }) {
  return (
    <nav className="d-flex align-items-center w-100 text-bg-dark py-3 px-4 sticky-top">
      <h2 className="m-0 me-4">E-Commerce</h2>
      <ul className="m-0 p-0">
        <NavLink to={"/"} className="text-decoration-none btn btn-dark">Home</NavLink>
      </ul>
      <button className="btn btn-info ms-auto" onClick={()=> setShowCart(true)}>Open Cart</button>
    </nav>
  );
}
