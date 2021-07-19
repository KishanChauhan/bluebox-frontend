import React from "react";
import ZipCode from "../Home/ZipModal";
export default function Header() {
  const [openZipModal, setZipModal] = React.useState(false);

  const hideZipM = () => {
    setZipModal(false);
  };

  const showZipModal = () => {
    setZipModal(true);
  };
  return (
    <>
      <ZipCode showModal={openZipModal} hideModal={hideZipM} />

      <section className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
            <a className="navbar-brand" href="/">
              <img
                src="img/logo.png"
                className="logo img-fluid"
                alt="somethinglogo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="moving-boxes.html">
                    Moving Boxes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="moving-office.html">
                    Moving Supplies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Location
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white py-1 btn btn-dark"
                    onClick={() => showZipModal()}
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
