import "../Form/form.scss";
import { hide_password } from "../../../assets/resources/icons";
import { Sign_img } from "../../../assets/resources/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


 const SignIn = () => {
   const navigate = useNavigate();
   const Setnavigate = () => {
     navigate("/home");
   };

   return (
      <>
         <div className="container mt-3  flex-md-nowrap">
            <section className='d-flex justify-content-between flex-wrap flex-md-nowrap'>
               <img src={Sign_img} alt="signin" className='signin_image'  />
               <div className="signin_container mt-3 d-flex flex-column justify-content-lg-center p-3 p-md-5">
                  <form className='d-flex flex-column gap-xl-2 gap-xxl-4'>
                     <span className='text-start h1'>Sign In</span>
                     <p>
                        Don't have an account yet?
                        <Link to="/signup" class="text-success text-decoration-none fs-6"> Sign Up</Link>
                     </p>
                     <div className="mb-3 border-bottom">
                        <input
                           type="email"
                           className="form-control border-0 shadow-none"
                           placeholder="Your Username or Email address"
                           // value={inputFields.email}
                           // onChange={handleChange}
                        />
                     </div>
                     
                     <div className="d-flex align-items-center mb-3 border-bottom">
                        <input
                           type="password"
                           className="form-control border-0  shadow-none"
                           placeholder="Password"
                           // value={inputFields.password}
                           // onChange={handleChange}
                        />
                        <img src={hide_password} alt="hide_password" className='hide_password' />
                     </div>
                     
                     <div className=" d-flex justify-content-between align-items-baseline mb-3">
                        <div className="custom-control custom-checkbox d-flex gap-1 align-items-center">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                           />
                           <label className="custom-control-label" htmlFor="customCheck1">
                              Remember me
                           </label>
                        </div>
                        <p className="forgot-password text-right text-dark fw-medium">
                           Forgot password?
                        </p>
                     </div>
                     <div className="d-grid">
                        <button type="submit" className="btn btn-dark text-white fw-medium" onClick={Setnavigate}>
                           Sign in
                        </button>
                     </div>

                  </form>
                 
               </div>
            </section>

         </div>
      </>
   )
}

export default SignIn;