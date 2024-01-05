import "../Form/form.css";
import { hide_password } from "../../assets/resources/icons";
import { Sign_img } from "../../assets/resources/images";
import { Link } from "react-router-dom";


const SignUp = () => {
   return (
      <>
         <div className="container mt-3  flex-md-nowrap">
            <section className='d-flex justify-content-between flex-wrap flex-md-nowrap gap-lg-4'>
               <img src={Sign_img} alt="" className='' />
               <div className="left_data mt-3 d-flex flex-column justify-content-lg-center">
                  <form className='d-flex flex-column gap-xl-1 gap-xxl-2'>
                     <span className='text-start h2'>Sign Up</span>
                     <p>
                        Already have an account?
                        <Link to="/" class="text-success text-decoration-none fs-6"> Sign In</Link>
                     </p>
                     <div className="mb-3 border-bottom">
                        <input
                           type="email"
                           className="form-control border-0 shadow-none"
                           placeholder="Your name "
                        />
                     </div>
                     <div className="mb-3 border-bottom">
                        <input
                           type="email"
                           className="form-control border-0 shadow-none"
                           placeholder="Username"
                        />
                     </div>
                     <div className="mb-3 border-bottom">
                        <input
                           type="email"
                           className="form-control border-0 shadow-none"
                           placeholder="Email address"
                        />
                     </div>
                     <div className="d-flex align-items-center mb-3 border-bottom">
                        <input
                           type="password"
                           className="form-control border-0  shadow-none"
                           placeholder="Password"
                        />
                        <img src={hide_password} alt="hide_password" className='hide_password' />
                     </div>
                     <div className=" d-flex justify-content-between align-items-baseline mb-3">
                        <div className="custom-control custom-checkbox d-flex gap-2 align-items-center">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                           />
                           <label className="agree custom-control-label" htmlFor="customCheck1">
                           <small>I agree with <a className="fw-medium text-dark text-decoration-none"> Privacy Policy</a> and<a className="fw-medium text-dark text-decoration-none"> Terms of Use</a></small>
                           </label>
                        </div>
                     </div>
                     <div className="d-grid">
                        <button type="submit" className="btn btn-dark text-white fw-medium">
                         Sign up
                        </button>
                     </div>

                  </form>
               </div>
            </section>

         </div>
      </>
   )
}

export default SignUp;