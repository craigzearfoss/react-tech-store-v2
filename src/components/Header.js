import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import CartLink from "./Cart/CartLink";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/login">login</Link>
            </li>
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
