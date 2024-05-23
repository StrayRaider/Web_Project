import React from "react";
import "./buy.css";
import { Link } from "react-router-dom";

function Buy() {
  return (
    <>
      <div class="cont">
        <h2>Ödeme ve Teslimat Bilgileri</h2>
        <form>
          <div class="form-group">
            <label for="ad">Ad:</label>
            <input
              type="text"
              class="form-control"
              id="ad"
              placeholder="Adınızı girin"
              required
            />
          </div>
          <div class="form-group">
            <label for="soyad">Soyad:</label>
            <input
              type="text"
              class="form-control"
              id="soyad"
              placeholder="Soyadınızı girin"
              required
            />
          </div>
          <div class="form-group">
            <label for="adres">Adres:</label>
            <textarea
              class="form-control"
              id="adres"
              placeholder="Adresinizi girin"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="sehir">Şehir:</label>
              <input
                type="text"
                class="form-control"
                id="sehir"
                placeholder="Şehir girin"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="posta_kodu">Posta Kodu:</label>
              <input
                type="text"
                class="form-control"
                id="posta_kodu"
                placeholder="Posta kodunu girin"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="telefon">Telefon:</label>
            <input
              type="tel"
              class="form-control"
              id="telefon"
              placeholder="Telefon numaranızı girin"
              required
            />
          </div>
          <hr />
          <h3>Kart Bilgileri</h3>
          <div class="form-group">
            <label for="kart_no">Kart Numarası:</label>
            <input
              type="text"
              class="form-control"
              id="kart_no"
              placeholder="Kart numaranızı girin"
              required
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="son_kullanma_tarihi">Son Kullanma Tarihi:</label>
              <input
                type="text"
                class="form-control"
                id="son_kullanma_tarihi"
                placeholder="MM/YY"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="cvv">CVV:</label>
              <input
                type="text"
                class="form-control"
                id="cvv"
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="dosya_yukle">Dosya Yükle:</label>
            <input type="file" class="form-control-file" id="dosya_yukle" />
          </div>
          <button type="submit" class="btn btn-primary">
            Ödemeyi Tamamla
          </button>
        </form>
      </div>
    </>
  );
}

export default Buy;
