import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Rumah Athan</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">RA</a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Dashboard</li>
          <li className="dropdown active">
            <a href="#" className="nav-link has-dropdown">
              <i className="fas fa-fire" />
              <span>Dashboard</span>
            </a>
            <ul className="dropdown-menu">
              <li className="active">
                <a className="nav-link" href="index-0.html">
                  General Dashboard
                </a>
              </li>
              <li>
                <a className="nav-link" href="index.html">
                  Ecommerce Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-header">Starter</li>
          <li>
            <Link href={"/formprodukpages"}>
              <i className="fas fa-store" /> <span>Input Produk</span>
            </Link>
          </li>
          <li>
            <Link href={"/formcustomerpages"}>
              <i className="fas fa-users" /> <span>Input Customer</span>
            </Link>
          </li>
          <li>
            <Link href={"/bookingpages"}>
              <i className="fas fa-sticky-note" /> <span>Tabel Booking</span>
            </Link>
          </li>
          <li>
            <Link href={"/transaksipages"}>
              <i className="fas fa-book-open" /> <span>Tabel Transaksi</span>
            </Link>
          </li>
        </ul>
        <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
          <a
            href="https://getstisla.com/docs"
            className="btn btn-primary btn-lg btn-block btn-icon-split"
          >
            <i className="fas fa-rocket" /> Documentation
          </a>
        </div>{" "}
      </aside>
    </div>
  );
}
