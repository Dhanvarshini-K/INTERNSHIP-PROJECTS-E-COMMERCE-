import "../Shop/shop.css";
import chevron_right_icon from "../../assets/icons/chevron_right_icon.svg";
import filter_icon from "../../assets/icons/filter_icon.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";
import first_page_first_icon from "../../assets/icons/first_page_first_icon.svg";
import first_page_second_icon from "../../assets/icons/first_page_second_icon.svg";
import first_page_third_icon from "../../assets/icons/first_page_third_icon.svg";
import first_page_fourth_icon from "../../assets/icons/first_page_fourth_icon.svg";
import { useReducer, useState } from "react";
import ProductItem from "../Product_Card/product";

const ShopMain = () => {



  const shopReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'THREE':
        return 'row row-cols-1 row-cols-md-3 fw-bold fs-6';
      case 'FOUR':
        return 'row row-cols-1 row-cols-md-4';
      case 'TWO':
        return 'row row-cols-1 row-cols-md-2';
      case 'ONE':
        return 'row row-cols-1 row-cols-md-1';
      default:
        return state;
    }
  };
  const [shopView, dispatch] = useReducer(shopReducer, 'row-cols-md-3')
  const [editFilter, setEditFilter] = useState(true);

  return (
    <>


      <section className="shop_bg_image">
        <div className="carousel-item active d-flex flex-column align-items-center pt-5 pt-sm-5 gap-2 mt-lg-5">
          <div className="carosel_caption fw-medium d-flex gap-3">
            <a href="#" className="text-decoration-none text-dark fw-bold">Home</a>
            <img src={chevron_right_icon} alt="chevron_right_icon" />
            <a href="#" className="text-decoration-none text-dark fw-bold">Shop</a>
          </div>
          <span className="h1 fw-bold">Shop Page</span>
          <p>Let's design the place you always imagined.</p>
        </div>
      </section>

      <section className=" container d-flex py-5 border">
        <div className="row ">
          {editFilter &&
            <aside id="filter_list" className="filter_list col-sm-4 col-md-3 col-lg-2 d-flex flex-column gap-5  d-none d-md-block">
              <div className="filter_container d-flex align-items-start gap-2">
                <img src={filter_icon} alt="filter" />
                <span className='h4 fw-bold'>Filter</span>
              </div>
              <span className='h4 fw-bold'>CATEGORIES</span>
              <div className="categories_list navbar d-flex align-items-start fw-medium fs-5 gap-2 flex-wrap">
                <a className="nav-link" href="#">All Rooms</a>
                <a className="nav-link active" aria-current="page" href="#">Living Room</a>
                <a className="nav-link" href="#">Bedroom</a>
                <a className="nav-link" href="#">Kitchen</a>
                <a className="nav-link" href="#">Bathroom</a>
                <a className="nav-link" href="#">Dinning</a>
                <a className="nav-link" href="#">Outdoor</a>
              </div>
              <span className='h4 fw-bold'>PRICE</span>
              <div className="d-flex flex-column gap-3">
                <div className="form-check-inline d-flex justify-content-between" >
                  <label className="form-check-label fw-medium">All Price</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                </div>
                <div className="form-check-inline d-flex justify-content-between">
                  <label className="form-check-label fw-medium">$0.00 - 99.99</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                </div>
                <div className="form-check-inline d-flex justify-content-between">
                  <label className="form-check-label fw-medium" >$100.00 - 199.99</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                </div>
                <div className="form-check-inline d-flex justify-content-between" >
                  <label className="form-check-label fw-medium">$200.00- 299.99</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                </div>
                <div className="form-check-inline d-flex justify-content-between">
                  <label className="form-check-label fw-medium">$300.00 - 399.99</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                </div>
                <div className="form-check-inline d-flex justify-content-between" >
                  <label className="form-check-label fw-medium">$400.00+</label>
                  <input className="form-check-input custom-control-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                </div>
              </div>
            </aside>
          }


          <div className="category_title container-fluid col-sm-8 col-md-9 col-lg-10 d-flex flex-column gap-5">
            <div className="d-flex justify-content-between">
              <span className="h2 fw-bold">Living Room</span>
              <div className="d-flex gap-5">
                <div className="d-flex gap-2 align-items-baseline">
                  <p className="text-center fs-5">Sort by</p>
                  <img src={down_arrow} alt="down_arrow" className='down_arrow' />
                </div>
                <div className="d-flex">
                  <button onClick={() => dispatch({ type: 'THREE' })} className="border-1">
                    <img src={first_page_first_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => {
                    dispatch({ type: 'FOUR' });
                    setEditFilter(false);
                  }}
                    className="border-1">
                    <img src={first_page_second_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => dispatch({ type: 'TWO' })} className="border-1">
                    <img src={first_page_third_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => dispatch({ type: 'ONE' })} className="border-1">
                    <img src={first_page_fourth_icon} alt="first_page_icon" />
                  </button>
                </div>
              </div>
            </div>
            <ProductItem view={shopView} layout_value={"row"} />
          </div>
        </div>
      </section>


    </>
  )
}

export default ShopMain;




