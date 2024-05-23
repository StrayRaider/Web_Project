import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div class="cont">
        <div class="row">
          <div class="col-md-6">
            <img
              src="product-image.jpg"
              alt="Ürün Resmi"
              class="product-image"
            />
          </div>
          <div class="col-md-6">
            <div class="product-info">
              <h2>Ürün Adı</h2>
              <p class="product-price">₺99.99</p>
              <p class="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <ul>
                  <li>Fiyat:</li>
                  <li>Kategori:</li>
                  <li>Eklendiği Tarih</li>
                  <li>Marka</li>
                  <li>Stokta</li>
                </ul>
              </p>
              <button class="add-to-cart-btn">
                <Link to="/buy">Sepete Ekle</Link>
              </button>
            </div>
          </div>
        </div>

        <div class="row review">
          <div class="col-md-12">
            <h3 class="review-title">Kullanıcı Yorumları</h3>
            <div class="user-review">
              <h5>Kullanıcı Adı</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="user-review">
              <h5>Kullanıcı Adı</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
