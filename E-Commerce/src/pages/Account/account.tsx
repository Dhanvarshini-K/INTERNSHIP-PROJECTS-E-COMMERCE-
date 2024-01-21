import { useParams } from "react-router-dom";
import AccountDetails from "../../components/Page_Content/Account/account_details";
import Address from "../../components/Page_Content/Account/address";
import AccountProfile from "../../components/Page_Content/Account/account_profile";
import OrderHistory from "../../components/Page_Content/Account/order";
import WishList from "../../components/Page_Content/Account/wishlist";
const AccountPage = () => {
  const { activepage } = useParams();

  // alert(activepage)
  return (
    <section className="container">
      <div className="row">
        <div className="col-4">
          <AccountProfile activepage={activepage} />
        </div>
        <div className="col-8 ">
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
