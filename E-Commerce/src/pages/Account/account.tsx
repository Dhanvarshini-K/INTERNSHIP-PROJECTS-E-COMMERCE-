import AccountDetails from "../../components/Page_Content/Account/account_details";
import AccountProfile from "../../components/Page_Content/Account/account_profile";

const AccountPage = () => {
  return (
    <section className="container p-4">

    <div className="row">
      <div className="col-md-4 col-sm-12">
      <AccountProfile />
      </div>
      <AccountDetails />
    </div>
    </section>

  );
};

export default AccountPage;
