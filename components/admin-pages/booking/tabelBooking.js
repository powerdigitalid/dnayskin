import React from 'react'

export default function TabelBooking() {

  return (
    <div>
      <div>
                <div className="container">
                    <div className="row flex-lg-nowrap">
                        <div className="col">
                            <div className="row flex-lg-nowrap">
                                <div className="col mb-3">
                                    <div className="e-panel card">
                                        <div className="card-body">
                                            <div className="d-flex bd-highlight">
                                                <div className="p-2 flex-grow-1 bd-highlight">Admin</div>
                                                <div className="p-2 bd-highlight">
                                                    <a href="/admin/createproduk">
                                                        <button className='btn btn-primary'>Tambah Boking</button>
                                                    </a>
                                                </div>
                                            </div>


                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered text-center">
                                                        <thead>
                                                            <tr className=''>
                                                                <th className="max-width">Nama</th>
                                                                <th className="sortable">Jasa/Produk</th>
                                                                <th className="sortable">Kanto</th>
                                                                <th className="sortable">Tanggal</th>
                                                                <th className="sortable">Deskripsi</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                    <td className="text-nowrap align-middle">Hakimah</td>
                                                                    <td className="text-nowrap align-middle">Treatmen Wajah</td>
                                                                    <td className="text-nowrap align-middle">Kantor Songgon</td>
                                                                    <td className="text-nowrap align-middle">03-03-2023</td>
                                                                    <td className="text-center align-middle">
                                                                        <div className="align-top">
                                                                            <button className='btn btn-primary'>Edit</button>
                                                                            <button className='btn btn-danger'>Hapus</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}
