import React from "react";
import ForgetPassword from "./ForgetPassword";
import "./SignInPage.css";

const SignInPage = ({ isForgetPassword, setIsForgetPassword, setIsJoin }) => {
  return (
    // SIGN-IN PAGE STARTED HERE
    <div>
      {!isForgetPassword ? (
        <div className="sign-in-page-container">
          <h3 className="sign-in-title">Welcome Back.</h3>
          <form action="" className="sign-in-form">
            <label for="email" className="form-label">
              Email address
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control email-input"
                id="email"
                aria-describedby="basic-addon3"
                placeholder="Email"
              />
            </div>
            <label for="password" className="form-label">
              Password
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control password-input"
                id="password"
                aria-describedby="basic-addon3"
                placeholder="Password"
              />
            </div>
            <span
              onClick={() => setIsForgetPassword(true)}
              className="forgot-password-btn"
            >
              Forgot password?
            </span>
            <div className="text-center">
              <button type="submit" className="sign-in-btn">
                Sign In
              </button>
            </div>
          </form>

          <div className="sign-in-bottom-container text-center my-4">
            <div className="sign-in-bottom-top d-flex align-items-center justify-content-center">
              <div className="hr"></div>
              <span className="px-2">Not a member?</span>
              <div className="hr"></div>
            </div>
            <button
              onClick={() => setIsJoin(true)}
              className="switch-to-join-btn my-2"
            >
              <span className="text-decoration-underline">Join</span> to unlock
              the best of Tripadvisor.
            </button>
          </div>
        </div>
      ) : (
        // CALLING THE FORGET-PASSWORD COMPONENT
        <ForgetPassword />
      )}
    </div>

    // SIGN-IN PAGE ENDED HERE
  );
};

export default SignInPage;
