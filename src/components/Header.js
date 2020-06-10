import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "../components/LoginLink";
import Login from "../pages/Login";

export default function Header() {
  const { user } = React.useContext(UserContext);
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
            {user.token && (
              <li>
                <Link to="/checkout" />
              </li>
            )}
          </div>
          <div>
            <CartLink />
            <LoginLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
