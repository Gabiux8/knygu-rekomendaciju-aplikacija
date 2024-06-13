import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/Firebase";

const Navbar = ({ darkTheme, darkText }) => {
  const user = useContext(UserContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showLoginAndSignUp = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link
        to="/books"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Knygos
      </Link>
      <Link
        to="/login"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Prisijungti
      </Link>
      <Link
        to="/signup"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Registruotis
      </Link>
    </nav>
  );

  const showLogoutAndCart = (
    <nav className="nav-links-container">
      <Link to="/" className={`${darkText ? "nav-links-dark" : "nav-links"}`}>
        Home
      </Link>
      <Link
        to="/books"
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Books
      </Link>
      <a
        onClick={handleLogout}
        className={`${darkText ? "nav-links-dark" : "nav-links"}`}
      >
        Logout
      </a>
    </nav>
  );

  return (
    <section
      className={`navbar-container ${
        darkTheme ? "background-dark relative" : "background-transparent"
      } `}
    >
      <div className="container flex justify-between align-center">
        <Link to="/" className="logo">
          Knygų <span className="text-primary">pasaulis</span>
        </Link>

        {user ? showLogoutAndCart : showLoginAndSignUp}
      </div>
    </section>
  );
};

export default Navbar;
