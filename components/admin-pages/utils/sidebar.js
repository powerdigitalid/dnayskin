import Link from 'next/link'
export default function Sidebar() {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link href="/">Peminjaman LAB</Link>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <Link href="/">PL</Link>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Dashboard</li>
          <li className="dropdown active">
            <Link href="/" className="nav-link"><i className="fas fa-fire" /><span>Dashboard</span></Link>
          </li>
          <li className="menu-header">Menu</li>
          <li className="dropdown">
            <Link href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span>Jadwal</span></Link>
            <ul className="dropdown-menu">
              <li className='active'><Link className="nav-link" href="/jadwal/table_schedule" >Info Jadwal</Link></li>
              <li><Link className="nav-link" href="/jadwal/add_schedule">Tambah Jadwal</Link></li>
            </ul>
          </li>

          <li className="menu-header">Akun</li>
          <li className="dropdown">
            <Link href="/auth/register" className="nav-link has-dropdown"><i className="far fa-user" /> <span>User</span></Link>
            <ul className="dropdown-menu">
              <li><Link href="/auth/register">Register</Link></li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

  )
}