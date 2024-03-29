import Link from "next/link";

export default function Navbar() {
  return (
    <header className="header navbar-area">
      {/* Start Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <div className="top-start">
                <div className="user">
                  <i className="lni lni-user" />
                  Hallo Gais | Selamat Datang di Website Rumah Athan | Terimakasih Telah Berkunjung dan Membeli Produk Kami
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      {/* Start Header Middle */}
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-7">
              {/* Start Header Logo */}
              <Link className="navbar-brand fs-1" href="/">
                <img
                  src="dist/img/logo/logos.png"
                  className="w-100"
                  alt="Logo"
                />
                {/* <span className="span-navbar">D'Nayskin</span> */}
              </Link>
              {/* End Header Logo */}
            </div>
            <div className="col-lg-9 col-md-2 col-5">
              <div className="middle-right-area float-right">
                <div className="nav-hotline">
                  <i className="lni lni-phone" />
                  <h3>
                    Hubungi Kami:
                    <span>Rogojampi : (+62) 857 8467 8830</span> 
                    <span>Songgon : (+62) 858 8095 6067</span>
                    <span>Melaya : (+62) 819 4460 5887</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Middle */}
      {/* Start Header Bottom */}
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-6 col-12">
            <div className="nav-inner">
              
              <nav className="navbar-expand-lg" style={{marginTop:"-10px",marginBottom:"-10px"}}>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className="active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-2"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Produk
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-2">
                        <li className="nav-item">
                          <Link href="/#newProduct">Produk Terbaru</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/allproduk/#allproduk">Semua Produk</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-3"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Treatment
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-3">
                        <li className="nav-item">
                          <Link href="/#newTreatment">Treatment Terbaru</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/alltreatment/#alltreatments">Semua Treatment</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#about" aria-label="Toggle navigation">
                        Tentang Kami
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#footer" aria-label="Toggle navigation">
                        Kontak Kami
                      </Link>
                    </li>
                  </ul>
                </div>{" "}
                {/* navbar collapse */}
              </nav>
              {/* End Navbar */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Nav Social */}
            <div className="nav-social ">
              <h5 className="title">Social Media Kami:</h5>
              <ul className="pt-2">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100073799137068">
                  <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/rumahathan/">
                  <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@rumahathanbeautycenter">
                  <i className="fab fa-tiktok" />
                  </a>
                </li>
                <li>
                  <a href="https://shopee.co.id/dnayskin_official">
                  <i className="fab fa-shopify" />
                  </a>
                </li>
              </ul>
            </div>
            {/* End Nav Social */}
          </div>
        </div>
      </div>
      {/* End Header Bottom */}
    </header>
  );
}
