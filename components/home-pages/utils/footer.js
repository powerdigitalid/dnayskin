import React from "react";
import Image from "next/image";
import Creditcard from "../../../public/dist/img/footer/credit-cards-footer.png";

export default function Footer() {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12 ">
                  <div className="footer-logo ">
                    <a className="navbar-brand fs-1" href="index.html">
                      <img src="/dist/img/logo/logos.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8 col-12 mt-3">
                  <div className="footer-newsletter">
                    <h4 className="title">
                      Terimakasih Telah Berkunjung
                      <span>
                        Kedatangan Anda sangat berarti bagi kami, your beauty is
                        a bright world
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="bottom-inner">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer f-contact">
                    <h3>Hubungi Kami</h3>
                    <p className="phone">Phone: +62 812 3456 7890</p>
                    <ul>
                      <li>
                        <span>Minggu-Jum'at: </span> 8.00 am - 8.00 pm
                      </li>
                      <li>
                        <span>Sabtu: </span> 8.00 am - 2.00 pm
                      </li>
                    </ul>
                    <p className="mail">
                      <a href="mailto:admin@dnayskin.com">admin@dnayskin.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Informasi</h3>
                    <ul>
                      <li>
                        <a href="#about">Tentang Kami</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Tempat Kantor</h3>
                    <ul>
                      <li>
                        <a href="#">Kantor Rogojampi</a>
                      </li>
                      <li>
                        <a href="#">Kantor Songgon</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-4 col-12">
                  <div className="payment-gateway">
                    <span>Email For Our Projects:</span>
                    <li>
                      <a href="mailto:admin@powerdigital.id">
                        <i className="fab fa-email" />admin@powerdigital.id
                      </a>
                    </li>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="copyright">
                    <p>
                      Designed and Developed by
                      <a
                        href="https://powerdigital.id"
                        rel="nofollow"
                        target="_blank"
                      >
                        Power Digital Technolgy
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <ul className="socila">
                    <li>
                      <span>Follow Us On:</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
