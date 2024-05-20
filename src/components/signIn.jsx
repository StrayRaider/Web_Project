import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="fullPage">
        <div className="container">
          <label>
            Mail
            <input
              className="form-control"
              type="email"
              id="email"
              required
              placeholder="email@gmail.com"
            />
          </label>
          <label>
            Password:
            <input className="form-control" type="password" id="password" />
            <input type="checkbox" />
            Show Password
          </label>
          <div className="buttons">
            <button class="form-control" type="submit" id="signInBtn">
              <Link to="/home">Giriş</Link>
            </button>
            <button class="form-control" type="submit" id="signUpBtn">
              <Link to="/signUp">Kayıt</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
