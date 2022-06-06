import React from "react";
import "./Join.css";

const Join = ({ setIsJoin }) => {
  return (
    // JOIN REGISTER CONTAINER STARTED

    <div className="join-container">
      <h3 className="join-container-title">
        Join to unlock the best of Tripadvisor
      </h3>

      {/* JOIN REGISTER FORM STARTED  */}

      <form action="" className="sign-in-form">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <label for="first name" className="form-label">
              First Name
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control w-100 name-input"
                id="first name"
                aria-describedby="basic-addon3"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <label for="last name" className="form-label">
              Last Name
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control w-100 name-input"
                id="last name"
                aria-describedby="basic-addon3"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <label for="email" className="form-label">
          Email address
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control create-email-input"
            id="email"
            aria-describedby="basic-addon3"
            placeholder="Email"
          />
        </div>
        <label for="password" className="form-label">
          Create a password
        </label>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control create-password-input"
            id="password"
            aria-describedby="basic-addon3"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="sign-in-btn">
            Join
          </button>
        </div>
      </form>

      {/* JOIN REGISTER FORM ENDED  */}

      {/* JOIN BOTTOM CONTAINER STARTED  */}

      <div className="sign-in-bottom-container text-center my-4">
        <div className="sign-in-bottom-top d-flex align-items-center justify-content-center">
          <div className="hr"></div>
          <span className="px-2">Already a member?</span>
          <div className="hr"></div>
        </div>
        <button
          onClick={() => setIsJoin(false)}
          className="switch-to-join-btn my-2"
        >
          <span className="text-decoration-underline">Sign In</span> using your
          Tripadvisor account.
        </button>
      </div>

      {/* JOIN BOTTOM CONTAINER ENDED  */}
    </div>

    // JOIN REGISTER CONTAINER ENDED
  );
};

export default Join;
