import React from "react";

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
                        Kedatangan Anda sangat berarti bagi kami | D`Nayskin sahabat Glow-up mu
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
                    <p className="phone">Rogojampi : (+62) 857 8467 8830</p>
                    <p className="phone">Songgon : (+62) 858 8095 6067</p>
                    <p className="phone">Melaya : (+62) 819 4460 5887</p>
                    <ul>
                      <li>
                        <span>Senin-Sabtu: </span> 8.00 am - 8.00 pm
                      </li>
                      <li>
                        <span>Minggu: </span> Libur
                      </li>
                    </ul>
                    <p className="mail">
                      <a href="admin@rumahathan.com">admin@rumahathan.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Informasi</h3>
                    <ul>
                      <li>
                        <a href="#about">Tentang Kami</a> : Rumah Athan Skincare and Treatment merupakan tempat perawatan untuk wajah dan badan yang sangat terpercaya. Untuk anda yang menginkan kulit cantik yang mempesona. <br/>
                  Dengan pengalaman lebih dari 8 tahun kami berusaha selalu menjaga kualitas pelayanan dan memastikan anda mendapatkan kenyamanan yang tidak akan ditemukan ditempat perawatan manapun.<br/>
                  Untuk menambah kepuasan anda kami menawarkan produk andalan D`Nayskin sebagai pelengkap perjalanan untuk kulit sehat dan terawat. 
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Tempat Kantor</h3>
                    <ul>
                      <li>
                        <a href="https://www.google.com/maps/place/Rumah+Athan+Beauty+Center/@-8.3132303,114.2968239,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd15782bd063b8b:0xf6bb980d265ec90d!8m2!3d-8.3132356!4d114.2990126!16s%2Fg%2F11rf4lv095?authuser=0">Kantor Rogojampi</a>
                      </li>
                      <li>
                        <a href="https://www.google.com/maps/place/Rumah+Athan/@-8.2330055,114.1954895,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd1538eedb062db:0xaba6fb471f61a8c1!8m2!3d-8.2330108!4d114.1976782!16s%2Fg%2F11fflzd318?authuser=0">Kantor Songgon</a>
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
                    <span>Contact Us For Your Projects:</span>
                    <li>
                      <a href="mailto:admin@powerdigital.id">
                        <i className="fab fa-email" />
                        admin@powerdigital.id
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/+6281238368983?text=saya%20ingin%20bertanya%20atau%20membuat%20aplikasi%20dan%20saya">
                        <i className="fab fa-email" />
                        +62 812 5986 9041
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
                        rel="noreferrer noopener"
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
