import React from "react";

export default function Footer() {
  return (
    <>
    {/* <!-- footer --> */}
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <a href="http://localhost:3000/">
                        <img src={"../../img/logo.png"} className="img-fluid logo" alt="footer logo" />
                    </a>
                    <p className="text-white fs-13 mt-3">
                        Since 2009 ZippGo has delivered 
                        more than a half million reusable
                        moving boxes to Bay Area homes 
                        and offices. 
                    </p>
                </div>
                <div className="col-md-2">
                    <h5 className="text-white font-weight-bold">ABOUT</h5>
                    <div className="line bg-primary w-50"></div>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">About ZippGo</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Pricing</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Home Moves</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Office Moves</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Reviews</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Why ZippGo</a>
                        </li>
                    </ul>
                </div>
                
                <div className="col-md-2">
                    <h5 className="text-white font-weight-bold">Support</h5>
                    <div className="line bg-primary w-50"></div>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">FAQ</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Contact</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Press</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Terms & Cond</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Blog</a>
                        </li>
                    </ul>
                </div>

                 <div className="col-md-3">
                    <h5 className="text-white font-weight-bold">Moving Box Rentals</h5>
                    <div className="line bg-primary w-50"></div>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12"> Moving Boxes San Francisco</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Moving Boxes Oakland</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Moving Boxes San Jose</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Moving Boxes Mountain View</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Moving Boxes Berkeley</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/" className="text-white fs-12">Moving Boxes Sunnyvale</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h5 className="text-white font-weight-bold">Newsletter</h5>
                    <div className="line bg-primary w-50"></div>

                    <p className="fs-12 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

                   <form action="">
                    <input type="text" className="form-control fs-12 bg-white" placeholder="EMAIL ADRESS" name="" id="" />
                    <input type="submit" value="Submit" className="btn btn-primary br-0 mt-2 fs-12 w-100" name="" id="" />
                   </form>
               
              </div>
            </div>
          </div>
    </section>
  </>
  );
}

