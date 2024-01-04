import { useState } from "react";
import sofia from "../../assets/images/sofia_image.svg"
import "../Account/account.css"
import { Link } from "react-router-dom";

const AccountProfile:React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };


  return (
    <section className="account_profile rounded d-flex align-items-center flex-column p-3 py-5 gap-4 m-2">
      <div className="d-flex flex-column align-items-center">
        <img src={sofia} alt="sofia_image" className="img-fluid w-25" />
        <span className="h4 fw-bold">Sofia Hervertz</span>
      </div>
      <div className="account_links d-md-flex flex-column gap-3 d-none d-md-block">
        <Link to="/account" className=" text-decoration-none text-secondary fw-bold fs-5">Account</Link>
        <Link to="/address" className=" text-decoration-none text-secondary fw-bold fs-5">Address</Link>
        <Link to="/order" className=" text-decoration-none text-secondary fw-bold fs-5">Orders</Link>
        <a href="#" className=" text-decoration-none text-secondary fw-bold fs-5">Wishlist</a>
        <a href="#" className=" text-decoration-none text-secondary fw-bold fs-5">Logout</a>
      </div>
 
      <div className="dropdown d-sm-block d-md-none">
        <button className="fw-bold btn border-2 border-dark w-100 dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedOption}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><Link to="/account" className="dropdown-item" onclick={()=>setSelectedOption("Account")}>Account</Link></li>
          <li><Link to="/address" className="dropdown-item"  onclick={()=>setSelectedOption("Address")}>Address</Link></li>
          <li><Link to="/order" className="dropdown-item"  onclick={()=>setSelectedOption("Order")}>Orders</Link></li>
          <li><Link className="dropdown-item"  onclick={()=>setSelectedOption("Wishlist")}>Wishlist</Link></li>
          <li><Link className="dropdown-item"  onclick={()=>setSelectedOption("Logout")}>Logout</Link></li>
        </ul>
      </div> 
        {/* <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" id="ecommerceDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedOption || 'Select an option'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="ecommerceDropdown">
        <li><Link to="/account" className="dropdown-item" onClick={() => handleOptionClick("Men's Clothing")}>Men's Clothing</Link></li>
        <li><Link to="#" className="dropdown-item" onClick={() => handleOptionClick("Women's Clothing")}>Women's Clothing</Link></li>
        <li><Link to="#" className="dropdown-item" onClick={() => handleOptionClick("Electronics")}>Electronics</Link></li>
        <li><Link to="#" className="dropdown-item" onClick={() => handleOptionClick("Shoes")}>Shoes</Link></li>
        <li><Link to="#" className="dropdown-item" onClick={() => handleOptionClick("Accessories")}>Accessories</Link></li>
      </ul>
      {selectedOption && (
        <p className="mt-2">Selected category: {selectedOption}</p>
      )}
    </div> */}


    </section>
  )
}

export default AccountProfile;