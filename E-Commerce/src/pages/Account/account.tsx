import { useParams } from "react-router-dom";
import AccountDetails from "../../components/Page_Content/Account/account_details";
import Address from "../../components/Page_Content/Account/address";
import AccountProfile from "../../components/Page_Content/Account/account_profile";
import OrderHistory from "../../components/Page_Content/Account/order";
import WishList from "../../components/Page_Content/Account/wishlist";
import "../../pages/Account/account.scss"
const AccountPage = () => {
  const { activepage } = useParams();

  // alert(activepage)
  return (
    <section className="accountPage">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <AccountProfile activepage={activepage} />
        </div>
        <div className="col-lg-7 col-md-6">
          {activepage === "account" && <AccountDetails />}
          {activepage === "address" && <Address />}
          {activepage === "order" && <OrderHistory/>}
          {activepage === "wishlist" && <WishList/>}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
