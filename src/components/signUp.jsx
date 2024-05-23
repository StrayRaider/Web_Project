import React, { useState } from "react";
import axios from "axios"; // Axios'u import edin

const signup_url = "http://localhost:3000/api/signup";

function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post(signup_url, {
        email: email,
        password: password,
        name: name,
        surname: surname,
        birthdate: birthdate,
        gender: gender,
        phoneNumber: phoneNumber,
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
      <div class="fullPage">
        <div class="container">
          <label>
            Mail
            <input
              class="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@gmail.com"
            />
          </label>
          <label>
            Password:
            <input
              class="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="checkbox" />
            Show Password
          </label>
          <label>
            Name
            <input
              class="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Surname
            <input
              class="form-control"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
          <label for="start">
            Birth date:
            <input
              class="form-control"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              min="1900-01-01"
              max="2023-12-31"
            />
          </label>

          <label for="gender">Gender:</label>
          <label>
            <select
              class="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label for="phone">
            Phone Number:
            <input
              class="form-control"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </label>
          <label>
            <button class="form-control" type="submit" id="signBtn" onClick={handleSignUp}>
              Kayıt
            </button>
          </label>
        </div>
      </div>
    </>
  );
}

export default signUp;
