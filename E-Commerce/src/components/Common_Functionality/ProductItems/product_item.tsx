import { useState } from "react";
import { addwishlist_icon } from "../../../assets/resources/icons";
import "../../Common_Functionality/ProductItems/product_item.scss";

const Item = (props: any) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section>
        <div
          className="product_category pb-5 pt-5"
          key={props.id}
          onMouseOver={() => setSelectedImage(props.id)}
          onMouseOut={() => setSelectedImage(null)}
        >
          <div className="product_image_container">
            <img
              src={props.image}
              alt="product_image"
              className="product_image"
              style={{ width: "-webkit-fill-available" }}
            />
            <div className="product_discount carousel-item active d-flex justify-content-between pt-3 ps-3">
              <div className="d-flex flex-column">
                <span className="h6 bg-white px-2 py-1 rounded-1 text-dark ">
                  {props.discount_title}
                </span>
                <span className="h6 bg-success px-2 py-1 rounded-1 text-white">
                  {props.discount_percent}
                </span>
              </div>
              <div>
                {selectedImage === props.id && (
                  <img src={addwishlist_icon} alt="addwishlist_icon" />
                )}
              </div>
            </div>
          </div>
          <div className="add_to_cart carousel-item active d-flex justify-content-center">
            {selectedImage === props.id && (
              <button className=" cart_button btn btn-dark ">
                Add to Cart
              </button>
            )}
          </div>
          <div className="product_content d-flex flex-column pt-3">
            <img
              src={props.product_reviews}
              alt="reviews"
              className="review_image"
            />
            <span className="h5 fw-bold">{props.product_title}</span>
            <div className="product_price d-flex gap-3">
              <span className="h6 fw-medium">{props.actual_price}</span>
              <span className="h6 text-decoration-line-through text-secondary">
                {props.discount_price}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Item;
