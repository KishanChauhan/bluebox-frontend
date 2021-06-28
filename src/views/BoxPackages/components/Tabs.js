import React from "react";

export default function Tabs() {
  return (
    <>
      <section className="tabsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 p-0">
              <div className="row">
                <div className="col-3">
                  <div className="card st1 active" id="st1">
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
                  <div className="card st2" id="st2">
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
                  <div className="card st3" id="st3">
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
                  <div className="card st4" id="st4">
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
    </>
  );
}
