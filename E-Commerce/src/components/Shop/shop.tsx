import "../Shop/shop.css";
import chevron_right_icon from "../../assets/icons/chevron_right_icon.svg";
import filter_icon from "../../assets/icons/filter_icon.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";
import first_page_first_icon from "../../assets/icons/first_page_first_icon.svg";
import first_page_second_icon from "../../assets/icons/first_page_second_icon.svg";
import first_page_third_icon from "../../assets/icons/first_page_third_icon.svg";
import first_page_fourth_icon from "../../assets/icons/first_page_fourth_icon.svg";
import ProductItem from "../Product_Card/product";
import { useReducer, useState } from "react";

const ShopMain = () => {


  const shopReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'THREE':
        return 'row row-cols-2 row-cols-md-3';
      case 'FOUR':
        return 'row row-cols-2 row-cols-md-4';
      case 'TWO':
        return 'row row-cols-2 row-cols-md-2 d-flex';
      case 'ONE':
        return 'row row-cols-1 row-cols-md-1';
      default:
        return state;
    }
  };
  const [shopView, dispatch] = useReducer(shopReducer, 'row-cols-md-3');
  const [editFilter, setEditFilter] = useState(true);
  const[showMore,setShowMore] = useState<Boolean>(false);


  return (
    <>
      <section className="shop_bg_image">
        <div className="carousel-item active d-flex flex-column align-items-center px-1 pt-5 pt-sm-5 gap-2 mt-lg-5 text-center">
          <div className="carosel_caption fw-medium d-flex gap-3">
            <a href="#" className="text-decoration-none text-dark fw-bold">Home</a>
            <img src={chevron_right_icon} alt="chevron_right_icon" />
            <a href="#" className="text-decoration-none text-dark fw-bold">Shop</a>
          </div>
          <span className="h1 fw-bold">Shop Page</span>
          <p className="text-center">Let's design the place you always imagined.</p>
        </div>
      </section>


      <section className="px-4 py-4" >
        <div className="row">
          {editFilter &&
            <div className="col-lg-2 col-md-3 py-2">
              <div className="filter_container d-flex align-items-start gap-2">
                <img src={filter_icon} alt="filter" />
                <span className='h4 fw-bold'>Filter</span>
              </div>
              <div className="d-none d-md-block">
                <span className='h4 fw-bold'>CATEGORIES</span>
                <div className="categories_list navbar d-flex flex-column align-items-start fw-medium fs-5 gap-2 flex-nowrap pb-5">
                  <a className="nav-link" href="#">All Rooms</a>
                  <a className="nav-link active" aria-current="page" href="#">Living Room</a>
                  <a className="nav-link" href="#">Bedroom</a>
                  <a className="nav-link" href="#">Kitchen</a>
                  <a className="nav-link" href="#">Bathroom</a>
                  <a className="nav-link" href="#">Dinning</a>
                  <a className="nav-link" href="#">Outdoor</a>
                </div>
                <span className='h4 fw-bold'>PRICE</span>
                <div className="d-flex flex-column gap-3 ">
                  <div className="form-check-inline  d-flex justify-content-between" >
                    <label className="form-check-label fw-medium">All Price</label>
                    <input className="form-check-input " type="checkbox" id="inlineCheckbox1" value="option1" />
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
              </div>
            </div>
          }
          {/* <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div> */}

          <div className="col-lg-10 col-md-9 d-flex flex-column gap-2 py-2">
            <div className="shoplist_container d-flex justify-content-between px-3 gap-2 flex-wrap">
              <span className="livingroom_container h2 fw-bold">LivingRoom</span>
              <div className="d-flex gap-5 align-items-start">
                <div className="sorting_container d-flex gap-2 align-items-baseline">
                  <p className="text-center fw-bold">Sortby</p>
                  <img src={down_arrow} alt="down_arrow" className='down_arrow' />
                </div>
                <div className="d-flex">
                  <button onClick={() => {
                    dispatch({ type: 'THREE' });
                    setEditFilter(true)
                  }} className="border-1 d-none d-md-block">
                    <img src={first_page_first_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => {
                    dispatch({ type: 'FOUR' });
                    setEditFilter(false);
                  }}
                    className="border-1 d-none d-md-block ">
                    <img src={first_page_second_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => {
                    dispatch({ type: 'TWO' });
                    setEditFilter(true)
                  }} className="border-1">
                    <img src={first_page_third_icon} alt="first_page_icon" />
                  </button>
                  <button onClick={() => {
                    dispatch({ type: 'ONE' });
                    setEditFilter(true)
                  }} className="border-1">
                    <img src={first_page_fourth_icon} alt="first_page_icon" />
                  </button>
                </div>
              </div>
            </div>

            <ProductItem view={shopView} layout_value={"row"} product={showMore} />
          </div>
        </div>
      </section>

      <div className="p-4 d-flex justify-content-center">
        {showMore ? (<button onClick={() => setShowMore(false)} className="btn shadow-none bg-white btn-rounded border-dark" >Show Less</button>) :
          <button onClick={() => setShowMore(true)} className="btn shadow-none bg-white btn-rounded border-dark">Show More</button>}
      </div>
    </>
  )
}
export default ShopMain;


