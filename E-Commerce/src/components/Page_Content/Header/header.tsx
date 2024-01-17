import "../Header/header.scss";
import {
  ticket_percent,
  right_arrow_icon,
  close_icon,
  Logo,
  search_icon,
  account_icon,
  cart_icon,
  wishlist_heart_icon,
  ham_instagram_icon,
  ham_facebook_icon,
  ham_youtube_icon,
} from "../../../assets/resources/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();

  return (
    <>
      <section className="header_container container-fluid py-1 d-flex justify-content-between bg-body-tertiary">
        <div className="container d-flex gap-2 justify-content-center align-items-baseline">
          <div>
            <img
              src={ticket_percent}
              alt="ticket_percent"
              className="img-fluid"
            />
            <span className="advertisement fw-bold fs-md-5 fs-lg-5 fs-xl-5 ps-1">
              30% off storewide-Limited time!{" "}
            </span>
          </div>

          <div className="d-none d-sm-block border-bottom border-primary fw-bold">
            <a href="#" className="text-decoration-none">
              Shop Now{" "}
            </a>
            <img src={right_arrow_icon} alt="right_arrow" />
          </div>
        </div>
        <div className="close_button">
          <img src={close_icon} alt="close_icon" />
        </div>
      </section>

      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div>
            <button
              className="navbar-toggler border-0  shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="d-flex gap-3 order-md-3">
            {openSearch && (
              <input
                type="search"
                className="rounded border-1 ps-2 border-secondary"
                placeholder="Search"
              />
            )}

            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="border-0 bg-transparent"
            >
              <img
                src={search_icon}
                alt="search_icon"
                id="sub_header_icons"
                className="d-none d-md-block img-fluid"
              />
            </button>
            <button className="border-0 bg-transparent">
              <Link to="/account">
                <img
                  src={account_icon}
                  alt="account_icon"
                  id="sub_header_icons"
                  className="d-none d-md-block img-fluid"
                />
              </Link>
            </button>
            <button className="border-0 bg-transparent">
              <Link to="/cart" className="d-flex text-decoration-none">
                <img
                  src={cart_icon}
                  alt="account_icon"
                  id="sub_header_icons"
                  className="img-fluid"
                />
                <div className="cart_count bg-dark rounded-circle text-white fw-medium  text-center d-flex justify-content-center align-items-center">
                  0
                </div>
              </Link>
            </button>
          </div>

          <div
            className="hamburger_container offcanvas offcanvas-start w-auto bg-body-tertiary"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div>
              <div className="offcanvas-header">
                <div className="d-flex flex-column gap-1 justify-content-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      <img className="navbar-brand" src={Logo} alt="Logo" />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <button className="border-0 bg-body-tertiary">
                      <input
                        type="search"
                        className="form-control shadow-none pl-3"
                        placeholder="Search"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-1 justify-content-center">
                <div className="offcanvas-body d-flex justify-content-sm-start justify-content-md-center">
                  <ul className="navbar-nav justify-content-start flex-grow-3 fs-6 fw-medium">
                    <li className="nav-item">
                      <Link
                        to="/home"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/home" ? "active" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/shop"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/shop" ? "active" : ""
                        }`}
                      >
                        Shop
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/product"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/product" ? "active" : ""
                        }`}
                      >
                        Product
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/blog"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/contact" ? "active" : ""
                        }`}
                      >
                        Contact us
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                  </ul>
                </div>
                <div className="d-md-none d-sm-block ">
                  <div className="cart container d-flex justify-content-between align-items-start border-bottom pb-1 pt-1">
                    <span className="h6">Cart</span>
                    <img src={cart_icon} alt="cart_icon" />
                  </div>
                  <div className="wishlist container d-flex justify-content-between align-items-start border-bottom pb-1 pt-1">
                    <span className="h6">wishlist</span>
                    <img src={wishlist_heart_icon} alt="wishlist" />
                  </div>
                  <button
                    type="button"
                    className="ham_button btn  btn-dark my-1 mx-3"
                  >
                    Sign in
                  </button>
                </div>
                <div className=" d-md-none d-sm-block ps-2">
                  <img src={ham_instagram_icon} alt="instagram_icon" />
                  <img src={ham_facebook_icon} alt="facebook-icon" />
                  <img src={ham_youtube_icon} alt="youtube_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

//d-none d-sm-block
