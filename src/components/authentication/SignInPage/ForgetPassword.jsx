import React from "react";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forget-password-container">
      <h3 className="forget-password-in-title">Forgot your password?</h3>
      <p>
        <small>
          No problem. Just enter your email address below — we’ll send you a
          link to reset it.
        </small>
      </p>
      <form action="" className="sign-in-form">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control forget-password-input"
            id="email"
            aria-describedby="basic-addon3"
            placeholder="Email"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="forget-password-submit-btn">
            Send Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
