import "./marketing.css";
import { Link } from "react-router-dom";
import React from "react";
import ChatAssistant from "./ChatAssitant";
function Marketing() {
  return (
    <>
      <nav class="navbar navbar-expand-lg " id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Marketplace.com
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Siparişlerim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Favorilerim
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seçenekler
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Elektronik
                    </a>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Moda
                    </a>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ev,Yaşam,Kırtasiye
                    </a>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Kitap,Hobi,Film,Müzik
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* INTRO */}
      <div className="container-fluid" id="home">
        <div className="row">
          {/* Sol Taraftaki Yazı */}
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center"
            id="homeText"
          >
            <h1>
              Natural Goodness For Your Beautiful Skin
              <br />
            </h1>
            <button type="button" class="btn btn-secondary" id="cvBtn">
              Shop Now
            </button>
          </div>

          {/* Sağ Taraftaki Ürün Fotoğrafı */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div
              className="d-flex justify-content-center align-items-center"
              id="homeImg"
            >
              <img
                src="/public/home.jpg"
                alt="Product"
                style={{ width: "400px", height: "400px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div>
            <ChatAssistant />
          </div>
        </div>
      </div>

      {/* SLİDEr*/}
      <div id="carouselExample" className="carousel slide">
        <h5>POPÜLER ÜRÜNLER</h5>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              {/* İlk Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              {/* İkinci Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              {/* Üçüncü Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              {/* İlk Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              {/* İkinci Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              {/* Üçüncü Kart */}
              <div className="col-auto">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="/public/grocery.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* FOOTER */}
      <div class="text-light text-center" id="footer">
        <p class="align-middle p-5 mb-0">
          <span> Tüm hakları saklıdır &copy;|2024 </span>
          <br />
        </p>
      </div>
      <button class="form-control" type="submit" id="signUpBtn">
        <Link to="/product">Kayıt</Link>
      </button>
    </>
  );
}

export default Marketing;
