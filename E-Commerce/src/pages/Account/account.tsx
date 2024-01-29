import { useParams } from "react-router-dom";
import AccountDetails from "../../components/Page_Content/Account/AccountDetails";
import Address from "../../components/Page_Content/Account/Address";
import AccountProfile from "../../components/Page_Content/Account/AccountProfile";
import OrderHistory from "../../components/Page_Content/Account/Order";
import WishList from "../../components/Page_Content/Account/WishList";
import "../../pages/Account/Account.scss"
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
