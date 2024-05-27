import React, { useState } from "react";
import axios from "axios"; // Axios'u import edin
import "./buy.css";
import { Link } from "react-router-dom";

function Buy() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // Create FormData object
    formData.append('name', document.getElementById('firstName').value);
    formData.append('surname', document.getElementById('lastName').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('city', document.getElementById('city').value);
    formData.append('postalCode', document.getElementById('postalCode').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('cardNumber', document.getElementById('cardNumber').value);
    formData.append('expiryDate', document.getElementById('expiryDate').value);
    formData.append('cvv', document.getElementById('cvv').value);
    console.log(formData);
    const buy_url = "http://localhost:3000/api/pay/buy"
    try {
      const response = await axios.post(buy_url, {
        name:document.getElementById('firstName').value,
        surname:document.getElementById('lastName').value,
        address:document.getElementById('address').value,
        city:document.getElementById('city').value,
        postalCode:document.getElementById('postalCode').value,
        phone:document.getElementById('phone').value,
        cardNumber:document.getElementById('cardNumber').value,
        expiryDate:document.getElementById('expiryDate').value,
        cvv:document.getElementById('cvv').value,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }});
        if(response.status === 200){
          alert("siparişiniz alındı..");
        }

    } catch (error) {
      console.error("An error occurred during buy:", error);
    }
  };

  const scanCard = async (e) => {
    alert("bu ekranı kapadıktan sonra veriler yüklenene kadar bekleyiniz !")
    const scan_card_url = "http://localhost:3000/api/pay/scan_card"
    document.getElementById('upload-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const fileInput = document.getElementById('file-input');
      console.log(fileInput)
      const file = fileInput.files[0];
      if (!file) {
          alert("Please select a file before uploading.");
          return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
          const response = await fetch(scan_card_url, {
              method: 'POST',
              body: formData
          });
          const result = await response.json();
          console.log("result",result)
          //document.getElementById('result').innerText = JSON.stringify(result, null, 2);
          const expiry_text = document.getElementById('expiryDate');
          expiry_text.value = result.expiryDate
          const [firstName, lastName] = result.name.split(' ');
          const name_text = document.getElementById('firstName');
          name_text.value = firstName
          const surname_text = document.getElementById('lastName');
          surname_text.value = lastName
          const num_text = document.getElementById('cardNumber');
          num_text.value = result.cardNumber
      } catch (error) {
          document.getElementById('result').innerText = 'Error: ' + error.message;
      }
  });
};

  return (
    <>
      <div className="cont">
        <h2>Payment and Delivery Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              className="form-control"
              id="address"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="postalCode">Postal Code:</label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                placeholder="Enter your postal code"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <hr />
          <h3>Card Information</h3>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Complete Payment
          </button>
        </form>
        <h1>Scan Credit Card</h1>
        <form id="upload-form" name="credit-card-form">
          <input
            type="file"
            id="file-input"
            name="file"
            accept="image/*"
          />
          <button type="submit" onClick={scanCard}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default Buy;
