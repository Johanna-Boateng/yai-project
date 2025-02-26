import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="lg:px-32 flex justify-center fixed w-screen">
      <article className="container flex justify-between items-center py-6 ">
        <div className="bg-green-400 rounded-4xl font-bold text-base px-4 py-2">
          LOGO
        </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
        </div>
      </article>
    </nav>
  );
};

export default Nav;
