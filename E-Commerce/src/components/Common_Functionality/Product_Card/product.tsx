import React, { useState } from "react";
import "../Product_Card/product.css"
import { productList } from "../../Data/product_card";
import { addwishlist_icon } from "../../../assets/resources/icons";

interface Props {
    view: String,
    layout_value: String,
    product: Boolean
}

const ProductItem = ({ view, layout_value, product }: Props) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const RenderProduct = productList.map((item:any) => {
        return (
            <div className="product_category  pt-5" key={item.id} onMouseOver={() => setSelectedImage(item.id)}
                onMouseOut={() => setSelectedImage(null)}>
                <div className="image_container">
                    <img src={item.image} alt="product_image" className="product_image" style={{ width: "-webkit-fill-available" }} />
                    <div className=" product_discount carousel-item active d-flex justify-content-between pt-3 ps-3">
                        <div className="d-flex flex-column">
                            <span className="h6 bg-white px-2 py-1 rounded-1 text-dark">{item.discount_title}</span>
                            <span className="h6 bg-success px-2 py-1 rounded-1 text-white">{item.discount_percent}</span>
                        </div>

                        <div>
                            {
                                selectedImage === item.id && <img src={addwishlist_icon} alt="addwishlist_icon" />
                            }
                        </div>
                    </div>
                </div>
                <div className="add_to_cart carousel-item active d-flex justify-content-center">
                    {selectedImage === item.id &&

                        <button className=" cart_button btn btn-dark ">Add to Cart</button>
                    }
                </div>
                <div className="product_content d-flex flex-column pt-3">
                    <img src={item.product_reviews} alt="reviews" className="review_image" />
                    <span className="fw-bold">{item.product_title}</span>
                    <div className="product_price d-flex gap-3">
                        <span className="h6 fw-medium">{item.actual_price}</span>
                        <span className="h6 text-decoration-line-through text-secondary">{item.discount_price}</span>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <React.Fragment>
            <h1></h1>
            <section className="product_container container ">
                <div className="product_list d-flex gap-3 pb-5 pt-2 ">
                    <div className={`${layout_value} ${view}`}>
                        {RenderProduct}
                        {product && RenderProduct}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ProductItem;




