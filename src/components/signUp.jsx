import "./signUp.css";
import { Link } from "react-router-dom";
import React from "react";

function signUp() {
  return (
    <>
      <div class="fullPage">
        <div class="container">
          <label>
            Mail
            <input
              class="form-control"
              type="email"
              id="email"
              required
              placeholder="email@gmail.com"
            />
          </label>
          <label>
            Password:
            <input class="form-control" type="password" id="password" />
            <input type="checkbox" />
            Show Password
          </label>
          <label>
            Name
            <input class="form-control" type="text" id="name" required />
          </label>
          <label>
            Surname
            <input class="form-control" type="text" id="surname" required />
          </label>
          <label for="start">
            Birth date:
            <input
              class="form-control"
              type="date"
              id="date"
              name="trip-start"
              value="2003-11-25"
              min="1900-01-01"
              max="2023-12-31"
            />
          </label>

          <label for="gender">Gender:</label>
          <label>
            <select class="form-select" name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label for="phone">
            Phone Number:
            <input
              class="form-control"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </label>
          <label>
            <button class="form-control" type="submit" id="signBtn">
              Kayıt
            </button>
          </label>
        </div>
      </div>
    </>
  );
}

export default signUp;
