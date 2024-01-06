import AccountProfile from "./account_profile";
import "../Account/account.scss";

const AccountDetails = () => {
    return (
        <section className="container p-4">
            <div className="row d-flex gap-5">
                <span className="h1 fw-bold text-center">My Account</span>
                <div className="col-md-4 col-sm-12">
                    <AccountProfile />
                </div>
                <div className="col d-flex gap-3 flex-column">
                    <span className="h4 fw-bold">Account Details</span>
                    <form className="myform d-flex  flex-column gap-3">
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="control-label fw-bold text-secondary">FIRST NAME</label>
                            <input type="email" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="control-label fw-bold text-secondary">LAST NAME</label>
                            <input type="password" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="control-label fw-bold text-secondary">DISPLAY NAME</label>
                            <input type="password" className="form-control" placeholder="Display name" />
                            <small className="form-text text-muted">This will be how you name will be displayed in the account section and in reviews.</small>

                        </div>
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="control-label fw-bold text-secondary">EMAIL</label>
                            <input type="password" className="form-control" placeholder="Email" />
                        </div>
                    </form>
                    <span className="h4 fw-bold">Password</span>
                    <form className="d-flex  flex-column gap-3">
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="fw-bold text-secondary">OLD PASSWORD</label>
                            <input type="password" className="form-control" placeholder="Old password" />
                        </div>
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="fw-bold text-secondary">NEW PASSWORD</label>
                            <input type="password" className="form-control" placeholder="New password" />
                        </div>
                        <div className="form-group required d-flex flex-column gap-2">
                            <label className="fw-bold text-secondary">REPEAT NEW PASSWORD</label>
                            <input type="password" className="form-control" placeholder="Repeat new password" />
                        </div>
                    </form>
                    <button className="btn bg-dark text-white button_custom_width">Save changes</button>
                </div>
            </div>
        </section>
    )
}

export default AccountDetails;