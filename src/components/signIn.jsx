import React, { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Axios'u import edin

const login_url = "http://localhost:3000/api/login";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post(login_url, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // İstek başarılı olduğunda yönlendirme yapabilirsiniz
        window.location.href = "/home"; // Örnek bir yönlendirme
      } else {
        // İstek başarısız olduğunda kullanıcıya bir hata mesajı gösterebilirsiniz
        console.error("Sign in failed:", response.statusText);
      }
    } catch (error) {
      // Hata durumunu burada işle
      console.error("An error occurred during sign in:", error);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="checkbox" />
            Show Password
          </label>
          <div className="buttons">
            <button
              className="form-control"
              type="button"
              id="signInBtn"
              onClick={handleSignIn}
            >
              Giriş
            </button>
            <button className="form-control" type="submit" id="signUpBtn">
              <Link to="/signUp">Kayıt</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
