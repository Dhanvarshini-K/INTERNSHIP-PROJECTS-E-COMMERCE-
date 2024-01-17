import { hide_password } from "../../../assets/resources/icons";
import { Sign_img } from "../../../assets/resources/images";
import { Link } from "react-router-dom";
import "../Form/form.scss";
import { useAuth } from "../../../utils/AuthContext";
import { useRef } from "react";

const SignUp = () => {
  const { registerUser } = useAuth();
  const signupForm = useRef(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = signupForm.current.name.value;
    const username = signupForm.current.username.value;
    const email = signupForm.current.email.value;
    const password = signupForm.current.password.value;

    const userInfo = { name, username, email, password };
    registerUser(userInfo);
  };
  return (
    <>
      <div className="container mt-3  flex-md-nowrap">
        <section className="d-flex justify-content-between flex-wrap flex-md-nowrap gap-lg-4">
          <img src={Sign_img} alt="" className="signup_image" />
          <div className="signup_container mt-3 d-flex flex-column justify-content-lg-center">
            <form
              className="d-flex flex-column gap-xl-1 gap-xxl-2"
              ref={signupForm}
              onSubmit={handleSubmit}
            >
              <span className="text-start h1">Sign Up</span>
              <p>
                Already have an account?
                <Link to="/" className="text-success text-decoration-none fs-6">
                  {" "}
                  Sign In
                </Link>
              </p>
              <div className="mb-3 border-bottom">
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Your name "
                  name="name"
                  required
                />
              </div>
              <div className="mb-3 border-bottom">
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-3 border-bottom">
                <input
                  type="email"
                  className="form-control border-0 shadow-none"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>
              <div className="d-flex align-items-center mb-3 border-bottom">
                <input
                  type="password"
                  className="form-control border-0  shadow-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <img
                  src={hide_password}
                  alt="hide_password"
                  className="hide_password"
                />
              </div>
              <div className=" d-flex justify-content-between align-items-baseline mb-3">
                <div className="custom-control custom-checkbox d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    required
                  />
                  <label
                    className="agree custom-control-label"
                    htmlFor="customCheck1"
                  >
                    <small>
                      I agree with{" "}
                      <a className="fw-medium text-dark text-decoration-none">
                        {" "}
                        Privacy Policy
                      </a>{" "}
                      and
                      <a className="fw-medium text-dark text-decoration-none">
                        {" "}
                        Terms of Use
                      </a>
                    </small>
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-dark text-white fw-medium"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
