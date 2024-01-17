import AccountProfile from "./account_profile";
import { edit } from "../../../assets/resources/icons";
const Address = () => {
  return (
    <section className="container p-4 ">
      <div className="row d-flex gap-5">
        <span className="h1 fw-bold text-center">My Account</span>
        {/* <div className="col-lg-3 col-md-4 col-sm-12">
          <AccountProfile />
        </div> */}
        <div className="col-md-7 d-flex gap-3 flex-column mt-4">
          <span className="h4 fw-bold">Address</span>
          <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
          <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
            <div className="d-flex justify-content-between">
              <span className="h5 fw-bold">Billing Address</span>
              <div className="edit d-flex gap-2 align-items-start">
                <img src={edit} alt="edit" />
                <span className="h6 text-secondary fw-bold">Edit</span>
              </div>
            </div>
            <span className="h5 fw-medium">Sofia Harvertz</span>
            <span className="h6">(+1) 234 567 890</span>
            <span className="h6">345 Long Island, NewYork, United states </span>
          </div>
          <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
            <div className="d-flex justify-content-between">
              <span className="h5 fw-bold">Shipping Address</span>
              <div className="edit d-flex gap-2 align-items-start">
                <img src={edit} alt="edit" />
                <span className="h6 text-secondary fw-bold">Edit</span>
              </div>
            </div>
            <span className="h5 fw-medium">Sofia Harvertz</span>
            <span className="h6">(+1) 234 567 890</span>
            <span className="h6">345 Long Island, NewYork, United states </span>
          </div>
        </div>
   
         
        </div>
      </div>
    </section>
  )
}

export default Address;