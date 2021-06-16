import React from "react";

export default function MovingBox() {
  return (
    <>
      {/* <!-- banner --> */}
      <section className="hero move-hero position-relative">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-white"
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              Why Rent{" "}
              <span className="font-weight-bold">
                Moving <span className="text-primary">Boxes</span>
              </span>
            </h1>
            <button
              className="btn btn-primary px-4 mt-2"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
      {/* <!-- banner --> */}

      {/* <!-- tabs --> */}
      <section className="tabsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 p-0">
              <div className="row">
                <div className="col-3">
                  <div className="card st1 active">
                    <div className="text-center">
                      <span className="number">1</span>
                      <p className="mb-0">
                        Choose <br></br>
                        Box Package
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card st2">
                    <div className="text-center">
                      <span className="number">2</span>
                      <p className="mb-0">
                        Select Moving <br></br>
                        and Packing Supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card st3">
                    <div className="text-center">
                      <span className="number">3</span>
                      <p className="mb-0">
                        Delivery and <br></br>
                        Pickup Details
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card st4">
                    <div className="text-center">
                      <span className="number">4</span>
                      <p className="mb-0">
                        Personal and <br></br>
                        Payment Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      {/* <!-- tabs --> */}

      {/* <!-- show tabs --> */}
      <section className="showTabs pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 bg-white p-0">
              <div className="step1">
                <h2 className="bg-primary text-white text-center py-2">
                  Step 1: Rental Period and Box Package
                </h2>
                <div className="row">
                  <div className="col-2">
                    <p className="fs-14 text-center">Select rental period</p>
                  </div>
                  <div className="col-10 m-auto">
                    <div className="pagination">
                      <button className="btn btn-outline-primary fs-14 p-1">
                        1 WEEK
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1 active">
                        2 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        3 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        4 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        5 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        6 WEEKS
                      </button>
                    </div>
                  </div>
                  <div className="container px-5 my-4">
                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-4">
                      <button className="btn btn-dark text-uppercase step1Btn">
                        Next Step
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step2">
                <h2 className="bg-primary text-white text-center py-2">
                  Step 1: Rental Period and Box Package
                </h2>
                <div className="row">
                  <div className="col-2">
                    <p className="fs-14 text-center">Select rental period</p>
                  </div>
                  <div className="col-10 m-auto">
                    <div className="pagination">
                      <button className="btn btn-outline-primary fs-14 p-1">
                        1 WEEK
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1 active">
                        2 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        3 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        4 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        5 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        6 WEEKS
                      </button>
                    </div>
                  </div>
                  <div className="container px-5 my-4">
                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="text-left mt-4">
                          <button className="btn btn-dark text-uppercase step2BackBtn">
                            Previous Step
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-right mt-4">
                          <button className="btn btn-dark text-uppercase step2Btn">
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step3">
                <h2 className="bg-primary text-white text-center py-2">
                  Step 1: Rental Period and Box Package
                </h2>
                <div className="row">
                  <div className="col-2">
                    <p className="fs-14 text-center">Select rental period</p>
                  </div>
                  <div className="col-10 m-auto">
                    <div className="pagination">
                      <button className="btn btn-outline-primary fs-14 p-1">
                        1 WEEK
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1 active">
                        2 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        3 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        4 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        5 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        6 WEEKS
                      </button>
                    </div>
                  </div>
                  <div className="container px-5 my-4">
                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div className="text-left mt-4">
                          <button className="btn btn-dark text-uppercase step3BackBtn">
                            Previous Step
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-right mt-4">
                          <button className="btn btn-dark text-uppercase step3Btn">
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step4">
                <h2 className="bg-primary text-white text-center py-2">
                  Step 1: Rental Period and Box Package
                </h2>
                <div className="row">
                  <div className="col-2">
                    <p className="fs-14 text-center">Select rental period</p>
                  </div>
                  <div className="col-10 m-auto">
                    <div className="pagination">
                      <button className="btn btn-outline-primary fs-14 p-1">
                        1 WEEK
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1 active">
                        2 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        3 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        4 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        5 WEEKS
                      </button>
                      <button className="btn btn-outline-primary fs-14 p-1">
                        6 WEEKS
                      </button>
                    </div>
                  </div>
                  <div className="container px-5 my-4">
                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row py-4">
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-danger">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-danger mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card midCard">
                          <div className="card-header bg-info">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-info mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-0">
                        <div className="card">
                          <div className="card-header bg-success">
                            <div className="text-center">
                              <h3 className="text-white">2 Bedroom</h3>
                              <p className="text-white">40 Boxes</p>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="text-center">
                              <h2>
                                <span className="top fs-14">$</span>209
                                <span className="bottom fs-14">/ 2 WEEKS</span>
                              </h2>
                              <ul className="mt-3">
                                <li className="my-1">35 Large Boxes</li>
                                <li className="my-1">5 Medium Boxes</li>
                                <li className="my-1">1 Moving Dolly</li>
                                <li className="my-1">40 Box Labels</li>
                                <li className="my-1">
                                  Free Delivery and Pickup
                                </li>
                              </ul>
                              <button className="btn btn-success mt-3">
                                ADD PACKAGE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div className="text-left mt-4">
                          <button className="btn btn-dark text-uppercase step4BackBtn">
                            Previous Step
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-right mt-4">
                          <button className="btn btn-dark text-uppercase step4Btn">
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="card noCard">
                <div className="card-header bg-primary">
                  <h5 className="text-white text-center">order summary</h5>
                </div>
                <div className="card-body p-0 py-1">
                  <ul className="list-group list-group-flush p-0">
                    <li className="list-group-item p-0">
                      <table className="table m-0">

                        <tr>
                          <td>
                            <p className="fs-12 font-weight-bold m-0">
                              Package
                            </p>
                          </td>
                          <td>
                            <p className="fs-12 font-weight-bold m-0 text-right text-primary">
                              Change
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fs-12 m-0">3 bedroom (2 weeks)</p>
                          </td>
                          <td>
                            <p className="fs-12 m-0 text-right">$52</p>
                          </td>
                        </tr>
                      </table>
                    </li>
                    <li className="list-group-item p-0">
                      <table className="table m-0">
                        <tr>
                          <td colSpan="3">
                            <p className="fs-12 font-weight-bold m-0">
                              Packing supplies
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-12">
                            <button className="btn p-0" onClick="dec1()">
                              <span className="v-middle text-primary text-12">
                                -
                              </span>
                            </button>
                            <input
                              type="number"
                              className="numberInput text-center text-12"
                              value="1"
                              name=""
                              id="inpNum1"
                            />
                            <button className="btn p-0" onClick="inc1()">
                              <span className="v-middle text-primary text-12">
                                +
                              </span>
                            </button>
                          </td>
                          <td className="v-middle m-auto">
                            <p className="fs-12 m-0">Bubble Wrap</p>
                          </td>
                          <td>
                            <p className="fs-12 m-0 text-right">$52</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-12">
                            <button className="btn p-0" onClick="dec2()">
                              <span className="v-middle text-primary text-12">
                                -
                              </span>
                            </button>
                            <input
                              type="number"
                              className="numberInput text-center text-12"
                              value="1"
                              name=""
                              id="inpNum2"
                            />
                            <button className="btn p-0" onClick="inc2()">
                              <span className="v-middle text-primary text-12">
                                +
                              </span>
                            </button>
                          </td>
                          <td className="v-middle m-auto">
                            <p className="fs-12 m-0">pouches</p>
                          </td>
                          <td>
                            <p className="fs-12 m-0 text-right">$52</p>
                          </td>
                        </tr>
                      </table>
                    </li>
                    <li className="list-group-item p-0">
                      <table className="table m-0">
                        <tr>
                          <td colSpan="3">
                            <p className="fs-12 font-weight-bold m-0">
                              moving supplies (rentd)
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-12">
                            <button className="btn p-0" onClick="dec3()">
                              <span className="v-middle text-primary text-12">
                                -
                              </span>
                            </button>
                            <input
                              type="number"
                              className="numberInput text-center text-12"
                              value="1"
                              name=""
                              id="inpNum3"
                            />
                            <button className="btn p-0" onClick="inc3()">
                              <span className="v-middle text-primary text-12">
                                +
                              </span>
                            </button>
                          </td>
                          <td className="v-middle m-auto">
                            <p className="fs-12 m-0">glass divider</p>
                          </td>
                          <td>
                            <p className="fs-12 m-0 text-right">$52</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-12">
                            <button className="btn p-0" onClick="dec4()">
                              <span className="v-middle text-primary text-12">
                                -
                              </span>
                            </button>
                            <input
                              type="number"
                              className="numberInput text-center text-12"
                              value="1"
                              name=""
                              id="inpNum4"
                            />
                            <button className="btn p-0" onClick="inc4()">
                              <span className="v-middle text-primary text-12">
                                +
                              </span>
                            </button>
                          </td>
                          <td className="v-middle m-auto">
                            <p className="fs-12 m-0">wardrobe box</p>
                          </td>
                          <td>
                            <p className="fs-12 m-0 text-right">$52</p>
                          </td>
                        </tr>
                      </table>
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-primary">
                  <table className="table m-0">
                    <tr>
                      <td className="p-0 border-0">
                        <p className="fs-12 font-weight-bold m-0 text-white">
                          total cost
                        </p>
                      </td>
                      <td className="p-0 border-0">
                        <p className="fs-12 font-weight-bold m-0 text-right text-white">
                          $52
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- show tabs --> */}
    </>
  );
}
