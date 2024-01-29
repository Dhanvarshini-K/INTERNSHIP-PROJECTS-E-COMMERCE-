import React, { useContext, useReducer, useState } from "react";
import "../ProductDisplay/ProductDisplay.scss"
import {
  chevron_right_icon,
  star,
  heart_icon,
  down_arrow,
  wishlist_like,
} from "../../../assets/resources/icons";
import {
  sofia_image,
  jensen_image,
  nicolas_image,
} from "../../../assets/resources/images";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const infoClick = () => {
    setShowInfo(!showInfo);
  };
  const reviewClick = () => {
    setShowReviews(!showReviews);
  };
  const initialState = { count: 0 };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
      default:
        return { count: state.count };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const { product } = props;
  const { addToCart, addToWishList } = useContext(ShopContext);
  const [likeWishList, setLikeWishList] = useState(false);

  return (
    <section className="container product_container">
      <div className="row d-flex">
        <div className="product_images col-lg-6 col-md-5 col-sm-12 d-flex gap-3 flex-column  ">
          <div>
            <img
              src={product.image}
              alt=""
              className="product_main_image img-fluid"
            />
          </div>
          <div className="product_side_images d-md-flex  gap-2 d-none d-md-block  gap-3 flex-sm-wrap flex-md-nowrap w-25">
            <img src={product.image} alt="" className="img-fluid" />
            <img src={product.image} alt="" className="img-fluid" />
            <img src={product.image} alt="" className="img-fluid" />
            <img src={product.image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6  col-sm-12">
          <div className="product_details card-body d-flex flex-column gap-2">
            <div className="d-flex flex-column py-3 align-items-baseline gap-3">
              <img src={star} alt="star" />
              <p className="fs-5 fw-medium text-dark">11 Reviews</p>
            </div>
            <span className="h2 fw-bold">{product.product_title}</span>
            <p>
              Buy one or buy a few and make every space where you sit more
              convenient. Ligt and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className="product_price d-flex gap-3 border-bottom">
              <span className="h5 fw-bold">{product.actual_price}</span>
              <span className="h5 text-muted fw-bold" id="actual_price">
                {product.discount_price}
              </span>
            </div>
            <p className="fw-bold">Measurements</p>
            <span className="h6">17 1/2 x 20 5/8 "</span>
            <div className="choose_color d-flex align-items-baseline">
              <p className="fw-bold">Choose color</p>
              <img src={chevron_right_icon} alt="chevron_right" />
            </div>
            <h5>Black</h5>
            <div className="product_color_variety d-flex gap-3 ">
              <img src={product.image} alt="black_tray" />
              <img src={product.image} alt="grey_tray" />
              <img src={product.image} alt="red_tray" />
              <img src={product.image} alt="white_tray" />
            </div>
            <div className="d-flex align-items-baseline justify-content-between flex-wrap flex-sm-wrap flex-md-nowrap">
              <div className="quantity_button border-1 border-dark border rounded  p-1 d-flex gap-3 ">
                <button
                  className="border-0 bg-transparent"
                  onClick={() => dispatch({ type: "increment" })}
                >
                  +
                </button>
                <span>{state.count}</span>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => dispatch({ type: "decrement" })}
                >
                  -
                </button>
              </div>
              <div className="wishlist_button">
                {likeWishList ? (
                  <button
                    type="button"
                    className=" btn btn-light d-flex gap-2  justify-content-center mt-3 pt-2 "
                    onClick={() => setLikeWishList(true)}
                  >
                    <img
                      src={wishlist_like}
                      alt="heart_icon"
                      className="heart_icon"
                    />
                    <span className="h6 fw-bold">Wishlist</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-light d-flex gap-2  justify-content-center mt-3 pt-2 "
                    onClick={() => {
                      addToWishList(product.id);
                      setLikeWishList(true);
                    }}
                  >
                    <img
                      src={heart_icon}
                      alt="heart_icon"
                      className="heart_icon"
                    />
                    <span className="h6 fw-bold">Wishlist</span>
                  </button>
                )}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-light d-flex gap-2 w-100 justify-content-center mt-3 pt-2 bg-dark "
              onClick={() => {
                addToCart(product.id);
              }}
          
            >
              <span className="h6 text-white">Add to Cart</span>
            </button>
            <div className="sku_and_category pt-4">
              <div className="sku d-flex justify-content-between fw-bold">
                <p>SKU</p>
                <span className="h6">1117</span>
              </div>
              <div className="category d-flex justify-content-between fw-bold">
                <p>CATEGORY</p>
                <span className="h6">Living Room, Bedroom</span>
              </div>
            </div>
            <div className="info_heading d-flex justify-content-between border-bottom">
              <span className="h5">Additional Info</span>
              <button className="bg-white border-0" onClick={infoClick}>
                <img src={down_arrow} alt="down_arrow" />{" "}
              </button>
            </div>
            {showInfo && (
              <div>
                <p className="fw-medium fs-5">Details</p>
                <p>
                  You can use the removable tray for serving. The design makes
                  it easy to put the tray back after use since you place it
                  directly on the table frame without having to fit it into any
                  holes.
                </p>
                <div className="packaging">
                  <p className="fw-medium fs-5">Packaging</p>
                  <h6>Width: 20 " Height: 1 ½ " Length: 21 ½ "</h6>
                  <h6>Weight: 7 lb 8 oz</h6>
                  <h6>Package(s): 1</h6>
                </div>
              </div>
            )}
            <div className="questions d-flex justify-content-between border-bottom">
              <span className="h5">Questions</span>
              <button className="bg-white border-0">
                <img src={down_arrow} alt="down_arrow" />
              </button>
            </div>

            <div className="reviews_list d-flex justify-content-between border-bottom">
              <span className="h5">Reviews(11)</span>
              <button className="bg-white border-0" onClick={reviewClick}>
                <img src={down_arrow} alt="down_arrow" />
              </button>
            </div>
            {showReviews && (
              <section>
                <div className="d-flex gap-2 p-3">
                  <div>
                    <img src={sofia_image} alt="review_image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="h4">Sofia Harvertz</span>
                    <img src={star} alt="star" className="star" />
                    <p>
                      I bought it 3 weeks ago and now come back just to say
                      “Awesome Product”. I really enjoy it. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupt et quas
                      molestias excepturi sint non provident.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 p-3">
                  <div>
                    <img src={nicolas_image} alt="review_image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="h4">Nicolas Jensen</span>
                    <img src={star} alt="star" className="star" />
                    <p>
                      I bought it 3 weeks ago and now come back just to say
                      “Awesome Product”. I really enjoy it. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupt et quas
                      molestias excepturi sint non provident.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 p-3">
                  <div>
                    <img src={jensen_image} alt="review_image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="h4">Jensen</span>
                    <img src={star} alt="star" className="star" />
                    <p>
                      I bought it 3 weeks ago and now come back just to say
                      “Awesome Product”. I really enjoy it. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupt et quas
                      molestias excepturi sint non provident.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
