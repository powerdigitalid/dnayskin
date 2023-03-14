import Link from "next/link";
import Image from "next/image";
export default function Sidebar() {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link href="/admin">
            <Image
              src="/dist/img/logo/logos.png"
              alt="logo"
              width={150}
              height={50}
              className="shadow-light"
            />
          </Link>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <Link href="/admin">RA</Link>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Admin Menu</li>
          <li>
            <Link className="nav-link" href="/admin">
              <i className="fas fa-fire" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/editbannerpages">
              <i className="fas fa-pencil-alt" /> <span>Edit Banner</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/formprodukpages">
              <i className="fas fa-store" /> <span>Input Products</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/formtreatmentpages">
              <i className="fas fa-female" /> <span>Input Treatments</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/formcustomerpages">
              <i className="fas fa-users" /> <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/reservationpages">
              <i className="fas fa-sticky-note" />
              <span>Tabel Reservation</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/admin/transaksipages">
              <i className="fas fa-book-open" /> <span>History Transaksi</span>
            </Link>
          </li>
        </ul>
        <div className="mt-4 mb-4 p-3">
          <Link
            href="/"
            className="btn btn-danger btn-lg btn-block btn-icon-split"
            style={{height: 40}}
          >
            <i className="fas fa-sign-out-alt"/><span className="hide-sidebar-mini">Close</span>
          </Link>
        </div>
      </aside>
    </div>
  );
}
