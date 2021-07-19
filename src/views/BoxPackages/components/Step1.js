import React, { useEffect, useState } from "react";
import { rentalsPeriods, getBoxPackages } from "../../../data/API";

function step1Btn() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
  document.getElementById("st1").classList.remove("active");
  document.getElementById("st2").classList.add("active");
}

export default function Step1(props) {
  const [rentals, setRentalList] = useState([]);
  const [select_rental, setSelectedRental] = useState("Week 2");
  const [category, setCategory] = useState("Home");
  const [sub_category, setSubCate] = useState("Box Packges");
  const [is_selected, setSelect] = useState(false);
  const [products, setProducts] = useState([]);

  const getRentals = () => {
    rentalsPeriods()
      .then((res) => {
        setRentalList(res?.data);
      })
      .catch((e) => console.log(e));
  };
  const getBoxProducts = (rental = select_rental) => {
    getBoxPackages(category, sub_category, rental)
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getRentals();
    getBoxProducts();
  }, []);

  const selectRentals = (e, rental) => {
    setSelectedRental(rental);
    getBoxProducts(rental);
  };

  const handlePackageClick = (obj) => {
    setSelect(true);
    props.setBox(obj);
  };

  return (
    <>
      <div className="step1" id="step1">
        <h2 className="bg-primary text-white text-center py-2">
          Step 1: Rental Period and Box Package
        </h2>
        <div className="row">
          <div className="col-2">
            <p className="fs-14 text-center">Select rental period</p>
          </div>
          <div className="col-10 m-auto">
            <div className="pagination">
              {rentals.results?.map((obj) => {
                return (
                  <button
                    className={
                      obj.period === select_rental
                        ? "btn btn-outline-primary fs-14 p-1 active"
                        : "btn btn-outline-primary fs-14 p-1"
                    }
                    onClick={(e) => selectRentals(e, obj.period)}
                  >
                    {obj.period}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="container px-5 my-4">
            <div className="row py-4">
              {products.results?.map((obj) => {
                return (
                  <>
                    <div className="col-md-4 p-0">
                      <div className="card">
                        <div className="card-header bg-danger">
                          <div className="text-center">
                            <h3 className="text-white">{obj.title}</h3>
                            <p className="text-white">{obj.unit}</p>
                          </div>
                        </div>

                        <div className="card-body">
                          <div className="text-center">
                            <h2>
                              <span className="top fs-14">$</span>
                              {obj.price}
                              <span className="bottom fs-14">
                                / {obj?.rental.period}
                              </span>
                            </h2>
                            <ul className="mt-3">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: obj.description,
                                }}
                              ></div>
                            </ul>

                            <div className="radio-toolbar">
                              <input
                                type="radio"
                                id={obj.id}
                                name="radio"
                                value="ADD PACKAGE"
                                onClick={() => handlePackageClick(obj)}
                              />
                              <label htmlFor={obj.id}>ADD PACKAGE</label>
                            </div>
                            {/* <button  type="radio" className="btn btn-success mt-3">
                        ADD PACKAGE
                      </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="text-right mt-4">
              <button
                className="btn btn-dark text-uppercase step1Btn"
                onClick={step1Btn}
                disabled={is_selected ? false : true}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
