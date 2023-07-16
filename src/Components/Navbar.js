import React from 'react'
import form from './form.css'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0" style={{
                // boxShadow: 5
            }}>
                <div className="container-fluid m-0">
                    <a className="navbar-brand m-0" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-0 m-0" id="navbarSupportedContent">
                        <ul className="navbar-nav p-0 mb-2 mb-lg-0 m-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Blog</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Contact Us</a>
                            </li> */}

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
