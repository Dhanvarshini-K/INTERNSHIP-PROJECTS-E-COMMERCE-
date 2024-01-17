import { sofia_image } from "../../../assets/resources/images";
import "../Account/account.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext";

const AccountProfile: React.FC = () => {
  const { user, logoutUser } = useAuth();

  return (
    <section className="account_profile rounded d-flex align-items-center flex-column p-3 py-5 gap-4 m-2">
      <div className="d-flex flex-column align-items-center">
        <img src={sofia_image} alt="sofia_image" className="img-fluid w-25" />
        <span className="h4 fw-bold">Sofia Hervertz</span>
      </div>
      <div className="account_links d-md-flex flex-column gap-3 d-none d-md-block">
        <Link
          to="/account"
          className=" text-decoration-none text-secondary fw-bold fs-5"
        >
          Account
        </Link>
        <Link
          to="/address"
          className=" text-decoration-none text-secondary fw-bold fs-5"
        >
          Address
        </Link>
        <Link
          to="/order"
          className=" text-decoration-none text-secondary fw-bold fs-5"
        >
          Orders
        </Link>
        <a
          href="#"
          className=" text-decoration-none text-secondary fw-bold fs-5"
        >
          Wishlist
        </a>
        <button
          onClick={logoutUser}
          className=" border-0 bg-transparent text-secondary fw-bold fs-5"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default AccountProfile;
