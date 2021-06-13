import React, { useEffect, useState } from 'react';
// import { Link, useHistory, useParams } from 'react-router-dom';
import {
 getHomeData,
} from '../data/API';

export default function Home(dispatch) {
  const [home, setHomeData] = useState();

  const get_home_content = () => {
      getHomeData()
        .then((res) => {
          setHomeData(res.data)
        })
        .catch((e) => console.log(e));
    };


    useEffect(() => {
      get_home_content();
    }, []);

    console.log("---------home-------",home)
    return (
    <>
      <section className="hero position-relative">
        <img
          src={"img/help.png"}
          className="img-fluid position-absolute"
          data-aos="zoom-in"
          data-aos-duration="1500"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 position-relative">
              <h1
                className="mb-0 font-weight-bold"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Forget Cardboard. <br></br>
                We Rent <span className="text-primary">Awesome </span> <br></br>
                Moving Boxes in the <br></br>
                <span className="text-primary">San Francisco</span> Bay Area{" "}
                <br></br>
              </h1>
              <div className="btns mt-4 col-md-9">
                <div className="row">
                  <div className="col-6 px-2">
                    <button
                      className="btn btn-primary w-100 d-block"
                      data-aos="fade-up"
                      data-aos-delay="700"
                      data-aos-duration="1000"
                    >
                      RESIDENTIAL
                    </button>
                  </div>
                  <div className="col-6 px-2">
                    <button
                      className="btn btn-dark w-100 d-block"
                      data-aos="fade-up"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                    >
                      OFFICE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* order process boxes */}
      <section className="columns py-3">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 px-1"
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 m-auto">
                      <img
                        src={"img/order.png"}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9 pl-0">
                      <p className="fs-13 font-weight-bold mb-0">You order</p>
                      <p className="fs-13 mb-0">
                        Order one of our moving box packages. Prices start from
                        just $109
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 px-1"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 m-auto">
                      <img
                        src="img/drop.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9 pl-0">
                      <p className="fs-13 font-weight-bold mb-0">We drop off</p>
                      <p className="fs-13 mb-0">
                        We'll deliver our plastic moving boxes to you with free
                        delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 px-1"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 m-auto">
                      <img
                        src="img/move.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9 pl-0">
                      <p className="fs-13 font-weight-bold mb-0">You move</p>
                      <p className="fs-13 mb-0">
                        Pack the boxes, hire a mover and move into your new home
                        or office
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3 px-1"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3 m-auto">
                      <img
                        src="img/pick.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-9 pl-0">
                      <p className="fs-13 font-weight-bold mb-0">We pick up</p>
                      <p className="fs-13 mb-0">
                        When you're done unpacking, we'll pick up the boxes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* order process boxes ends here */}
      {/* <!-- why choos us --> */}
      <section className="whyChooseUs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/choose.png"
                className="img-fluid"
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="1000"
                alt=""
              />
            </div>
            <div className="col-md-6 m-auto">
              <h5
                className="mb-0"
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                WHY CHOOSE US?
              </h5>
              <div
                className="line"
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="1000"
              ></div>
              <h2
                className="mt-3 font-weight-bold"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                We give complete <br></br>
                control of your shipment
              </h2>
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                Since 2009 ZippGo has delivered more than a half million
                reusable moving boxes to Bay Area homes and offices. Our clean,
                ready-to-pack plastic boxes are delivered to your door, saving
                you money and eliminating the waste and hassle associated with
                cardboard. Check out all of our 5-star reviews and give us a
                shot. You won’t move with cardboard ever again.
              </p>
              <div className="row mt-4">
                <div
                  className="col-md-6 p-1"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-3 m-auto">
                          <img
                            src="img/pick.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-9 pl-0">
                          <p className="fs-13 font-weight-bold mb-0">We pick up</p>
                          <p className="fs-13 mb-0">
                            When you're done unpacking, we'll pick up the boxes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 p-1"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-3 m-auto">
                          <img
                            src="img/pick.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-9 pl-0">
                          <p className="fs-13 font-weight-bold mb-0">We pick up</p>
                          <p className="fs-13 mb-0">
                            When you're done unpacking, we'll pick up the boxes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 p-1"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-3 m-auto">
                          <img
                            src="img/pick.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-9 pl-0">
                          <p className="fs-13 font-weight-bold mb-0">We pick up</p>
                          <p className="fs-13 mb-0">
                            When you're done unpacking, we'll pick up the boxes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 p-1"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <div className="card border-0 bg-transparent">
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-3 m-auto">
                          <img
                            src="img/pick.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-9 pl-0">
                          <p className="fs-13 font-weight-bold mb-0">We pick up</p>
                          <p className="fs-13 mb-0">
                            When you're done unpacking, we'll pick up the boxes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- why choos us --> */}

      {/* <!-- beats cardboard box --> */}
      <section className="cardboardBox">
        <div className="container">
          <div className="text-center">
            <img
              src="img/beats.png"
              className="img-fluid"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <!-- beats cardboard box --> */}

      {/* <!-- slider Section --> */}
    <section className="sliderSection py-3 position-relative">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-primary pl-5">
                        <div className="card-body">
                            <h5 className="mb-0 text-white" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000">WHY CHOOSE US?</h5>
                            <div className="line bg-white" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000"></div>
                            <h2 className="mt-3 font-weight-bold pb-5 text-white" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                We are trusted <br></br>
                                15+ countries <br></br>
                                worldwide
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="slider">
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="shachin" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="card position-relative">
                                <div className="card-body py-4 px-3">
                                    <p className="fs-13">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                    </p>
                                    <p className="fs-13">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="img/shachin.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <p className="fs-13 font-weight-bold mb-0">
                                                Sachin
                                            </p>
                                            <p className="fs-13">
                                                Cricketer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- slider Section --> */}

    {/* <!-- we deliver to this area --> */}
    <section className="we-deliver">
        <div className="container">
            <h2 className="font-weight-bold">We deliver to these Bay Area cities</h2>
            <div className="line bg-primary"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row mt-2">
                        <div className="col-md-3 p-1" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000">
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                            <p>Alameda </p>
                        </div>
                        <div className="col-md-3 p-1" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>
                        <p>Alameda </p>

                        </div>
                        <div className="col-md-3 p-1" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                           <p>Alameda </p>
                        </div>
                        <div className="col-md-3 p-1"data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">
                        <p>Alameda </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 m-auto" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000">
                    <div className="card bg-dark br-0">
                        <div className="card-body">
                            <p className="fs-13 text-primary text-uppercase font-weight-bold mb-0">
                                Request a
                            </p>
                            <h3 className="text-white">
                                Free Quote
                            </h3>
                            <form action="" className="mt-4">
                                <div className="row">
                                    <div className="col-12 p-1">
                                        <input type="text" className="form-control fs-12 my-1" placeholder="Full Name" name="" id="" />
                                    </div>
                                    <div className="col-12 p-1">
                                        <input type="email" className="form-control fs-12 my-1" placeholder="Email Address" name="" id=""/>
                                    </div>
                                    <div className="col-12 p-1">
                                        <input type="text" className="form-control fs-12 my-1" placeholder="Phone Number" name="" id="" />
                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <input type="text" className="form-control fs-12 my-1" placeholder="Where Do You Live" name="" id="" />
                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <input type="text" className="form-control fs-12 my-1" placeholder="Delivery Date" name="" id="" />
                                    </div>
                                    <div className="col-12 p-1">
                                        <button className="btn btn-primary br-0 d-block w-100 text-dark mt-3 font-weight-bold">GET QUOTE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- we deliver to this area --> */}
    {/* <!-- contact --> */}
    <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
                            <div className="row">
                                <div className="col-3 m-auto">
                                    <i className="fa fa-headphones text-white"></i>
                                </div>
                                <div className="col-9">
                                    <p className="mb-0 fs-13 font-weight-bold text-white">
                                        Phone
                                    </p>
                                    <a href="tel:(719) 445-2808" className="text-white fs-13">(719) 445-2808</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="row">
                                <div className="col-3 m-auto">
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="col-9">
                                    <p className="mb-0 fs-13 font-weight-bold text-white">
                                        Address:
                                    </p>
                                    <p className="fs-13 mb-0 text-white">
                                        4575 Marmora Road
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                            <div className="row">
                                <div className="col-3 m-auto">
                                    <i className="far fa-envelope text-white"></i>
                                </div>
                                <div className="col-9">
                                    <p className="mb-0 fs-13 font-weight-bold text-white">
                                        Email:
                                    </p>
                                    <a href="mailto:info@zeppgo.com" className="text-white fs-13">info@zeppgo.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </section>
    {/* <!-- contact --> */}
    </>
  );
}
