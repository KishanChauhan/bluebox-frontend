import React from "react";

export default function Header() {
  return (
  <>
  <section className="topBar bg-primary py-2 position-relative">
      <div className="container">
          <div className="row">
              <div className="col-md-10">
                  <a href="http://localhost:3000/" className="text-white fs-13 text-decoration-none">
                      <i className="fa fa-phone-alt mr-2"></i>
                      (719) 445-2808
                  </a>
              </div>
              <div className="col-md-2 text-right">
                  <ul className="topList d-inline-block m-0 p-0">
                      <li className="d-inline mx-1">
                          <a href="http://localhost:3000/" className="text-white text-decoration-none">
                              <i className="fab fa-facebook"></i>
                          </a>
                      </li>
                      <li className="d-inline mx-1">
                          <a href="http://localhost:3000/" className="text-white text-decoration-none">
                              <i className="fab fa-instagram"></i>
                          </a>
                      </li>
                      <li className="d-inline mx-1">
                          <a href="http://localhost:3000/" className="text-white text-decoration-none">
                              <i className="fab fa-twitter"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>

  <section className="header">
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
              <a className="navbar-brand" href="http://localhost:3000/">
                  <img src={"../../img/logo.png"} className="logo img-fluid" alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="http://localhost:3000/">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="http://localhost:3000/">Moving Boxes</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-dark" href="http://localhost:3000/">Moving Supplies</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="http://localhost:3000/">Location</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="http://localhost:3000/">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white py-1 btn btn-dark" href="http://localhost:3000/">Order Now</a>
                    </li>
                </ul>
                
              </div>
        </nav>
        </div>
      </section>
      </>
  );
}