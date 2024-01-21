import React, { useContext, useReducer, useState } from "react";
import { ShopContext } from "../Context/shopContext";
import "../../Page_Content/ShopCategory/shop_category.scss";
import {
  filter_icon,
  down_arrow,
  first_page_first_icon,
  first_page_second_icon,
  first_page_third_icon,
  first_page_fourth_icon,
} from "../../../assets/resources/icons";
import { Link, useLocation } from "react-router-dom";
import Item from "../../Common_Functionality/ProductItems/product_item";

const ShopCategory = (props: { category: string }) => {
  const shopReducer = (state: any, action: any) => {
    switch (action.type) {
      case "THREE":
        return "row row-cols-2 row-cols-md-3";
      case "FOUR":
        return "row row-cols-2 row-cols-md-4";
      case "TWO":
        return "row row-cols-2 row-cols-md-2 d-flex";
      case "ONE":
        return "row row-cols-1 row-cols-md-1";
      default:
        return state;
    }
  };
  const gridHeadingReducer = (state: boolean, action: any) => {
    switch (action.type) {
      case "Show":
        return true;
      case "Hide":
        return false;
      default:
        return state;
    }
  };

  const [showMore, setShowMore] = useState<Boolean>(false);
  const [shopView, dispatch] = useReducer(shopReducer, "row-cols-md-3");
  const [editFilter, setEditFilter] = useState(true);
  const [gridHeading, dispatchGridHeading] = useReducer(
    gridHeadingReducer,
    false
  );
  const location = useLocation();
  const shoplocation = useLocation();
  const { hash, pathname, search } = shoplocation;
  const { productList } = useContext(ShopContext);
  const { category } = props;

  const renderProduct = productList.map((item: any, index: any) => {
    if (!category || category === item.category) {
      console.log("category:", category);
      console.log("item:", item.category);
      return (
        <Item
          key={index}
          id={item.id}
          product_title={item.product_title}
          image={item.image}
          actual_price={item.actual_price}
          discount_price={item.discount_price}
          discount_title={item.discount_title}
          discount_percent={item.discount_percent}
          product_reviews={item.product_reviews}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <React.Fragment>
      <section className="px-4 py-4">
        <div className="row d-flex justify-content-center">
          {editFilter && !gridHeading && (
            <div className="col-lg-2 col-md-3 py-2 d-flex flex-column gap-4">
              <div className="filter_container d-flex align-items-start gap-2">
                <img src={filter_icon} alt="filter" />
                <button className="border-0 bg-transparent" >
                  <span className="h4 fw-bold">Filter</span>
                </button>
              </div>
              <div className="d-none d-md-block d-md-flex flex-md-column gap-3">
                <span className="h4 fw-bold">CATEGORIES</span>
            
                  <div className="categories_list navbar d-flex flex-column align-items-start fw-medium fs-5 gap-2 flex-nowrap pb-5">
                    <Link
                      className={`nav-link  ${
                        location.pathname === "/allrooms" ||
                        location.pathname === "/shop"
                          ? "active"
                          : ""
                      }`}
                      to="/allrooms"
                    >
                      All Rooms
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/livingroom" ? "active" : ""
                      }`}
                      to="/livingroom"
                    >
                      Living Room
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/bedroom" ? "active" : ""
                      }`}
                      to="/bedroom"
                    >
                      Bedroom
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/kitchen" ? "active" : ""
                      }`}
                      to="/kitchen"
                    >
                      Kitchen
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/bathroom" ? "active" : ""
                      }`}
                      to="/bathroom"
                    >
                      Bathroom
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/dinning" ? "active" : ""
                      }`}
                      to="/dinning"
                    >
                      Dinning
                    </Link>
                    <Link
                      className={`nav-link ${
                        location.pathname === "/outdoor" ? "active" : ""
                      }`}
                      to="/outdoor"
                    >
                      Outdoor
                    </Link>
                  </div>
              
                <span className="h4 fw-bold">PRICE</span>
                <div className="d-flex flex-column gap-3 ">
                  <div className="form-check-inline  d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      All Price
                    </label>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $0.00 - 99.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $100.00 - 199.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $200.00- 299.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $300.00 - 399.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $400.00+
                    </label>
                    <input
                      className="form-check-input custom-control-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-lg-10 col-md-9 d-flex flex-column gap-2 py-2 ">
            <div className="shoplist_container px-3 gap-2 flex-wrap">
              <div className="sortby_container d-flex justify-content-between flex-xs-wrap flex-md-nowrap">
                {!gridHeading && (
                  <span className="livingroom_container h2 fw-bold">
                    {pathname === "/allrooms" || pathname === "/shop"
                      ? "All Rooms"
                      : category}
                  </span>
                )}
                {gridHeading && (
                  <section className="container d-flex gap-4 ps-5 flex-wrap">
                    <div className="d-flex flex-column">
                      <span className="h5 text-secondary fw-bold">
                        Categories
                      </span>
                      <select className="p-1 rounded shadow-none">
                        <option>AllRooms</option>
                        <option>Living Room</option>
                        <option>BedRoom</option>
                        <option>Kitchen</option>
                        <option>BathRoom</option>
                        <option>Dinning</option>
                        <option>Outdoor</option>
                      </select>
                    </div>

                    <div className="d-flex flex-column">
                      <span className="h5 text-secondary fw-bold">Price</span>
                      <select className="p-1 rounded shadow-none">
                        <option>All Price</option>
                        <option>$0.00 - 99.99</option>
                        <option>$100.00 - 199.99</option>
                        <option>$200.00- 299.99</option>
                        <option>$300.00 - 399.99</option>
                        <option>$400.00+</option>
                      </select>
                    </div>
                  </section>
                )}
                <div className="d-flex align-items-start gap-2">
                  <div className="sorting_container d-flex gap-2 align-items-baseline">
                    <p className="text-center fw-bold">Sortby</p>
                    <img
                      src={down_arrow}
                      alt="down_arrow"
                      className="down_arrow"
                    />
                  </div>
                  <div className="d-flex">
                    <button
                      onClick={() => {
                        dispatch({ type: "THREE" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Hide" });
                      }}
                      className="border-1 d-none d-md-block"
                    >
                      <img src={first_page_first_icon} alt="first_page_icon" />
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "FOUR" });
                        setEditFilter(false);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1 d-none d-md-block "
                    >
                      <img src={first_page_second_icon} alt="first_page_icon" />
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "TWO" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1"
                    >
                      <img src={first_page_third_icon} alt="first_page_icon" />
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "ONE" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1"
                    >
                      <img src={first_page_fourth_icon} alt="first_page_icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${shopView}`}>
              {renderProduct}
              {showMore ? renderProduct : null}
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 d-flex justify-content-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="btn shadow-none bg-white btn-rounded border-dark"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ShopCategory;
