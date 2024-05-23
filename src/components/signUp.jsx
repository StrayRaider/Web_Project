import React, { useState } from "react";
import axios from "axios"; // Axios'u import edin

const signup_url = "http://localhost:3000/auth/register";

function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
/*

    axios.post('http://localhost:3000/auth/register', {
      name: 'John',
      surname: 'Doe',
      gender: 'Male',
      phonenumber: '123456789',
      email: 'john.doe@example.com',
      password: 'your_password_here',
      dob: '1990-01-01'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('User registered successfully:', response.data);
    })
    .catch(error => {
      console.error('Error registering user:', error.response.data);
    });
  };
*/


  const handleSignUp = async () => {
    console.log(name, surname, gender, phoneNumber, email, password, birthdate);
    try {
      const response = await axios.post(signup_url, {
        name: name,
        surname: surname,
        gender: gender,
        phonenumber: phoneNumber,
        email: email,
        password: password,
        dob: birthdate,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }});
      //Error registering a new user Error: User validation failed: gender: Path `gender` is required., phonenumber: Path `phonenumber` is required., dob: Path `dob` is required. at ValidationError.inspect 

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
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
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
