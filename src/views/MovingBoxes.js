import React from "react";

export default function MovingBox(dispatch) {
  return (
    <>
      {/* <!-- banner section --> */}
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
      {/* <!-- banner section ends here --> */}
      {/* <!-- order-now --> */}
      <section className="order-now bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h5 className="font-weight-bold text-white mb-0">
                    Want to make this your easiest move ever?
                  </h5>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-dark w-100 d-block mt-2"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    Order Now
                  </button>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      {/* <!-- order-now --> */}

      {/* <!-- beats cardboard box --> */}
      <section className="cardboardBox">
        <div className="container">
          <div className="text-center">
            <img
              src="img/beats.png"
              className="img-fluid"
              alt="beatBox"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
      {/* <!-- beats cardboard box --> */}

      {/* <!-- better solution --> */}
      <section className="better py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                A better solution than <br></br>
                <span className="font-weight-bold">cardboard boxes</span>
              </h3>
            </div>
            <div className="col-md-7">
              <p
                className="fs-13 mb-0"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Renting plastic moving boxes from ZippGo is a zero-waste packing
                solution with many advantages over buying cardboard boxes. We
                deliver ZippGo boxes right to your door, so you'll never have to
                deal with finding, building and taping boxes, or dealing with
                the post-move box cleanup. ZippGo boxes are ready to be packed
                the moment they arrive..
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- better solution --> */}

      {/* <!-- cards --> */}
      <section className="cards py-4">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 py-2"
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="img-hover-zoom">
                  <img
                    src="img/card-1.png"
                    className="card-img-top img-fluid"
                    alt="card img"
                  />
                </div>
                <div className="card-body">
                  <span className="bg-primary p-1 text-white">SAVE TIME</span>
                  <p className="fs-13 mt-3">
                    Life is hectic enough, and moving makes it even more so. The
                    last thing you want is the hassle of finding, building and
                    taping cardboard moving boxes. Instead, order ZippGo boxes
                    online, and we'll deliver our pre-assembled plastic moving
                    boxes to your door, saving you time and some sanity.{" "}
                    <br></br>- Free Next Day Delivery <br></br>- Arrive Ready To
                    Pack <br></br>- Never Ever Need Tape
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 py-2"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="img-hover-zoom">
                  <img
                    src="img/card-1.png"
                    className="card-img-top img-fluid"
                    alt="card img"
                  />
                </div>
                <div className="card-body">
                  <span className="bg-primary p-1 text-white">SAVE TIME</span>
                  <p className="fs-13 mt-3">
                    Life is hectic enough, and moving makes it even more so. The
                    last thing you want is the hassle of finding, building and
                    taping cardboard moving boxes. Instead, order ZippGo boxes
                    online, and we'll deliver our pre-assembled plastic moving
                    boxes to your door, saving you time and some sanity.{" "}
                    <br></br>- Free Next Day Delivery <br></br>- Arrive Ready To
                    Pack <br></br>- Never Ever Need Tape
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 py-2"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="img-hover-zoom">
                  <img
                    src="img/card-1.png"
                    className="card-img-top img-fluid"
                    alt="card img"
                  />
                </div>
                <div className="card-body">
                  <span className="bg-primary p-1 text-white">SAVE TIME</span>
                  <p className="fs-13 mt-3">
                    Life is hectic enough, and moving makes it even more so. The
                    last thing you want is the hassle of finding, building and
                    taping cardboard moving boxes. Instead, order ZippGo boxes
                    online, and we'll deliver our pre-assembled plastic moving
                    boxes to your door, saving you time and some sanity.{" "}
                    <br></br>- Free Next Day Delivery <br></br>- Arrive Ready To
                    Pack <br></br>- Never Ever Need Tape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- cards --> */}

      {/* <!-- three diffrent boxes --> */}
      <section
        className="cardboardBox"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="text-center">
            <img src="img/boxes.png" className="img-fluid" alt="Boxes" />
          </div>
        </div>
      </section>
      {/* <!-- three diffrent boxes --> */}

      {/* <!-- moving safely --> */}
      <section className="movingSafely py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5
                className="text-uppercase font-weight-bold"
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Moving Safely
              </h5>
              <h2
                className="text-uppercase font-weight-bold"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Satisfaction <br></br>
                Guarantee
              </h2>
              <p
                className="text-uppercase fs-14"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                We're so confident you'll love ZippGo Moving Boxes, we offer a
                100% money back guarantee. If you are unsatisfied for any
                reason, call us within 12 hours of receiving your delivery.
                We'll pick up the boxes in the next available pickup window and
                give you a full refund
              </p>
              <button
                className="btn btn-primary"
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                ORDER NOW
              </button>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <iframe
                src="https://www.youtube.com/embed/A0gITUjBIcg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- moving safely --> */}
    </>
  );
}
