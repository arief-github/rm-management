import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Sidebar = () => {
  return (
<div style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '15px' }}>
        <div className='left'>
          <ul>
            <li>
              <Link to="/admin/banner">
                Banners
              </Link>
              {/* <div>
                <p>List Gambar Banner</p>
                <div
                  className="d-flex"
                  style={{ gap: "8px", overflowX: "scroll" }}
                >
                  {this.state.dataImageBanners.length != 0 &&
                    this.state.dataImageBanners.map((x) => {
                      return (
                        <Card
                          onClick={() => this.onDeleteDataBanners(x.uuid)}
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            cursor: "pointer",
                            height: "100px",
                            width: "120px",
                          }}
                        >
                          <img className="w-100" src={x.image_url} alt="" />
                          <div
                            className="position-absolute bg-light d-flex justify-content-center align-items-center"
                            style={{
                              borderRadius: "50%",
                              height: "25px",
                              width: "25px",
                              opacity: "80%",
                            }}
                          >
                            <i className="fa fa-trash text-dark"></i>
                          </div>
                        </Card>
                      );
                    })}
                </div>
              </div> */}
            </li>
            <Link to="/admin/struktur-organisasi">
              <li>Struktur Organisasi</li>
            </Link>
            <Link to="/admin/pengguna">
              <li>Pengguna</li>
            </Link>
            <Link to="/admin/list-data-warga">
              <li>List Data Warga</li>
            </Link>

          </ul>
        </div>
    </div>
  )
}

export default Sidebar