import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="/admin">Rumah Athan</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="/admin">RA</a>
        </div>
        <ul className="sidebar-menu">
        <li className="menu-header">Admin Menu</li>
          <li>
            <Link className="nav-link" href="/admin">
              <i className="fas fa-fire" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/formprodukpages">
              <i className="fas fa-store" /> <span>Input Produk</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/formcustomerpages">
              <i className="fas fa-users" /> <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/reservationpages">
              <i className="fas fa-sticky-note" /> <span>Tabel Reservation</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/transaksipages">
              <i className="fas fa-book-open" /> <span>History Transaksi</span>
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
        </div>
      </aside>
    </div>
  );
}
